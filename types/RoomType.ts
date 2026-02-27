export default interface RoomType {
    id: string;
    title: string;
    category: string;
    description: string;
    estimatedHours: number;
    difficulty: "Easy" | "Medium" | "Hard";
    progress: number;
    startedAt: Date;
    totalTasks: number;
    completedTasks: number;
}