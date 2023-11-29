import React from "react";

const Header = ({ skillsRef }) => {
    const handleClick = () => {
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <header>
            <h1>Hello. I'm Mostafa Hassabelnaby.</h1>
            <h2>*Job Title Here* That *something good here* and *another positive here*</h2>
            <div className="move">
                <a onClick={handleClick}>Skills</a>
            </div>
        </header>
    );
};

export default Header;
