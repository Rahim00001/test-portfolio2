import { IoLogoGithub } from "react-icons/io";
const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center">
            {/* Card 1 */}
            <div className="flex items-center justify-center">
                <div className="bg-indigo-950 p-5 rounded-2xl w-[360px]">
                    {/* image and icon */}
                    <div className="relative w-full h-[230px]">
                        <img src="https://i.ibb.co/8851DL0/Screenshot-499.png" alt="projectImg" className="w-full h-full object-cover rounded-2xl" />
                        <div className="absolute inset-0 flex justify-end m-3">
                            <a href="https://github.com/Rahim00001" className="bg-[#6751b9] h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
                                <IoLogoGithub size={20} />
                            </a>
                        </div>
                    </div>
                    {/* title and desc */}
                    <div className="mt-5">
                        <h3 className="font-bold text-2xl">StudySync</h3>
                        <p className="mt-2 text-neutral-400 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sed. Veniam exercitationem dolorem accusantium quaerat!</p>
                    </div>
                </div>
            </div>
            {/* Card 1 */}
            <div className="flex items-center justify-center">
                <div className="bg-indigo-950 p-5 rounded-2xl w-[360px]">
                    {/* image and icon */}
                    <div className="relative w-full h-[230px]">
                        <img src="https://i.ibb.co/8851DL0/Screenshot-499.png" alt="projectImg" className="w-full h-full object-cover rounded-2xl" />
                        <div className="absolute inset-0 flex justify-end m-3">
                            <a href="https://github.com/Rahim00001" className="bg-[#6751b9] h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
                                <IoLogoGithub size={20} />
                            </a>
                        </div>
                    </div>
                    {/* title and desc */}
                    <div className="mt-5">
                        <h3 className="font-bold text-2xl">StudySync</h3>
                        <p className="mt-2 text-neutral-400 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sed. Veniam exercitationem dolorem accusantium quaerat!</p>
                    </div>
                </div>
            </div>
            {/* Card 1 */}
            <div className="flex items-center justify-center">
                <div className="bg-indigo-950 p-5 rounded-2xl w-[360px]">
                    {/* image and icon */}
                    <div className="relative w-full h-[230px]">
                        <img src="https://i.ibb.co/8851DL0/Screenshot-499.png" alt="projectImg" className="w-full h-full object-cover rounded-2xl" />
                        <div className="absolute inset-0 flex justify-end m-3">
                            <a href="https://github.com/Rahim00001" className="bg-[#6751b9] h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
                                <IoLogoGithub size={20} />
                            </a>
                        </div>
                    </div>
                    {/* title and desc */}
                    <div className="mt-5">
                        <h3 className="font-bold text-2xl">StudySync</h3>
                        <p className="mt-2 text-neutral-400 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sed. Veniam exercitationem dolorem accusantium quaerat!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;