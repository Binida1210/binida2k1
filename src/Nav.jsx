import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./pic/logo.jpg";

export default function Nav() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen); // Toggle trạng thái menu
    };

    return (
        <nav className="nav-container">
            <div className="nav-logo">
                <img src={logo} alt="logo" className="nav-logo-img" />
            </div>
            {/* Menu toggle button (always visible) */}
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </div>
            {/* Menu items */}
            <ul className={`nav-items-container ${isMenuOpen ? "open" : ""}`}>
                <NavItem className="nav-items" to="/" label="Home" />
                <NavItem className="nav-items" to="/about" label="About" />
                <NavItem className="nav-items" to="/menu" label="Menu" />
                <NavItem className="nav-items" to="/gallery" label="Gallery" />
                <NavItem className="nav-items" to="/contact" label="Contact" />
            </ul>
        </nav>
    );
}

function NavItem({ to, label }) {
    return (
        <li className="nav-item">
            <Link to={to} className="nav-link">
                {label}
            </Link>
        </li>
    );
}
