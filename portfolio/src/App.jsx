import React, { useRef } from "react";
import "./App.css";

import Header from "./components/header";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

const App = () => {
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div>
            <Header skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
            <Skills ref={skillsRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
        </div>
    );
};

export default App;
