import "./Hero.css"
import hero from "../../../public/Assets/images/hero.png"
import TypewriterComponent from "typewriter-effect";
import { HiOutlineDownload } from "react-icons/hi";
const Hero = () => {
    return (
        <section className="hero-container min-h-[88vh] flex flex-col items-center justify-center">
            <div className="w-max">
                <div className="flex justify-center items-center" data-aos="fade-up-right" data-aos-duration="1000">
                    <img src={hero} alt="" className="w-96" />
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000">
                    <p className="text-xl text-neutral-400">Hello! I am,</p>
                    <h1 className="text-4xl md:text-7xl font-bold font-quicksand text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Kamrul Islam Rahim</h1>
                    <h4 className="text-2xl md:text-3xl text-neutral-400 flex justify-end">
                        <TypewriterComponent
                            options={{
                                strings: ['Front-End Developer', 'MERN Stack Developer', 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h4>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1000">
                <p className="max-w-[820px] mx-auto text-neutral-200 text-center mt-6">Passionate about web development with a knack for turning ideas into interactive and engaging web experiences. My journey in coding started with a love for crafting pixel-perfect designs and has evolved into a full-stack adventure.</p>
                <div className="mt-5">
                    <a href="../../../public/Assets/KAMRUL_RAHIM RESUME.pdf" download>
                        <div>
                            <button className="contact-btn">Resume  <HiOutlineDownload className="ml-1 mt-[2px]" size={18} /></button>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;