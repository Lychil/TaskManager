import styled from 'styled-components';
import { ITaskCard, PriorityTaskType } from '@/common/components/tasks/types';
import arrowImg from "@/common/images/svg/arrow-right.svg";
import calendarImg from "@/common/images/svg/calendar.svg";
import { borders, fonts } from '@/common/styles/styleConstants';

interface TaskCardProps {
    task: ITaskCard;
}

export function TaskCard({ task }: TaskCardProps) {
    const { title, deadline, priority } = task;

    const formatDeadline = (value: string) => {
        const date = new Date(value);
        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();
        return isToday ? 'Today' : date.toLocaleDateString();
    };

    return (
        <Card>
            <TopRow>
                <LeftSide>
                    <Icon src={calendarImg} alt='calendar' />
                    <Text>{formatDeadline(deadline)}</Text>
                </LeftSide>
                <Icon src={arrowImg} alt='arrow right' />
            </TopRow>

            <Title>{title}</Title>
            <Priority $priority={priority}>
                {priority === 'high' ? 'Высокий' : priority === 'medium' ? 'Средний' : "Низкий"} приоритет
            </Priority>
        </Card>
    );
}


const Card = styled('div')`
width: 250px;
height: 150px;
padding: 10px;
background-color: #b2ebf2;
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

const Priority = styled('div') <{ $priority: PriorityTaskType}>`
margin-top: auto;
font-size: ${fonts.sizes.small};
padding: 4px 8px;
border-radius: ${borders.radius.small};
width: fit-content;

background-color: ${({ $priority }) => {
    switch ($priority) {
        case 'high':
            return '#ffcdd2';
        case 'medium':
            return '#fff9c4';
        case 'low':
        default:
            return '#b2e8b4';
    }
}};
`;

const Icon = styled('img')`
width: 20px;
aspect-ratio: 1;
`;
