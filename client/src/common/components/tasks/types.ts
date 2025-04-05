export interface ITaskCard {
    id?: number
    title: string
    deadline: string
    priority: PriorityTaskType
    status: StatusTaskType
}

export type PriorityTaskType = 'high' | 'medium' | 'low';

export enum PriorityTextEnum {
    'high' = 'Высокий',
    'medium' = 'Средний',
    'low' = 'Низкий'
}

export type StatusTaskType = 'not-started' | 'in-progress' | 'completed';

export enum StatusTextEnum {
    'not-started' = 'Не начато',
    'in-progress' = 'В процессе',
    'completed' = 'Завершено'
}