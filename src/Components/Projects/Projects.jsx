import "./Projects.css"
import { FiGithub } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa6";
import shape from "../../../public/Assets/images/shape-3.png"
const Projects = () => {
    return (
        <div>
            <h3 className="text-[#d9dae7] text-[40px] font-semibold mb-[3.5rem] mx-[2rem]">Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center">
                {/* Card 3=1 */}
                <div className="flex items-center justify-center project_items">
                    <div className="bg-indigo-950 p-5 rounded-2xl w-[80%] md:w-[360px]">
                        {/* image */}
                        <div className="w-full h-[230px]">
                            <img src="https://i.ibb.co/rm3J4hg/Screenshot-502.png" alt="projectImg" className="w-full h-full object-cover rounded-2xl projectImg" />
                        </div>
                        {/* title */}
                        <h3 className="font-bold text-2xl mt-4">EasyRecruit</h3>
                        {/* code and live link */}
                        <div className="mt-3 ml-1 flex gap-3">
                            <a href="https://github.com/alpha9011/easyRecruit-client" className="rounded-full flex justify-center items-center gap-1 cursor-pointer hover:text-neutral-300" target="_blank">
                                <FiGithub size={18} />
                                <span className="text-sm">View</span>
                            </a>
                            <a href="https://brilliant-crisp-888e1f.netlify.app" className="rounded-full flex justify-center items-center gap-1 cursor-pointer hover:text-neutral-300" target="_blank">
                                <FaDribbble size={18} />
                                <span className="text-sm">View</span>
                            </a>
                        </div>
                        {/* Desc */}
                        <p className="mt-2 text-neutral-400 text-[14px]">EasyREcruit is an Applicant Tracking System (ATS) website designed to streamline the recruitment process for organizations by automating various tasks associated with hiring and managing candidates.</p>
                        {/* Shape */}
                        <div className="flex justify-end items-end">
                            <img src={shape} alt="" className="w-14" />
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="flex items-center justify-center project_items">
                    <div className="bg-indigo-950 p-5 rounded-2xl w-[80%] md:w-[360px]">
                        {/* image */}
                        <div className="w-full h-[230px]">
                            <img src="https://i.ibb.co/8851DL0/Screenshot-499.png" alt="projectImg" className="w-full h-full object-cover rounded-2xl projectImg" />
                        </div>
                        {/* title */}
                        <h3 className="font-bold text-2xl mt-4">StudySync</h3>
                        {/* code and live link */}
                        <div className="mt-3 ml-1 flex gap-3">
                            <a href="https://github.com/Rahim00001/StudySync" className="rounded-full flex justify-center items-center gap-1 cursor-pointer hover:text-neutral-300" target="_blank">
                                <FiGithub size={18} />
                                <span className="text-sm">View</span>
                            </a>
                            <a href="https://study-sync-a12.web.app/" className="rounded-full flex justify-center items-center gap-1 cursor-pointer hover:text-neutral-300" target="_blank">
                                <FaDribbble size={18} />
                                <span className="text-sm">View</span>
                            </a>
                        </div>
                        {/* Desc */}
                        <p className="mt-2 text-neutral-400 text-[14px]">Study-Sync is an employee management website based on online education platform. The Salary, work hours, contracts, etc. of an employee can be managed using this website.</p>
                        {/* Shape */}
                        <div className="flex justify-end items-end">
                            <img src={shape} alt="" className="w-14" />
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="flex items-center justify-center project_items">
                    <div className="bg-indigo-950 p-5 rounded-2xl w-[80%] md:w-[360px]">
                        {/* image */}
                        <div className="w-full h-[230px]">
                            <img src="https://i.ibb.co/pZ576D0/Screenshot-500.png" alt="projectImg" className="w-full h-full object-cover rounded-2xl projectImg" />
                        </div>
                        {/* title */}
                        <h3 className="font-bold text-2xl mt-4">StayZen</h3>
                        {/* code and live link */}
                        <div className="mt-3 ml-1 flex gap-3">
                            <a href="https://github.com/Rahim00001/StayZen" className="rounded-full flex justify-center items-center gap-1 cursor-pointer hover:text-neutral-300" target="_blank">
                                <FiGithub size={18} />
                                <span className="text-sm">View</span>
                            </a>
                            <a href="https://stayzen-a10.web.app" className="rounded-full flex justify-center items-center gap-1 cursor-pointer hover:text-neutral-300" target="_blank">
                                <FaDribbble size={18} />
                                <span className="text-sm">View</span>
                            </a>
                        </div>
                        {/* Desc */}
                        <p className="mt-2 text-neutral-400 text-[14px]">StayZen Is a Hotel Booking Web Application. Discover and book accommodations effortlessly, with a user-friendly interface and a vast selection of hotel rooms in affordable price.</p>
                        {/* Shape */}
                        <div className="flex justify-end items-end">
                            <img src={shape} alt="" className="w-14" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;