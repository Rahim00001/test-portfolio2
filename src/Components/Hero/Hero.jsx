import "./Hero.css"
import hero from "../../../public/Assets/images/hero.png"
const Hero = () => {
    return (
        <section className="hero-container min-h-[85vh] flex flex-col items-center justify-center">
            <div className="w-max">
                <div className="flex justify-center items-center">
                    <img src={hero} alt="" className="w-96" />
                </div>
                <p className="text-xl text-neutral-400">Hello! I am,</p>
                <h1 className="text-7xl font-bold font-quicksand text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Kamrul Islam Rahim</h1>
                <h4 className="text-3xl text-neutral-300 text flex justify-end">Front-End Developer</h4>
            </div>
            <p className="max-w-[820px] mx-auto text-center mt-6">Passionate about web development with a knack for turning ideas into interactive and engaging web experiences. My journey in coding started with a love for crafting pixel-perfect designs and has evolved into a full-stack adventure.</p>
            <div className="mt-5">
                <button className="contact-btn" onClick={() => { }}>Resume</button>
            </div>
        </section>
    );
};

export default Hero;