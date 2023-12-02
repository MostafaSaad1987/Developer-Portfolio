import React from "react";

import Skill from "./skill";

const skills = [
    {
        name: "HTML",
        icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    },
    {
        name: "CSS",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
        name: "JavaScript",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    }, {
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        name: "JSX",
        icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
    },
    {
        name: "AJAX",
        icon: "https://cdn-icons-png.flaticon.com/512/1183/1183639.png",
    },
    {
        name: "Node.js",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    },
    {
        name: "NPM",
        icon: "https://cdn-icons-png.flaticon.com/512/11337/11337395.png",
    },
    {
        name: "Webpack",
        icon: "https://cdn.iconscout.com/icon/free/png-512/free-webpack-3-1174982.png",
    },
    {
        name: "Git",
        icon: "https://cdn-icons-png.flaticon.com/512/11518/11518876.png",
    },
    {
        name: "GitHub",
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
    },
    {
        name: "Express",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-express-8-1175029.png",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-4-1175139.png",
    },
    {
        name: "Mongoose",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-2-1175137.png",
    },
    {
        name: "Axios",
        icon: "https://axios-http.com/assets/logo.svg",
    },
    {
        name: "REST API",
        icon: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png",
    },
    {
        name: "Bootstrap",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    },
    {
        name: "Sass",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png",
    },
    {
        name: "Jest",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-jest-3521517-2945020.png",
    },
    {
        name: "Vite",
        icon: "https://vitejs.dev/logo-with-shadow.png",
    },
    {
        name: "Linux",
        icon: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
    },
];
const Skills = React.forwardRef((props, ref) => {
    return (
        <div className="skills-container" ref={ref}>
            <div className="skills">
                <h2 className="skills-sub">Skills</h2>
                {skills.map((d) => (<Skill key={d.name} name={d.name} icon={d.icon} />))}
            </div>
        </div>
    );
});

export default Skills;
