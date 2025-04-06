export function getWeekRangeHelper() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);

    startOfWeek.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    startOfWeek.setHours(0, 0, 0, 0);

    endOfWeek.setDate(today.getDate() + (dayOfWeek === 0 ? 0 : 7 - dayOfWeek));
    endOfWeek.setHours(23, 59, 59, 999);

    return {
        start: startOfWeek.toISOString().split('T')[0],
        end: endOfWeek.toISOString().split('T')[0],
    };
};