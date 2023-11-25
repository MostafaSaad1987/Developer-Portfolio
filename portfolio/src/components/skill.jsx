import React from "react";

const Skill = (props) => {
    return (
        <div className="skill">
            <p className="skill-name">{props.name}</p>
            <img className="skill-image" src={props.icon} alt="Skill Icon" />
        </div>
    );
};

export default Skill;
