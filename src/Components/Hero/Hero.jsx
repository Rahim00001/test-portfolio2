import "./Hero.css"
import hero from "../../../public/Assets/images/hero.png"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
const Hero = () => {
    return (
        // <section className="hero-container">
        <section className="hero-container min-h-[85vh] flex flex-col items-center justify-center">
            <div className="w-max">
                <div className="flex justify-center items-center">
                    <img src={hero} alt="" className="w-96" />
                </div>
                <p className="text-xl text-neutral-400">Hello! I am,</p>
                <h1 className="text-7xl font-bold font-quicksand text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Kamrul Islam Rahim</h1>
                <h4 className="text-3xl text-neutral-300 text flex justify-end">Front-End Developer</h4>
            </div>
            <p className="max-w-[820px] mx-auto text-center mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti doloremque ex quos aspernatur cupiditate? Harum exercitationem expedita dolorum, fuga consequuntur quod placeat mollitia velit a rerum. Soluta culpa labore autem. Magnam maxime sed quam quae?</p>
            <div className="text-neutral-400 text-3xl flex mt-5 gap-2">
                <IoLogoLinkedin />
                <FaSquareGithub />
                <FaSquareFacebook />
            </div>
        </section>
    );
};

export default Hero;