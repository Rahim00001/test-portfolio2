import { useState } from "react";
import "./Navbar.css"
import { FaAlignJustify } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [active, setActive] = useState(0);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}></MobileNavbar>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <a href="#">
                        <p className="logo font-sacramento text-4xl font-semibold">Rahim</p>
                    </a>

                    <ul>
                        <li><a className={`menu-item ${active === "#" ? 'activeLink' : ' '}`} href="#" onClick={() => { setActive("#") }}>Home</a></li>
                        <li><a className={`menu-item ${active === "#about" ? 'activeLink' : ' '}`} href="#about" onClick={() => { setActive("#about") }}>About</a></li>
                        <li><a className={`menu-item ${active === "#skills" ? 'activeLink' : ' '}`} href="#skills" onClick={() => { setActive("#skills") }}>Skills</a></li>
                        <li><a className={`menu-item ${active === "#projects" ? 'activeLink' : ' '}`} href="#projects" onClick={() => { setActive("#projects") }}>Projects</a></li>
                        {/* <li><a className={`menu-item ${active === "#contact" ? 'activeLink' : ' '}`} href="#contact" onClick={() => { setActive("#contact") }}>Contact Me</a></li> */}
                        <a href="#contact"><button className="contact-btn" onClick={() => { }}>Hire Me</button></a>
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