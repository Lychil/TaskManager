export function getMonthRangeHelper() {
    const today = new Date();
    const startOfMonth = new Date(today);
    const endOfMonth = new Date(today);

    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    endOfMonth.setMonth(today.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);

    return {
        start: startOfMonth.toISOString().split('T')[0],
        end: endOfMonth.toISOString().split('T')[0],
    };
}