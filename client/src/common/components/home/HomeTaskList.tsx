import styled from "styled-components";
import { TaskCard } from "@/common/components/tasks/task-card/TaskCard";
import { useEffect, useState } from "react";
import { ITaskCard } from "@/common/components/tasks/types";
import { fetchImportantTasks } from "@/common/api/api";

export default function HomeTaskList() {
    const [tasks, setTasks] = useState<ITaskCard[]>([]);

    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await fetchImportantTasks();
                setTasks(response);
            } catch (error) {
                console.log(error);
            }
        };
        getTasks();
    }, []);

    const handleTaskDeleted = (taskId: number) => {
        setTasks(prev => prev.filter(task => task.id !== taskId));
    };

    const handleTaskUpdated = (updatedTask: ITaskCard) => {
        if (updatedTask.status === 'done') {
            setTasks(prev => prev.filter(task => task.id !== updatedTask.id));
        } else {
            setTasks(prev =>
                prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
            );
        }
    };


    return (
        <Wrapper>
            <List>
                {tasks.map((task, i) => (
                    <Item key={task.id || i}>
                        <TaskCard
                            task={task}
                            onTaskDeleted={handleTaskDeleted}
                            onTaskUpdated={handleTaskUpdated}
                        />
                    </Item>
                ))}
            </List>
        </Wrapper>
    );
}

const Wrapper = styled('div')``;

const List = styled('ul')`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const Item = styled('li')``;
