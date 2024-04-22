/* eslint-disable react/prop-types */
import "./MobileNavbar.css"
const MobileNavbar = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <img className="logo" src="../../../../public/Assets/images/logo.svg" alt="" />
                    <ul>
                        <li><a className="menu-item" href="#"> Home</a></li>
                        <li><a className="menu-item" href="#about">About</a></li>
                        <li><a className="menu-item" href="#skills">Skills</a></li>
                        <li><a className="menu-item" href="#projects">Projects</a></li>
                        <li><a className="menu-item" href="contact">Contact Me</a></li>
                        <button className="contact-btn" onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;