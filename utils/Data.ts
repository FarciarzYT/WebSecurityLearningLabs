function getDaysAgo(date: Date): number {
    const now = new Date();
    return Math.floor(
        (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
}

export default function formatDaysAgo(date: Date): string {
    const days = getDaysAgo(date);
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
}