import { Navigate } from "react-router-dom";
import useAuthStore from "../store/Auth";


export default function ProtectedRoute({ children }) {

    const accessToken = useAuthStore((state) => state.accessToken);
    
    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
