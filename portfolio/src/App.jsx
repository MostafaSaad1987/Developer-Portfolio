import React, { useRef } from "react";
import "./App.css";

import Header from "./components/header";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Nav from "./components/nav";

const App = () => {
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const homeRef = useRef(null);

    return (
        <>
            <Header ref={homeRef} />
            <Skills ref={skillsRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
            <Nav skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} homeRef={homeRef} />
        </>
    );
};

export default App;
