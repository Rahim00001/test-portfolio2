import { useState } from "react";
import "./Navbar.css"
import { FaAlignJustify } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}></MobileNavbar>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="/Assets/images/logo.svg" alt="" />

                    <ul>
                        <li><a className="menu-item" href="#">Home</a></li>
                        <li><a className="menu-item" href="#about">About</a></li>
                        <li><a className="menu-item" href="#skills">Skills</a></li>
                        <li><a className="menu-item" href="#contact">Contact Me</a></li>
                        <button className="contact-btn" onClick={() => { }}>Hire Me</button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <FaAlignJustify className="ml-[5px]">{openMenu ? "close" : "menu"}</FaAlignJustify>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;