// TaskCard.tsx
import styled from 'styled-components';
import { ITaskCard, PriorityColorEnum, PriorityTaskType } from '@/common/components/tasks/types';
import calendarImg from "@/common/images/svg/calendar.svg";
import { borders, fonts } from '@/common/styles/styleConstants';
import { formatSmartDateHelper } from '@/common/helpers/formatSmartDateHelper';
import TaskCardActions from '@/common/components/tasks/task-card/TaskCardActions';
import { useState } from 'react';
import EditTaskModal from '@/common/components/tasks/EditTaskModal';

interface TaskCardProps {
    task: ITaskCard;
    onTaskDeleted: (id: number) => void;
    onTaskUpdated: (task: ITaskCard) => void;
}

export function TaskCard({ task, onTaskDeleted, onTaskUpdated }: TaskCardProps) {
    const [currentTask, setCurrentTask] = useState(task);
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(prev => !prev);
    };

    const handleTaskChange = (updatedTask: ITaskCard) => {
        setCurrentTask(updatedTask);
        onTaskUpdated(updatedTask);
    };

    return (
        <Card $priority={currentTask.priority}>
            {isEdit && <EditTaskModal task={task} onClose={handleEdit} onChange={handleTaskChange} />}
            <TopRow>
                <LeftSide>
                    <Icon src={calendarImg} alt='calendar' />
                    <Text>{formatSmartDateHelper(currentTask.deadline)}</Text>
                </LeftSide>
                <TaskCardActions
                    task={currentTask}
                    openEditModal={handleEdit}
                    onTaskDeleted={onTaskDeleted}
                    onChange={handleTaskChange}
                />
            </TopRow>

            <Title>{currentTask.title}</Title>
            <Priority $priority={currentTask.priority}>
                {currentTask.priority === 'high' ? 'Высокий' : currentTask.priority === 'medium' ? 'Средний' : "Низкий"} приоритет
            </Priority>
        </Card>
    );
}

const Card = styled('div') <{ $priority: PriorityTaskType }>`
width: 250px;
height: 150px;
padding: 10px;
background-color: ${({ $priority }) => PriorityColorEnum[$priority]};
border-radius: ${borders.radius.medium};
display: flex;
flex-direction: column;
gap: 10px;
`;

const TopRow = styled('div')`
display: flex;
justify-content: space-between;
align-items: center;
`;

const LeftSide = styled('div')`
display: flex;
align-items: center;
gap: 5px;
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.bold};
`;

const Text = styled('span')``;

const Title = styled('h3')`
font-size: ${fonts.sizes.subtitle};
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`;

const Priority = styled('div') <{ $priority: PriorityTaskType }>`
margin-top: auto;
font-size: ${fonts.sizes.small};
border-radius: ${borders.radius.small};
width: fit-content;
`;

const Icon = styled('img')`
width: 20px;
aspect-ratio: 1;
`;
