import {ModuleType} from "@/types/ModuleType";


export interface LearningPathType {
    id: string;
    title: string;
    description: string;
    estimatedHours: number;
    difficulty: "Easy" | "Medium" | "Hard";
    bgImg: string;
    modules: ModuleType[];
    modulesCount: number;
}