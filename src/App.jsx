import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import useAuthStore from './store/Auth';
import { useEffect } from "react";
import axios from 'axios';


function App() {

const base = import.meta.env.VITE_BASE_URL;

  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const accessToken = useAuthStore((state) => state.accessToken);


  useEffect(() => {
    const tryRefresh = async () => {
      try {
        console.log( accessToken);
        const res = await axios.post(`${base}/api/auth/refresh-token`, {}, {
          withCredentials: true
        });
        setAccessToken(res.data.accessToken);
        console.log( accessToken);
      } catch {
        console.log("No session found");
      }
    };

    tryRefresh();
  }, []);


  return (
    <>
      <Toaster />
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
