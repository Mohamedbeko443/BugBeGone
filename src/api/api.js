// api/api.js
import axios from 'axios';
import useAuthStore from '../store/Auth';

const base = import.meta.env.VITE_BASE_URL; 

const api = axios.create({
    baseURL: base , 
    withCredentials: true,
});

// Add access token to every request
api.interceptors.request.use(config => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Refresh token logic
api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const res = await axios.post(
                    `${base}/api/auth/refresh-token`,
                    {},
                    { withCredentials: true }
                );

                const newToken = res.data.accessToken;
                useAuthStore.getState().setAccessToken(newToken);

                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return api(originalRequest);
            } catch (err) {
                console.log('Refresh token failed:', err);
                useAuthStore.persist.clearStorage(); 
                window.location.href = '/login';
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
