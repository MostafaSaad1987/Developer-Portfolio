import React, { useState } from "react";

const Projects = [
    {
        text: "A restaurant page made using HTML, CSS, JavaScript, and Webpack. It is a single page application, where it dynamically rewrites a current web page, instead of loading new ones.",
        skills: "",
        "project-name": "Restaurant Page",
        "project-live": "https://mostafasaad1987.github.io/odin-restaurant-page/",
        "project-source": "https://github.com/MostafaSaad1987/odin-restaurant-page",
        "project-preview": "../assets/screenshots/Restaurant.png",
        "project-preview-mobile": "",
    },
    {
        text: "Tic Tac Toe made with HTML, CSS, JavaScript.",
        skills: "",
        "project-name": "Tic Tac Toe",
        "project-live": "https://mostafasaad1987.github.io/odin-tic-tac-toe/",
        "project-source": "https://github.com/MostafaSaad1987/odin-tic-tac-toe",
        "project-preview": "../assets/screenshots/Restaurant.png",
        "project-preview-mobile": "",
    },
];

const Project = React.forwardRef((props, ref) => {
    const [currentProject, setProjectState] = useState(Projects[0]);
    return (
        <div className="projects" ref={ref}>
            {currentProject}
        </div>
    );
});

export default Project;
