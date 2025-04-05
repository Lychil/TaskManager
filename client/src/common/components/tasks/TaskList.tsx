import styled from 'styled-components';
import { ITaskCard } from '@/common/components/tasks/types';
import { TaskCard } from '@/common/components/tasks/TaskCard';

interface TaskListProps {
    list: ITaskCard[]
}

export default function TaskList({ list }: TaskListProps) {
    return (
        <Wrapper>
            <List>
                {list.map((task, i) => (
                    <Item key={task.id || i}>
                        <TaskCard task={task} />
                    </Item>
                ))}
            </List>
        </Wrapper>
    )
}
// ToDo: переделать стили под grid
const Wrapper = styled('div')``;

const List = styled('ul')`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const Item = styled('li')``;
