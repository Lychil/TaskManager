import styled from 'styled-components';
import { ITaskCard } from '@/common/components/tasks/types';
import { TaskCard } from '@/common/components/tasks/task-card/TaskCard';

interface TaskListProps {
    list: ITaskCard[]
}

export default function TaskList({ list }: TaskListProps) {
    const notStartedTasks = list.filter(task => task.status === 'not-started');
    const inProgressTasks = list.filter(task => task.status === 'in-progress');
    const completedTasks = list.filter(task => task.status === 'completed');

    return (
        <Wrapper>
            <ColumnsContainer>
                <Column>
                    <ColumnTitle>Не начаты</ColumnTitle>
                    <TasksColumn>
                        {notStartedTasks.map((task, i) => (
                            <TaskCard key={task.id || i} task={task} />
                        ))}
                    </TasksColumn>
                </Column>

                <Column>
                    <ColumnTitle>В процессе</ColumnTitle>
                    <TasksColumn>
                        {inProgressTasks.map((task, i) => (
                            <TaskCard key={task.id || i} task={task} />
                        ))}
                    </TasksColumn>
                </Column>

                <Column>
                    <ColumnTitle>Завершены</ColumnTitle>
                    <TasksColumn>
                        {completedTasks.map((task, i) => (
                            <TaskCard key={task.id || i} task={task} />
                        ))}
                    </TasksColumn>
                </Column>
            </ColumnsContainer>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    padding: 16px;
`;

const ColumnsContainer = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`;

const Column = styled('div')`
background: #f5f5f5;
border-radius: 8px;
padding: 12px;
`;

const ColumnTitle = styled('h3')`
text-align: center;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ddd;
`;

const TasksColumn = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
`;