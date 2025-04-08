import axios, { AxiosResponse } from "axios";
import { ITaskCard } from "@/common/components/tasks/types";
import { getWeekRangeHelper } from "@/common/helpers/getWeekRangeHelper";
import { getMonthRangeHelper } from "@/common/helpers/getMonthRangeHelper";

const BASE_URL = "http://localhost:3000/api"

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': "application/json"
    }
})

export const fetchDayTasks = async (): Promise<ITaskCard> => {
    const date = new Date().toISOString().split('T')[0];
    try {
        const tasks: AxiosResponse<ITaskCard> = await client.get(`tasks?deadline=${date}`);
        return tasks.data;
    } catch (error) {
        throw error;
    }
}


export const fetchRangeTasks = async (start: string, end: string): Promise<ITaskCard[]> => {
    try {
        const response: AxiosResponse<ITaskCard[]> = await client.get('/tasks');
        const tasks: ITaskCard[] = response.data;
        const startDate = new Date(start);
        const endDate = new Date(end);
        const filteredTasks = tasks.filter((task) => {
            if (!task.deadline) return false;
            const taskDate = new Date(task.deadline);
            endDate.setHours(23, 59, 59, 999);
            return taskDate >= startDate && taskDate <= endDate;
        });
        return filteredTasks;
    } catch (error) {
        throw error;
    }
};

export const fetchWeekTasks = async (): Promise<ITaskCard[]> => {
    const { start, end } = getWeekRangeHelper();
    try {
        const tasks: ITaskCard[] = await fetchRangeTasks(start, end);
        return tasks;
    } catch (error) {
        throw error;
    }
}

export const fetchMonthTasks = async (): Promise<ITaskCard[]> => {
    const { start, end } = getMonthRangeHelper();
    try {
        const tasks: ITaskCard[] = await fetchRangeTasks(start, end);
        return tasks;
    } catch (error) {
        throw error;
    }
}

export const fetchImportantTasks = async (): Promise<ITaskCard[]> => {
    try {
        const tasks: AxiosResponse<ITaskCard[]> = await client.get('/tasks?priority=high&&status=to-do');
        return tasks.data;
    } catch (error) {
        throw error;
    }
}

export const fetchImportantWeekTasks = async (): Promise<ITaskCard[]> => {
    const { start, end } = getWeekRangeHelper();
    try {
        const response: AxiosResponse<ITaskCard[]> = await client.get('/tasks?priority=high');
        const tasks = response.data;

        const startDate = new Date(start);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(end);
        endDate.setHours(23, 59, 59, 999);

        const weekTasks = tasks.filter(task => {
            if (!task.deadline) return false;

            const taskDate = new Date(task.deadline);
            taskDate.setHours(0, 0, 0, 0);
            return taskDate >= startDate && taskDate <= endDate;
        });
        return weekTasks;
    } catch (error) {
        throw error;
    }
}

export const createTask = async (taskData: ITaskCard): Promise<ITaskCard> => {
    try {
        const response: AxiosResponse<ITaskCard> = await client.post('/tasks', taskData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteTask = async (taskId: number): Promise<void> => {
    try {
        await client.delete(`/tasks/${taskId}`);
    } catch (error) {
        throw error;
    }
};

export const updateTask = async (updatedTask: ITaskCard): Promise<ITaskCard> => {
    try {
        const response: AxiosResponse<ITaskCard> = await client.put(`/tasks/${updatedTask.id}`, updatedTask);
        return response.data;
    } catch (error) {
        throw error;
    }
};