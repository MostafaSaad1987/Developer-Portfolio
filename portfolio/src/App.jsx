import React, { useRef } from "react";
import "./App.css";

import Header from "./components/header";
import Skills from "./components/skills";

const App = () => {
    const skillsRef = useRef(null);

    return (
        <div>
            <Header skillsRef={skillsRef} />
            <Skills ref={skillsRef} />
        </div>
    );
};

export default App;
