import { useState } from "react";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css"
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";
const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data)
    };

    return (
        <section className="skills-container">
            <h5 className="text-[#d9dae7]" data-aos="fade-up" data-aos-duration="1000">Tecnical Proficiency</h5>
            <div className="skills-content">
                <div className="skills" data-aos="fade-up-right" data-aos-duration="1000">
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconURL={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectSkill(item)
                            }}
                        ></SkillCard>
                    ))}
                </div>
                <div className="skills-info" id="skills" data-aos="fade-up-left" data-aos-duration="1000">
                    <SkillInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    ></SkillInfoCard>
                </div>
            </div>
        </section>
    );
};

export default Skills;