import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";


export const LogoutButton: React.FC = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }
    return (
        <>
            <button onClick={logout} className="flex cursor-pointer w-full transition-all duration-300 rounded-md font-medium gap-2 px-3 py-2 items-center text-red-500 hover:text-white hover:bg-red-600"><LogOut size={20}/> Logout</button>
        </>
    )
}