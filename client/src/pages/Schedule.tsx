import { useState } from "react";
import styled from 'styled-components';
import { tasks } from "@/common/mock/tasks";
import TaskList from "@/common/components/tasks/TaskList";
import { borders, colors, transitions } from "@/common/styles/styleConstants";
import ScheduleFilters from "@/common/components/shedule/ScheduleFilters";

const currentTasks = tasks;

export default function Schedule() {
    const [period, setPeriod] = useState<'week' | 'month'>('week');

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
                <ScheduleFilters />
            </PeriodSwitcher>

            <TaskList list={currentTasks} />
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