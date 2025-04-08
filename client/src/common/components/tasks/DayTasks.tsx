import { fonts } from "@/common/styles/styleConstants";
import styled from "styled-components"
import TaskList from "@/common/components/tasks/TaskList";
import TasksSlider from "@/common/components/tasks/TasksSlider";
import { useEffect, useState } from "react";
import { ITaskCard } from "@/common/components/tasks/types";
import { fetchImportantWeekTasks } from "@/common/api/api";

export default function DayTasks() {
    const [weekTasks, setWeekTasks] = useState<ITaskCard[]>([])

    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await fetchImportantWeekTasks();
                setWeekTasks(response);
            } catch (error) {
                console.log(error)
            }
        }
        getTasks();
    }, []);
    return (
        <Wrapper>
            <TasksSlider title="Топ задач на текущую неделю" list={weekTasks} />
            <Title>Задачи на день</Title>
            <TaskList list={weekTasks} />
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