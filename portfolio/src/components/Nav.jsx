/* eslint-disable  */
import React from "react";

const Nav = ({ skillsRef, projectsRef, contactRef, homeRef }) => {
    const handleClick = (section) => {
        if (section === "skills") {
            skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (section === "projects") {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (section === "contact") {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (section === "home") {
            homeRef.current?.scrollIntoView({ behavior: "smooth" });
        }
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
