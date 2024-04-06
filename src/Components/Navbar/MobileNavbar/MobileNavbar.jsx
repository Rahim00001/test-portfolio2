/* eslint-disable react/prop-types */
import "./MobileNavbar.css"
const MobileNavbar = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <img className="logo" src="../../../../public/Assets/images/logo.svg" alt="" />
                    <ul>
                        <li><a className="menu-item" href=""> Home</a></li>
                        <li><a className="menu-item" href="">Skills</a></li>
                        <li><a className="menu-item" href="">Work Exprience</a></li>
                        <li><a className="menu-item" href="">Contact Me</a></li>
                        <button className="contact-btn" onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;