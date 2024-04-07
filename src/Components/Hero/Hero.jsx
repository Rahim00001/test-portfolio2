import "./Hero.css"
const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Expriences That Inspire</h2>
                <p>Passionate Frontend Developer | Transorming Ideas into Seamless and Visualy Stuning Web Solution</p>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="../../../public/Assets/images/react.png" alt="" className="w-16 h-12" />
                    </div>
                    <img src="../../../public/Assets/images/about_profile.svg" className="rounded-3xl" alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="../../../public/Assets/images/html.png" className="w-16 h-10" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="../../../public/Assets/images/css.png" className="w-16 h-10" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="../../../public/Assets/images/js.png" className="w-[50px] h-10" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;