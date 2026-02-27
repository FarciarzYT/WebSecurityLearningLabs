import RoomType from "@/types/RoomType";

export type ModuleType =  Omit<RoomType, "category" | "progress" | "startedAt" | "totalTasks" | "completedTasks">

