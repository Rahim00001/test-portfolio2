import "./AboutMe.css"
import about from "../../../public/Assets/images/hero.png"
import { useState } from "react";
const AboutMe = () => {
    const [toggle, setToggle] = useState(1)
    function updateToggle(id) {
        setToggle(id)
    }
    return (
        <section id="about" className="w-[100%] min-h-[80vh] flex flex-wrap justify-between items-center">
            <div className="about-left basis-[36%]">
                <img src={about} className="w-[100%] rounded-2xl" alt="" />
            </div>
            <div className="about-right basis-[60%]">
                <div className="section-title">
                    <h2 className="sub-title text-[40px] text-[#d9dae7] font-semibold">About Me</h2>
                    <h3 className="title text-[22px] leading-5">Web Developer</h3>
                </div>
                <p className="py-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus fugit voluptatum molestias. Optio architecto sunt quam quo aspernatur consequatur eos excepturi, perferendis repellendus possimus autem pariatur tempore nostrum vel error aliquam. Magnam, dolor animi aut ducimus deleniti tenetur officia? Labore illum quos minus possimus molestias, incidunt atque perferendis impedit veniam.</p>
                <div className="tab-title flex py-7">
                    <p className="tab-links active-link" onClick={() => updateToggle(1)}>Skills</p>
                    <p className="tab-links" onClick={() => updateToggle(2)}>Exprience</p>
                    <p className="tab-links" onClick={() => updateToggle(3)}>Education</p>
                </div>
                <div className={toggle === 1 ? "show-content" : "content"} id="skills">
                    <ul>
                        <li>
                            <span>UI/UX Design</span> <br />
                            Designing Web/App Interfaces
                        </li>
                        <li>
                            <span>Web Develpment</span> <br />
                            Web app Develpment
                        </li>
                        <li>
                            <span>Digital Marketing</span> <br />
                            Building Businesses
                        </li>
                    </ul>
                </div>
                <div className={toggle === 2 ? "show-content" : "content"} id="exprience">
                    <ul>
                        <li>
                            <span>2022-2023</span> <br />
                            Intern Developer at Web for Solutions Ltd
                        </li>
                        <li>
                            <span>2022-2023</span> <br />
                            Intern Developer at Web for Solutions Ltd
                        </li>
                        <li>
                            <span>2022-2023</span> <br />
                            Intern Developer at Web for Solutions Ltd
                        </li>
                    </ul>
                </div>
                <div className={toggle === 3 ? "show-content" : "content"} id="education">
                    <ul>
                        <li>
                            <span>2022-2023</span> <br />
                            Bsc in Statistics
                        </li>
                        <li>
                            <span>2022-2023</span> <br />
                            Higher Secondary School Certificate
                        </li>
                        <li>
                            <span>2022-2023</span> <br />
                            Secondary School Certificate
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;