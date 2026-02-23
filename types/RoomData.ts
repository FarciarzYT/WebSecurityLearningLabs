export default interface RoomData {
    id: string;
    title: string;
    category: string;
    difficulty: "Easy" | "Medium" | "Hard";
    progress: number;
    startedAt: Date;
    totalTasks: number;
    completedTasks: number;
}