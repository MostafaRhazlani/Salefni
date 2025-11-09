import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import type { User } from "../../types/user";

export const Authorized: React.FC = () => {
    const [user] = useLocalStorage<User>("user");

    const navigate = useNavigate();
    const path = user?.role === "admin" ? "/admin/dashboard" : "/"

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-3xl font-bold mb-4 text-red-600">
                Access Denied
            </h1>
            <p className="text-lg mb-4">
                You are logged in but you do not have permission to access this page.
            </p>
            <button
                onClick={() => navigate(path)}
                className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition cursor-pointer"
            >
                Go Back
            </button>
        </div>
    );
};
