import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import BugDetails from "../pages/BugDetails/BugDetails";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";





export default function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/bug/:id" element={<BugDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
