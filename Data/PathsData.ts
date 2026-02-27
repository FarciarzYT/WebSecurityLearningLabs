import {LearningPathType} from "@/types/PathsType"
import {ModulesData} from "@/Data/ModulesData";

const pickModules = (...ids: string[]) => ModulesData.filter(m => ids.includes(m.id))

export const PathsData: LearningPathType[] = [
    {
        id: "0001",
        title: "Intro to Operating Systems",
        description: "Learn about Windows, Unix systems and MacOS",
        difficulty: "Easy",
        estimatedHours: 30,
        bgImg: "/img/fox-celebrating-success.svg",
        modules: pickModules("001","002","003","004","005","006","007","008"),
        modulesCount: pickModules("001","002","003","004","005","006","007","008").length,
    },
    {
        id: "0002",
        title: "Web Security Basics",
        description: "Learn about XSS, SQLi, CSRF and basic web vulnerabilities",
        difficulty: "Medium",
        estimatedHours: 40,
        bgImg: "/img/hacker-laptop.svg",
        modules: pickModules("009","010","011","012","013","014","015"),
        modulesCount: pickModules("009","010","011","012","013","014","015").length,
    },
    {
        id: "0003",
        title: "Linux Advanced",
        description: "Deep dive into Linux commands, Bash scripting, and system management",
        difficulty: "Hard",
        estimatedHours: 50,
        bgImg: "/img/linux-terminal.svg",
        modules: pickModules("016","017","018","019","020","021","022","023","024"),
        modulesCount: pickModules("016","017","018","019","020","021","022","023","024").length,
    },
    {
        id: "0004",
        title: "Cloud & DevOps",
        description: "Introduction to cloud services, Docker, Kubernetes and CI/CD pipelines",
        difficulty: "Medium",
        estimatedHours: 45,
        bgImg: "/img/cloud-servers.svg",
        modules: pickModules("025","026","027","028","029","030"),
        modulesCount: pickModules("025","026","027","028","029","030").length,
    },
    {
        id: "0005",
        title: "Web Development Full Stack",
        description: "Learn HTML, CSS, JS, React, Node.js and database integration",
        difficulty: "Easy",
        estimatedHours: 60,
        bgImg: "/img/code-laptop.svg",
        modules: pickModules("031","032","033","034","035","036","037","038"),
        modulesCount: pickModules("031","032","033","034","035","036","037","038").length,
    }
]