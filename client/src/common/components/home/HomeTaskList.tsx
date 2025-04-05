import styled from "styled-components"
import { TaskCard } from "@/common/components/tasks/TaskCard";
import { tasks } from "@/common/mock/tasks";

export default function HomeTaskList() {
    return (
        <Wrapper>
            <List>
                {tasks.map((task, i) => (
                    <Item key={task.id || i}>
                        <TaskCard task={task} />
                    </Item>
                ))}
            </List>
        </Wrapper>
    )
}

const Wrapper = styled('div')``;

const List = styled('ul')`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
`;

const Item = styled('li')``;
