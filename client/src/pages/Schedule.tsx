import { useEffect, useState } from "react";
import styled from 'styled-components';
import TaskList from "@/common/components/tasks/TaskList";
import { borders, colors, transitions } from "@/common/styles/styleConstants";
import ScheduleFilters from "@/common/components/shedule/ScheduleFilters";
import { ITaskCard } from "@/common/components/tasks/types";
import { fetchMonthTasks, fetchRangeTasks, fetchWeekTasks } from "@/common/api/api";

export default function Schedule() {
    const [period, setPeriod] = useState<'week' | 'month'>('week');
    const [filters, setFilters] = useState<{start: string, end: string}>({start: '', end: ''})
    const [tasks, setTasks] = useState<ITaskCard[]>([])

    useEffect(() => {
        const getTasks = async () => {
            let response: ITaskCard[];
            try {
                if (filters.start) {
                    response = await fetchRangeTasks(filters.start, filters.end);
                }
                else if (period === 'week') {
                    response = await fetchWeekTasks();
                } else {
                    response = await fetchMonthTasks();
                }
                setTasks(response);
            } catch (error) {
                console.log(error)
            }
        }
        getTasks();
    }, [period, filters])

    return (
        <Wrapper>
            <PeriodSwitcher>
                <PeriodButton
                    $active={period === 'week'}
                    onClick={() => setPeriod('week')}
                >
                    Неделя
                </PeriodButton>
                <PeriodButton
                    $active={period === 'month'}
                    onClick={() => setPeriod('month')}
                >
                    Месяц
                </PeriodButton>
                <ScheduleFilters setFilters={setFilters} />
            </PeriodSwitcher>

            <TaskList list={tasks} />
        </Wrapper>
    );
};

const Wrapper = styled('div')``;

const PeriodSwitcher = styled('div')`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
`;

const PeriodButton = styled('button') <{ $active: boolean }>`
    padding: 8px 16px;
    border-radius: ${borders.radius.small};
    border: ${borders.styles.blackSm};
    background-color: ${({ $active }) => $active ? colors.lightGray : 'transparent'};
    transition: ${transitions.mediumTransition};

    &:hover {
        background-color: ${colors.lightGray};
    }
`;