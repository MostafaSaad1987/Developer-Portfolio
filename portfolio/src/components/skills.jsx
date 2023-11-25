import React from "react";
import Skill from "./skill";

const skills = [
    {
        name: "HTML",
        icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    },
    {
        name: "CSS",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
        name: "JavaScript",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    }, {
        name: "React",
        icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
    },
];

const Skills = () => {
    return (
        <div className="skills">
            {skills.map((d) => (<Skill key={d.name} name={d.name} icon={d.icon} />))}
        </div>
    );
};

export default Skills;
