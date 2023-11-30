import React from "react";

const Header = ({ skillsRef, projectsRef, contactRef }) => {
    const handleClick = (section) => {
        if (section === "skills") {
            skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (section === "projects") {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        } else if (section === "contact") {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header>
            <h1>Hello. I'm Mostafa Hassabelnaby.</h1>
            <h2>CS Graduate... <i>For Now.</i></h2>
            <div className="move">
                <a onClick={() => handleClick("skills")}>Skills</a>
                <a onClick={() => handleClick("projects")}>Projects</a>
                <a onClick={() => handleClick("contact")}>Contact</a>
            </div>
        </header>
    );
};

export default Header;
