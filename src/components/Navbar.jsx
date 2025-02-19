import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const getLinkClasses = (path) => {
        const isActive = location.pathname === path;
        return `block py-2 px-3 md:p-0 rounded mb-1 ${isActive ? (isMenuOpen ? 'text-white bg-medium-purple' : 'text-white bg-transparent md:text-medium-purple') : 'hover:bg-light-hover text-medium-purple md:hover:bg-transparent md:hover:text-medium-purple text-white'}`;
    };

    return (
        <nav className="bg-dark-purple fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">João
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-medium-purple"> Pedro</span>
                    </span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="/curriculo.pdf" target="_blank" className="text-white bg-medium-purple hover:bg-medium-darker-purple focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Download Resume</a>
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
                    <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium ${isMenuOpen ? 'bg-lighter-darker-purple/80' : 'bg-transparent'} border rounded-lg border-bdr md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}>
                        <li>
                            <Link to="/" className={getLinkClasses('/')} onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/About" className={getLinkClasses('/About')} onClick={closeMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="/Projects" className={getLinkClasses('/Projects')} onClick={closeMenu}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className={getLinkClasses('/Contact')} onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;