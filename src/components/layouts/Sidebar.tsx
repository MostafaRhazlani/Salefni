import { LayoutDashboard, FileText, Bell, Settings, CircleUserRound, LogOut } from "lucide-react";
import { useLocation, type Location } from "react-router-dom";
import { Link } from "react-router-dom";

import type { SidebarButtons } from "../../types/sidebarButtons";

export const Sidebar: React.FC = () => {
    const currentRoute: Location = useLocation();
    const SidebarButtons: SidebarButtons[] = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard'
        },
        {
            name: 'Applications',
            icon: FileText,
            path: '/applications'
        },
        {
            name: 'Notifications',
            icon: Bell,
            path: '/notifications'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/settings'
        },
        {
            name: 'Profile',
            icon: CircleUserRound,
            path: '/profile'
        },
    ]

    return (
        <>
            <div className="w-64 h-screen fixed bg-white border border-gray-200 z-50">
                <div className="w-full h-full flex flex-col gap-y-16 py-4 px-4">
                    <div className="flex justify-center w-full h-20">
                        <img src="/src/assets/img/logo/salefni-logo.png" className="w-20 h-full" alt="" />
                    </div>
                    <div className="h-full">
                        <span className="text-sm font-semibold text-gray-500">MAIN</span>
                        <ul className="flex flex-col h-[95%] justify-between gap-1 mt-1">
                            <div className="flex flex-col gap-1">
                                { SidebarButtons.map(button => {
                                    const Icon = button.icon;
                                    const isActive = currentRoute.pathname === ('/admin' + button.path) ? "text-white bg-cyan-600 hover:bg-cyan-700": "text-gray-500 hover:text-gray-800 hover:bg-gray-200";
                                    return (
                                        <li>
                                            <Link to={'/admin' + button.path} className={"flex cursor-pointer transition-all duration-300 rounded-md font-medium gap-2 px-3 py-2 items-center " + isActive}>
                                                <Icon size={20}/>
                                                <span>{button.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </div>
                            <li className="flex cursor-pointer transition-all duration-300 rounded-md font-medium gap-2 px-3 py-2 items-center text-red-500 hover:text-white hover:bg-red-600"><LogOut size={20}/> Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}