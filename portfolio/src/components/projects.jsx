import React, { useState, useEffect } from "react";

const githubLink = "https://github.com/MostafaSaad1987/";
const liveGithubLink = "https://mostafasaad1987.github.io/";

const Projects = [
    {
        text: "A restaurant page made using HTML, CSS, JavaScript, and Webpack. It is a single page application, where it dynamically rewrites the current web page, instead of loading new ones.",
        skills: "HTML, CSS, JS, Webpack",
        "project-name": "Restaurant Page",
        "project-live": "odin-restaurant-page/",
        "project-preview": "https://raw.githubusercontent.com/MostafaSaad1987/Developer-Portfolio/7944a4075b0a9c8de32368ebe8d90961f9616f0d/Restaurant.png",
        "project-preview-mobile": "https://raw.githubusercontent.com/MostafaSaad1987/Developer-Portfolio/7944a4075b0a9c8de32368ebe8d90961f9616f0d/Restaurant_m.jpg",
    },
    {
        text: "A website to track all the shows that you watch. (Or at least the ones that are available TVMaze.)",
        skills: "HTML, CSS, JS, Axios",
        "project-name": "TV Shows Library/Tracker",
        "project-live": "TV-Show-Library/",
        "project-preview": "https://raw.githubusercontent.com/MostafaSaad1987/Developer-Portfolio/7944a4075b0a9c8de32368ebe8d90961f9616f0d/TVTracker.png",
        "project-preview-mobile": "https://raw.githubusercontent.com/MostafaSaad1987/Developer-Portfolio/7944a4075b0a9c8de32368ebe8d90961f9616f0d/TVTracker_m.jpg",
    },
];

const Project = React.forwardRef((props, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProject = Projects[currentIndex];
    const [projectClass, setProjectClass] = useState("");

    const handleClick = (event) => {
        setProjectClass("hidden");

        setTimeout(() => {
            const newIndex = (currentIndex + 1) % Projects.length;
            setCurrentIndex(newIndex);
            setProjectClass("");
        }, 250);
    };

    const handleBackClick = (event) => {
        setProjectClass("hidden");

        setTimeout(() => {
            const newIndex = (currentIndex - 1 + Projects.length) % Projects.length;
            setCurrentIndex(newIndex);
            setProjectClass("");
        }, 250);
    };

    return (
        <div className="projects" ref={ref}>
            <h1>Projects</h1>
            <div className={`project ${projectClass}`}>
                <div className="project-links">
                    <a href={githubLink + currentProject["project-live"]}>Source Code</a>
                    <h2>{currentProject["project-name"]}</h2>
                    <a href={liveGithubLink + currentProject["project-live"]}>Live Preview</a>
                </div>
                <p className="project-text">{currentProject.text}</p>
                <p className="project-skills">{currentProject.skills}</p>
                <img className="project-image" src={currentProject["project-preview"]} alt="Project Preview" loading="lazy" />
                <img className="project-mobile-image" src={currentProject["project-preview-mobile"]} alt="Project Preview" loading="lazy" />
            </div>
            <div className="projects-buttons">
                <button onClick={handleBackClick}>Previous Project</button>
                <button onClick={handleClick}>Next Project</button>
            </div>
        </div>
    );
});

export default Project;
