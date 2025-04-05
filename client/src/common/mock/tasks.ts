import { ITaskCard } from "@/common/components/tasks/types";

export const tasks: ITaskCard[] = [
    {
        id: 1,
        title: "Завершить проект",
        deadline: "2023-12-31T18:00:00",
        priority: "high",
        status: "in-progress"
    },
    {
        id: 2,
        title: "Подготовить презентацию",
        deadline: "2023-11-15T14:30:00",
        priority: "medium",
        status: "not-started"
    },
    {
        id: 3,
        title: "Проверить почту",
        deadline: "2023-11-10T09:00:00",
        priority: "low",
        status: "completed"
    },
    {
        id: 4,
        title: "Совещание с командой",
        deadline: "2023-11-20T11:00:00",
        priority: "high",
        status: "in-progress"
    },
    {
        id: 5,
        title: "Обновить документацию",
        deadline: "2023-11-16T16:45:00",
        priority: "medium",
        status: "not-started"
    },
    {
        id: 6,
        title: "Отправить отчет",
        deadline: "2023-11-12T17:00:00",
        priority: "low",
        status: "completed"
    },
    {
        id: 7,
        title: "Тестирование фичи",
        deadline: "2023-12-15T13:15:00",
        priority: "high",
        status: "in-progress"
    },
    {
        id: 8,
        title: "Ревью кода",
        deadline: "2023-11-18T10:00:00",
        priority: "medium",
        status: "not-started"
    },
    {
        id: 9,
        title: "Встреча с клиентом",
        deadline: "2023-11-14T15:30:00",
        priority: "low",
        status: "completed"
    },
    {
        id: 10,
        title: "Рефакторинг модуля",
        deadline: "2023-12-05T09:30:00",
        priority: "low",
        status: "in-progress"
    },
    {
        id: 11,
        title: "Деплой на прод",
        deadline: "2023-12-20T20:00:00",
        priority: "medium",
        status: "in-progress"
    }
];