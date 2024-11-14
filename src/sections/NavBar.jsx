import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <a href={item.href} className="nav-li_a" onClick={onClick}>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between py-5">
                    {/* Logo on the left */}
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Amira Boubaker
                    </a>

                    {/* Right Side - NavItems and Menu Icon */}
                    <div className="flex items-center space-x-4">
                        {/* Show NavItems only on larger screens */}
                        <nav className="hidden sm:flex space-x-4">
                            <NavItems onClick={closeMenu} />
                        </nav>

                        {/* Always display the menu icon on smaller screens */}
                        <button
                            onClick={toggleMenu}
                            className="text-neutral-400 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {/* Toggle between menu and close icon */}
                            <img
                                src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
                                alt="toggle"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {isOpen && (
                <div className="sm:hidden bg-black/80 w-full fixed top-0 left-0 h-screen flex justify-center items-center z-40">
                    <nav className="p-5 w-full max-w-xs">
                        {/* Display NavItems on mobile when the menu is open */}
                        <NavItems onClick={closeMenu} />
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
