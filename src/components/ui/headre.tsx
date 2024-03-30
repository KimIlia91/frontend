import Link from "next/link";
import LogoutButton from "../auth/logout/LogoutButton";
import { auth } from "@/auth";

const Header = async() => {
    const session = await auth();
    
    return (
        <header className="w-full h-20 flex justify-around top-0">
            <nav className="flex justify-around gap-28 items-center w-full">
                <p className="font-bold text-4xl">Logo</p>
                {
                    session 
                    ?<>
                        <div className="flex gap-14">
                            <Link
                                href="/project"
                                className="text-xl hover:underline hover:transition-all hover:duration-300"
                            >
                                Проекты
                            </Link>
                            {
                                session?.user?.isAdmin ?
                                <Link
                                    href="/admin/user"
                                    className="text-xl hover:underline hover:transition-all hover:duration-300"
                                >
                                    Сотрудники
                                </Link> : null
                            }
                        </div>
                        <LogoutButton /> 
                    </> 
                    : null
                }
            </nav>
        </header>
    )
}

export default Header;