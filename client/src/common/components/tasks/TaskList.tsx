import styled from 'styled-components';
import { ITaskCard } from '@/common/components/tasks/types';
import { TaskCard } from '@/common/components/tasks/task-card/TaskCard';
import { borders } from '@/common/styles/styleConstants';

interface TaskListProps {
    list: ITaskCard[]
}

export default function TaskList({ list }: TaskListProps) {
    const toDoTasks = list.filter(task => task.status === 'to-do');
    const doneTasks = list.filter(task => task.status === 'done');

    return (
        <Wrapper>
            <ColumnsContainer>
                <Column>
                    <ColumnTitle>Не выполнено</ColumnTitle>
                    <TasksColumn>
                        {toDoTasks.map((task, i) => (
                            <TaskCard key={task.id || i} task={task} />
                        ))}
                    </TasksColumn>
                </Column>

                <Column>
                    <ColumnTitle>Выполнено</ColumnTitle>
                    <TasksColumn>
                        {doneTasks.map((task, i) => (
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