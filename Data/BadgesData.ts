import {BadgesType} from "@/types/BadgesType";

export const BadgesData: BadgesType[] = [
    {
        id:"001",
        name:"Begginer",
        description: "Start of a legacy",
        img:"/images/begginer.png",
        locked:false,
        secret:false,
    },
    {
        id:"002",
        name:"Script Kiddie",
        description: "keep it up!",
        img:"/images/begginer.png",
        locked:true,
        secret:false,
    },
    {
        id:"003",
        name:"Real Hacker",
        description: "You Hacked my website!?",
        img:"/images/begginer.png",
        locked:true,
        secret:true,
    }
]