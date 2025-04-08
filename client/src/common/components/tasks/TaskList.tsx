// TaskList.tsx
import styled from 'styled-components';
import { ITaskCard } from '@/common/components/tasks/types';
import { TaskCard } from '@/common/components/tasks/task-card/TaskCard';
import { borders } from '@/common/styles/styleConstants';
import { useEffect, useMemo, useState, useCallback } from 'react';

interface TaskListProps {
    list: ITaskCard[]
}

export default function TaskList({ list }: TaskListProps) {
    const [tasks, setTasks] = useState<ITaskCard[]>(list);

    useEffect(() => {
        setTasks(list);
    }, [list]);

    const toDoTasks = useMemo(() => tasks.filter(task => task.status === 'to-do'), [tasks]);
    const doneTasks = useMemo(() => tasks.filter(task => task.status === 'done'), [tasks]);

    const handleTaskDeleted = useCallback((taskId: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }, []);

    const handleTaskUpdated = useCallback((updatedTask: ITaskCard) => {
        setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    }, []);

    return (
        <Wrapper>
            <ColumnsContainer>
                <Column>
                    <ColumnTitle>Не выполнено</ColumnTitle>
                    <TasksColumn>
                        {toDoTasks.map((task, i) => (
                            <TaskCard key={task.id || i} task={task} onTaskDeleted={handleTaskDeleted} onTaskUpdated={handleTaskUpdated} />
                        ))}
                    </TasksColumn>
                </Column>

                <Column>
                    <ColumnTitle>Выполнено</ColumnTitle>
                    <TasksColumn>
                        {doneTasks.map((task, i) => (
                            <TaskCard key={task.id || i} task={task} onTaskDeleted={handleTaskDeleted} onTaskUpdated={handleTaskUpdated} />
                        ))}
                    </TasksColumn>
                </Column>
            </ColumnsContainer>
        </Wrapper>
    );
}

const Wrapper = styled('div')`
padding: 16px;
`;

const ColumnsContainer = styled('div')`
display: grid;
grid-template-columns: repeat(2, auto);
justify-content: center;
column-gap: 20px;
`;

const Column = styled('div')`
background: #f5f5f5;
border-radius: ${borders.radius.medium};
padding: 10px;
`;

const ColumnTitle = styled('h3')`
text-align: center;
margin-bottom: 15px;
padding-bottom: 8px;
border-bottom: ${borders.styles.lightGraySm};
`;

const TasksColumn = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 5px;
`;
