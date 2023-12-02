import React, { useState } from "react";

const Projects = ["h"];

const Project = React.forwardRef((props, ref) => {
    const [currentProject, setProjectState] = useState(Projects[0]);
    return (
        <div className="projects" ref={ref}>
            {currentProject}
        </div>
    );
});

export default Project;
