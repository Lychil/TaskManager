import { fonts } from "@/common/styles/styleConstants";
import styled from "styled-components"
import TaskList from "@/common/components/tasks/TaskList";
import { tasks } from "@/common/mock/tasks";
import TasksSlider from "@/common/components/tasks/TasksSlider";

export default function DayTasks() {
    return (
        <Wrapper>
            <TasksSlider title="Топ задач на текущую неделю" list={tasks} />
            <Title>Задачи на день</Title>
            <TaskList list={tasks} />
        </Wrapper>
    )
}


const Wrapper = styled('div')``;

const Title = styled('h2')`
text-align: center;
margin-bottom: 10px;
font-size: ${fonts.sizes.subtitle};
font-weight: ${fonts.weights.bold};
`;