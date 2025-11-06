import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="ml-64 pt-24 p-10">
                <Outlet />
            </div>
            <Footer />
        </>
    )
    
}

export default AdminLayout