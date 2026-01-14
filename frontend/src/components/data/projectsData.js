import AgencyDesktopImg from "../../assets/AgencyDesktopImg.png"
import DrumKitImg from "../../assets/DrumKitDesktopImg.png";
import CatchPokemonImg from "../../assets/CatchPokemonImg.png";
import FlaskTodoImg from "../../assets/FlaskTodoImg.png";
import EcommerceImg from "../../assets/EcommerceImg.png";
import GngdDecorImg from "../../assets/GngdDecorImg.png";

export const projects = [
    {
        id: 1,
        title: "Multi-Vendor Ecommerce Platform",
        shortTitle: "Multi-Vendor Ecommerce",
        description:
            "A full-scale multi-vendor ecommerce platform with real-world integrations including Razorpay payments, Shiprocket shipping, authentication, admin & vendor dashboards, and product/order management.",
        tools: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Razorpay",
            "Shiprocket",
            "JWT",
            "Tailwind CSS"
        ],
        image: EcommerceImg,
        liveLink: "https://multi-vendor-ecommerce-project.netlify.app/",
        codeLink: "https://github.com/multi-vendor-ecommerce/ecommerce",
        reverse: false
    },

    {
        id: 2,
        title: "GNG Decor – Interior Design Website",
        shortTitle: "GNG Decor – Interior Design",
        tools: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Tailwind CSS"
        ],
        description:
            "Developed and delivered a production-ready interior design website using React.js and Tailwind CSS. Implemented advanced product filtering, interactive image carousels, and fully responsive layouts optimized for mobile devices. Deployed the live application with analytics integration to track user behavior and customer engagement.",

        image: GngdDecorImg,
        liveLink: "https://gng-decor.netlify.app/",
        codeLink: "https://github.com/Mukesh469/gngdecor-freelance",
        reverse: true
    },

    {
        id: 3,
        title: "Flask Web App",
        shortTitle: "Flask Todos",
        description:
            "Flask-based To-Do application with authentication and CRUD operations.",
        tools: ["Flask", "MySQL", "HTML", "Bootstrap", "JavaScript"],
        image: FlaskTodoImg,
        liveLink: "https://github.com/me50/Mukesh469.git",
        codeLink: "https://github.com/me50/Mukesh469.git",
        reverse: false
    },

    {
        id: 4,
        title: "Drum Kit",
        shortTitle: "Drum Kit Website",
        description:
            "Interactive Drum Kit project for practicing DOM manipulation and keyboard/mouse events.",
        tools: ["HTML", "CSS", "JavaScript"],
        image: DrumKitImg,
        liveLink: "https://mukesh469.github.io/Drum-kit-/",
        codeLink: "https://github.com/Mukesh469/Drum-kit-",
        reverse: true
    },

    {
        id: 5,
        title: "Catch Pokémon",
        shortTitle: "Catch Pokémon",
        description:
            "Fun browser game focusing on DOM manipulation and event handling.",
        tools: ["HTML", "CSS", "JavaScript"],
        image: CatchPokemonImg,
        liveLink: "https://mukesh469.github.io/catchPokemon/",
        codeLink: "https://github.com/Mukesh469/catchPokemon",
        reverse: false
    },


];
