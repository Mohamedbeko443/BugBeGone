import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            accessToken: null,
            setAccessToken: (newToken) => set({ accessToken: newToken }),
            removeAccessToken: () => set({ accessToken: null }),
        }),
        {
            name: "auth-storage", 
        }
    )
);

export default useAuthStore;
