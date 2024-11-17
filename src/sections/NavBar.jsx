import PropTypes from 'prop-types'; // Import PropTypes for prop validation
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

// PropTypes validation for NavItems
NavItems.propTypes = {
    onClick: PropTypes.func, // Validates that onClick is a function
};

const Navbar = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-5">
                {/* Logo on the left */}
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    Amira Boubaker
                </a>

                {/* Navigation links displayed on all screen sizes */}
                <nav className="flex space-x-4">
                    <NavItems />
                </nav>
            </div>
        </div>
    </header>
);

export default Navbar;
