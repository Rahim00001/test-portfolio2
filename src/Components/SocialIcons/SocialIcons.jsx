import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
const SocialIcons = () => {
    return (
        <div className="hidden md:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[150px] h-[50px] flex justify-between items-center px-4 ml-[-90px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/kamrul-islam-rahim">LinedIn <FaLinkedin size={30} /></a>
                </li>
                <li className="w-[150px] h-[50px] flex justify-between items-center px-4 ml-[-90px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/Rahim00001">Github <FaGithub size={30} /></a>
                </li>
                <li className="w-[150px] h-[50px] flex justify-between items-center px-4 ml-[-90px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-300" href="#contact">Email <HiOutlineMail size={30} /></a>
                </li>
                <li className="w-[150px] h-[50px] flex justify-between items-center px-4 ml-[-90px] hover:ml-[-10px] duration-300">
                    <a className="flex justify-between items-center w-full text-gray-300" href="../../../public/Assets/KAMRUL_RAHIM RESUME.pdf" download>Resume <BsPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    );
};

export default SocialIcons;