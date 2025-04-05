export function formatSmartDateHelper(isoString: string): string {
    const date = new Date(isoString);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();

    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    const isTomorrow = date.toDateString() === tomorrow.toDateString();

    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (isToday) {
        return `Сегодня в ${time}`;
    }

    if (isTomorrow) {
        return `Завтра в ${time}`;
    }

    const monthShort = date.toLocaleString('ru-RU', { month: 'short' });
    const day = date.getDate();

    return `${capitalizeFirst(monthShort)} ${day} в ${time}`;
}

function capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
