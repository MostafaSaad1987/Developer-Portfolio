/* eslint-disable  */
import React from "react";

const Nav = ({ skillsRef, projectsRef, contactRef, homeRef }) => {
    const handleClick = (section) => {
        const refs = { skills: skillsRef, projects: projectsRef, contact: contactRef, home: homeRef };
        refs[section].current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <nav className="move">
            <a onClick={() => handleClick("home")}>Home</a>
            <a onClick={() => handleClick("skills")}>Skills</a>
            <a onClick={() => handleClick("projects")}>Projects</a>
            <a onClick={() => handleClick("contact")}>Contact</a>
        </nav>
    );
};

export default Nav;
