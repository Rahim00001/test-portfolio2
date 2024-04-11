import "./Hero.css"
const Hero = () => {
    return (
        // <section className="hero-container">
        <section className="hero-container min-h-[80vh] flex flex-col items-center justify-center">
            {/* <div className="hero-content">
                <h2>Building Digital Expriences That Inspire</h2>
                <p>Passionate Frontend Developer | Transorming Ideas into Seamless and Visualy Stuning Web Solution</p>
            </div> */}
            {/* <div className="hero-img">
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
            </div> */}
            <div className="w-max">
                <p className="text-xl text-neutral-400">Hello! I am,</p>
                <h1 className="text-7xl font-bold font-quicksand text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Kamrul Islam Rahim</h1>
                <h4 className="text-3xl text-neutral-300 text flex justify-end">Front-End Developer</h4>
            </div>
            <p className="max-w-screen-lg mx-auto text-center mt-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae tenetur voluptate explicabo labore doloribus assumenda perspiciatis voluptatem incidunt suscipit sunt laudantium minima, voluptatibus reiciendis blanditiis error obcaecati, ad veniam? Fugit corrupti distinctio, expedita voluptas placeat ab laboriosam neque incidunt reprehenderit dolorum enim ipsum a voluptate est necessitatibus quis facere nostrum.</p>
        </section>
    );
};

export default Hero;