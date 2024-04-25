import "./AboutMe.css"
import about from "../../../public/Assets/About.json"
import { useState } from "react";
import Lottie from "lottie-react";
import { FaRegUser, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GoBriefcase } from "react-icons/go";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
const infoData = [
    {
        icon: <FaRegUser size={20}></FaRegUser>,
        text: 'Kamrul Islam Rahim'
    },
    {
        icon: <FaPhoneAlt size={20}></FaPhoneAlt>,
        text: '+880 1767260638'
    },
    {
        icon: <HiOutlineMail size={20}></HiOutlineMail>,
        text: 'rahimlpt2022@gmail.com'
    },
    {
        icon: <SlCalender size={20}></SlCalender>,
        text: 'Born on 20 October 2003'
    },
    {
        icon: <SlGraduation size={20}></SlGraduation>,
        text: 'BSc on Statistics'
    },
    {
        icon: <MdOutlineMapsHomeWork size={20}></MdOutlineMapsHomeWork>,
        text: 'Demra, Dhaka-1361'
    }
];
const exprienceData = [

    {
        company: 'Programing Hero (Endgame)',
        title: "Shadow Intern (Project)",
        years: "Jan 2024 - March 2024"
    },
    {
        company: 'Personal Projects',
        title: "Self Learning",
        years: "Dec 2022 - Current"
    }
]
const educationData = [
    {
        institute: 'Dhaka College',
        title: "Bachelor of Science",
        years: "2022-Current"
    },
    {
        institute: 'Dania University College',
        title: "Higher Secondary School Certificate(HSC)",
        years: "2019-2021"
    },
    {
        institute: 'Bamoil Ideal High Scholl and College',
        title: "Secondary School Certificate(SSC)",
        years: "2017-2019"
    }
]
const AboutMe = () => {
    const [toggle, setToggle] = useState(1);
    const updateToggle = (id) => {
        setToggle(id)
    }
    return (
        <section id="about" className="w-[100%] min-h-[80vh] flex flex-wrap justify-center md:justify-between items-center">
            <div className="about-left md:basis-[38%] basis-[45%]" data-aos="fade-up-right" data-aos-duration="1000">
                <Lottie animationData={about}></Lottie>
            </div>
            <div className="about-right basis-[50%]" data-aos="fade-up-left" data-aos-duration="1000">
                <div className="section-title">
                    <h2 className="sub-title text-[40px] text-[#d9dae7] font-semibold">About Me</h2>
                </div>
                <div className="tab-title flex py-5">
                    <p className="tab-links text-sm md:text-base lg:text-lg mr-3 md:mr-6 lg:mr-12  active-link" onClick={() => updateToggle(1)}>Personal Info</p>
                    <p className="tab-links text-sm md:text-base lg:text-lg mr-3 md:mr-6 lg:mr-12 " onClick={() => updateToggle(2)}>Education</p>
                    <p className="tab-links text-sm md:text-base lg:text-lg" onClick={() => updateToggle(3)}>Exprience</p>
                </div>

                {/* Personal Info */}
                <div className={toggle === 1 ? "show-content" : "content"} id="skills">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">Creating Seamless and Intuitive Web experiences</h3>
                        <p className="text-neutral-300 mb-3">Passionate web developer with a knack for turning ideas into interactive and engaging web experiences. My journey in coding started with a love for crafting pixel-perfect designs and has evolved into a full-stack adventure.</p>
                        <div className="grid lg:grid-cols-2 gap-4 mb-12">
                            {infoData.map((item, index) => {
                                return <div className="flex items-center gap-x-4 mx-auto lg:mx-0" key={index}>
                                    <div>{item.icon}</div>
                                    <div>{item.text}</div>
                                </div>
                            })}
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div>Language Skill</div>
                            <div className="border-b"></div>
                            <p>Bangla, English, Hindi</p>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className={toggle === 2 ? "show-content" : "content"} id="education">
                    <div>
                        <h3 className="text-3xl font-bold mb-4 text-center md:text-left">Academic Qualifications</h3>
                        <div>
                            <div className="flex gap-x-3 items-center text-xl mb-3">
                                <IoBookOutline />
                                <p>Education</p>
                            </div>
                            {/* list */}
                            <div className="flex flex-col gap-y-3">
                                {educationData.map((item, index) => {
                                    return <div className="flex gap-x-8 group" key={index}>
                                        <div className="h-[84px] w-[1px] bg-neutral-500 relative ml-2">
                                            <div className="w-[11px] h-[11px rounded-full absolute -left-2 group-hover:translate-y-[70px] transition-all duration-500">
                                                <FaRegCircleDot />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-xl leading-none mb-2">{item.institute}</div>
                                            <div className="text-lg text-neutral-400 leading-none mb-1">{item.title}</div>
                                            <div className="font-medium mb-3">{item.years}</div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Exprieence */}
                <div className={toggle === 3 ? "show-content" : "content"} id="education">
                    <div>
                        <h3 className="text-3xl font-bold mb-4 text-center md:text-left">My Awsome Journey</h3>
                        <div>
                            <div className="flex gap-x-3 items-center text-xl mb-3">
                                <GoBriefcase />
                                <p>Exprience</p>
                            </div>
                            {/* list */}
                            <div className="flex flex-col gap-y-3">
                                {exprienceData.map((item, index) => {
                                    return <div className="flex gap-x-8 group" key={index}>
                                        <div className="h-[75px] w-[1px] bg-neutral-500 relative ml-2">
                                            <div className="w-[11px] h-[11px rounded-full absolute -left-2 group-hover:translate-y-[65px] transition-all duration-500">
                                                <FaRegCircleDot />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-xl leading-none mb-2">{item.company}</div>
                                            <div className="text-lg text-neutral-400 leading-none mb-1">{item.title}</div>
                                            <div className="font-medium mb-3">{item.years}</div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;