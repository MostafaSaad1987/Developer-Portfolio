import React, { useState } from "react";

const githubLink = "https://github.com/MostafaSaad1987/";
const liveGithubLink = "https://mostafasaad1987.github.io/";

const Projects = [
    {
        text: "A restaurant page made using HTML, CSS, JavaScript, and Webpack. It is a single page application, where it dynamically rewrites the current web page, instead of loading new ones.",
        skills: "HTML, CSS, JS, Webpack",
        "project-name": "Restaurant Page",
        "project-live": "odin-restaurant-page/",
        "project-preview": "../src/assets/screenshots/Restaurant.png",
        "project-preview-mobile": "",
    },
    {
        text: "Tic Tac Toe made with HTML, CSS, JavaScript.",
        skills: "",
        "project-name": "Tic Tac Toe",
        "project-source": "odin-tic-tac-toe/",
        "project-preview": "../src/assets/screenshots/TikTacToe.png",
        "project-preview-mobile": "",
    },
];

const Project = React.forwardRef((props, ref) => {
    const [currentProject, setProjectState] = useState(Projects[0]);
    return (
        <div className="projects" ref={ref}>
            <h1>Projects</h1>
            <div className="project">
                {currentProject["project-name"]}
                <div className="project-links">
                    <a href={githubLink + currentProject["project-live"]}>Source Code</a>
                    <a href={liveGithubLink + currentProject["project-live"]}>Live Preview</a>
                </div>
                <p className="project-text">{currentProject.text}</p>
                <p className="project-skills">{currentProject.skills}</p>
                <img className="project-image" src={currentProject["project-preview"]} alt="Project Preview" />
                <img className="project-mobile-image" src={currentProject["project-preview-mobile"]} alt="Project Preview" />
            </div>
            <div className="projects-buttons">
                <button>Previous Project</button>
                <button>Next Project</button>
            </div>
        </div>
    );
});

export default Project;
