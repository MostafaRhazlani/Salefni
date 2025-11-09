import { LogoutButton } from "../UI/LogoutButton"
import { Link } from "react-router-dom"

export const Header: React.FC = () => {
    return (
        <>
            <div className="w-full h-20 p-2 flex items-center bg-white border border-gray-200 fixed z-40">
                <div className="flex justify-between items-center w-[90%] mx-auto">
                    <div className="w-28 cursor-pointer">
                        <Link to="/">
                            <img src="/src/assets/img/logo/salefni-logo-1.png" alt="" />
                        </Link>
                    </div>
                    <div>
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </>
    )
}