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

export enum PriorityColorEnum {
    'high' = '#b2ebf2',
    'medium' = '#ecc36a',
    'low' = '#bddd7a'
}

export type StatusTaskType = 'to-do' | 'done';

export enum StatusTextEnum {
    'to-do' = 'Не выполнено',
    'done' = 'Выполнено'
}