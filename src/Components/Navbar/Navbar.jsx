import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="../../../public/Assets/images/logo.svg" alt="" />

                    <ul>
                        <li><a className="menu-item" href="">Home</a></li>
                        <li><a className="menu-item" href="">Skills</a></li>
                        <li><a className="menu-item" href="">Work Exprience</a></li>
                        <li><a className="menu-item" href="">Contact Me</a></li>
                        <button className="contact-btn" onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;