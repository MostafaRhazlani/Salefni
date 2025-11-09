import { Navigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { User } from "../types/user";

interface RoleProtectedRoute {
    allowedRoles: string[];
}

export const RoleProtectedRoute: React.FC<RoleProtectedRoute> = ({ allowedRoles }) => {
    const [token] = useLocalStorage<string>('token');
    const [user] = useLocalStorage<User>('user');

    if(!token) return <Navigate to="/login" replace/>

    if(user && !allowedRoles.includes(user.role)) {
        return <Navigate to="/authorized" replace/>
    }

    return <Outlet />
}