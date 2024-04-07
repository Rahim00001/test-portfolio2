import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css"
const Skills = () => {
    return (
        <section className="skills-container">
            <h5>Tecnical Proficiency</h5>
            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconURL={item.icon}
                            title={item.title}
                        ></SkillCard>
                    ))}
                </div>
                <div className="skills-info"></div>
            </div>
        </section>
    );
};

export default Skills;