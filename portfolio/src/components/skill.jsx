import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = (props) => {
    useEffect(() => {
        Aos.init({ duration: 750 });
    }, []);

    return (
        <div className="skill" data-aos="fade-left">
            <p className="skill-name">{props.name}</p>
            <img className="skill-image" src={props.icon} alt="Skill Icon" />
        </div>
    );
};

export default Skill;
