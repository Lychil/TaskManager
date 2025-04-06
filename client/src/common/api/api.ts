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
        const filteredTasks = tasks.filter((task) => {
            const taskDeadline = new Date(task.deadline);
            return taskDeadline >= new Date(start) && taskDeadline <= new Date(end);
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
        const tasks: ITaskCard[] = await client.get('/tasks?priority=high');
        return tasks;
    } catch (error) {
        throw error;
    }
}

export const fetchImportantWeekTasks = async (): Promise<ITaskCard[]> => {
    const {start, end} = getWeekRangeHelper();
    try {
        const tasks: ITaskCard[] = await client.get('/tasks?priority=high');
        const filteredTasks = tasks.filter((task) => {
            const taskDeadline = new Date(task.deadline);
            return taskDeadline >= new Date(start) && taskDeadline <= new Date(end) && task.priority === "high";
        });
        return filteredTasks;
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

// mockApi не позволяет обновлять и удалять данные, поэтому этому будет имитировано локально
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