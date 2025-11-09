import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { useAuth } from "../../hooks/useAuth";

import { Navigate, Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
    const isAuthenticated: boolean = useAuth();

    if(!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    
    return (
        <>
            <Sidebar />
            <div className="ml-64 p-10">
                <Outlet />
            </div>
            <Footer />
        </>
    )
    
}

export default AdminLayout