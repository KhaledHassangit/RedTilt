import Logo from "../assets/Logo.png"
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "dark" ? true : false;
    });

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };
    useEffect(() => {
        document.body.classList.remove("dark-mode", "light-mode");
        document.body.classList.add(isDarkMode ? "dark-mode" : "light-mode");
    }, [isDarkMode]);


    return (
        <>
                    <header className="w-full max-w-7xl mx-auto p-3 flex items-center justify-between shadow-lg">
                <a href="/" className="flex items-center space-x-2">
                    <img src={Logo} width={25} height={25} alt="Logo" />
                    <div className="text-xl font-bold ms-1">RedTilt</div>
                </a>

                <nav className="hidden md:flex flex-grow justify-center space-x-6">
                    <a href="#services" className="hover:opacity-80">
                        Services
                    </a>
                    <a href="#reviews" className="hover:opacity-80">
                        Reviews
                    </a>
                    <a href="#blog" className="hover:opacity-80">
                        Blog
                    </a>
                    <a href="#jobs" className="hover:opacity-80">
                        Jobs
                    </a>
                </nav>

                <div className="flex items-center space-x-4">
                    <div className="px-1 bg-transparent rounded-md	 border-2  border-red-800  flex justify-center items-center">
                        <button
                            className="p-2 rounded-full bg-transparent border-2 border-transparent hover:bg-red-500 hover:border-red-500 flex items-center justify-center transition-all"
                            onClick={toggleTheme}
                            aria-label="Toggle Light/Dark Mode"
                        >
                            {isDarkMode ? (
                                <FaSun className="text-white" />
                            ) : (
                                <FaMoon className="text-white" />
                            )}
                        </button>
                    </div>

                    <button className="hidden md:block bg-primary px-4 py-2 rounded-lg	hover:bg-primary-dark">
                        Start a project
                    </button>

                    <button
                        className="md:hidden p-2  rounded"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Responsive Menu */}
            {menuOpen && (
                <nav className="md:hidden  text-white p-4">
                    <ul className="space-y-4">
                        <li>
                            <a href="#services" className="block hover:opacity-80">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#reviews" className="block hover:opacity-80">
                                Reviews
                            </a>
                        </li>
                        <li>
                            <a href="#blog" className="block hover:opacity-80">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#jobs" className="block hover:opacity-80">
                                Jobs
                            </a>
                        </li>
                        <li>
                            <button className="bg-primary w-full px-4 py-2 rounded hover:bg-primary-dark">
                                Start a project
                            </button>
                        </li>
                    </ul>
                </nav>
            )}

        </>
    )
}

export default NavBar