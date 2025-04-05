import styled from 'styled-components';
import { ITaskCard, PriorityTextEnum, StatusTextEnum } from '@/common/components/tasks/types';
import { borders } from '@/common/styles/styleConstants';

interface TaskCardProps {
    task: ITaskCard
}

export function TaskCard({ task }: TaskCardProps) {
    const { title, deadline, priority, status } = task;

    const formatDeadline = (isoString: string) => {
        const date = new Date(isoString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    };

    return (
        <Card>
            <Header>
                <Title>{title}</Title>
                {deadline && <Deadline>{formatDeadline(deadline)}</Deadline>}
            </Header>

            <Inner>
                <PriorityBadge $priority={priority}>
                    {PriorityTextEnum[priority]}
                </PriorityBadge>

                <StatusBadge $status={status}>
                    {StatusTextEnum[status]}
                </StatusBadge>
            </Inner>
        </Card>
    );
}

const Card = styled('div')`
    width: 300px;
    height: 150px;
    border: ${borders.styles.blackSm};
    border-radius: ${borders.radius.small};
    padding: 10px;
`;

const Header = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
`;

const Title = styled('h3')`
    margin: 0;
    font-size: 1.1rem;
    color: #333;
`;

const Deadline = styled('span')`
    white-space: nowrap;
`;

const Inner = styled('div')`
    display: flex;
    gap: 10px;
`;

const PriorityBadge = styled('span') <{ $priority: 'high' | 'medium' | 'low' }>`
    padding: 4px 8px;
    border-radius: 4px;

    background-color: ${({ $priority }) => {
        switch ($priority) {
            case 'high':
                return `#ffebee`;
            case 'medium':
                return `#fff8e1`;
            case 'low':
                return `#e8f5e9`;
        }
    }};
`;

const StatusBadge = styled('span') <{ $status: 'not-started' | 'in-progress' | 'completed' }>`
    padding: 4px 8px;
    border-radius: 4px;

    background-color: ${({ $status }) => {
        switch ($status) {
            case 'not-started':
                return `#f5f5f5`;
            case 'in-progress':
                return `#e3f2fd`;
            case 'completed':
                return `#e8f5e9`;
        }
    }};
`;