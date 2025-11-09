import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../../tools/axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import type { User } from "../../types/user";
import { AxiosError } from "axios";


interface LoginResponse {
    accessToken: string,
    user: User
}
export const Login: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [token, setToken] = useLocalStorage<string>("token");
    const [user, setUser] = useLocalStorage<User>("user");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await api.post<LoginResponse>("/login", { email, password });

            const user: User = response.data.user;
            setToken(response.data.accessToken);
            setUser(user);
            setMessage("Login successfuly!");
            if (user.role === 'admin') {
                navigate('/admin/dashboard');

            } else if (user.role === 'guest') {
                navigate('/');
            }

        } catch (error) {
            const axiosError = error as AxiosError;

            console.log(axiosError.response?.data);
            if (error instanceof AxiosError && error.response?.status === 401) {
                setMessage("Invalid credintails");
            } else {
                setMessage("Server error")
            }
        }
    }
    return (
        <>
            <div className="flex flex-col sm:flex-row">
                <div className="p-8 sm:p-0 sm:w-1/2 flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="w-full sm:w-[80%] lg:w-[50%] bg-white border border-gray-200 p-6 rounded-2xl shadow space-y-6">
                        <div className="w-full flex justify-center">
                            <img src="/src/assets/img/logo/salefni-logo-1.png" className="w-32 mb-6" alt="" />
                        </div>

                        {/* Email field */}
                        <div className="">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
                                placeholder="Enter your email here"
                            />
                        </div>

                        {/* Password field */}
                        <div className="">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
                                placeholder="************"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-cyan-600 cursor-pointer text-white py-2 rounded-lg font-medium hover:bg-cyan-700 transition"
                        >
                            Sign in
                        </button>

                        <div>
                            <span className="text-gray-600">I don't have account </span>
                            <Link to="/register" className="text-cyan-600 hover:text-cyan-700">Register</Link>
                        </div>
                    </form>

                </div>
                <div className="sm:w-1/2 min-h-screen bg-[url(/src/assets/img/login-image.png)] bg-center bg-cover bg-no-repeat"></div>
            </div>
        </>
    );
}
