// TaskCardActions.tsx
import styled from 'styled-components';
import editImg from "@/common/images/svg/edit.svg";
import binImg from "@/common/images/svg/bin.svg";
import { deleteTask, updateTask } from '@/common/api/api';
import { ITaskCard, StatusTaskType } from '@/common/components/tasks/types';

interface TaskCardActionsProps {
    task: ITaskCard;
    openEditModal: () => void;
    onTaskDeleted: (id: number) => void;
    onChange: (task: ITaskCard) => void;
}

export default function TaskCardActions({ task, openEditModal, onTaskDeleted, onChange }: TaskCardActionsProps) {
    const handleEdit = () => {
        openEditModal();
    };

    const handleDelete = async () => {
        try {
            if (task.id) {
                await deleteTask(task.id);
                onTaskDeleted(task.id);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleStatus = async () => {
        try {
            const updatedStatus: StatusTaskType = task.status === 'done' ? 'to-do' : 'done';
            const updatedTask = { ...task, status: updatedStatus };
            await updateTask(updatedTask);
            onChange(updatedTask);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapper>
            <ActionBtn onClick={handleEdit} type='button'>
                <Icon src={editImg} alt='edit' />
            </ActionBtn>
            <ActionBtn onClick={handleDelete} type='button'>
                <Icon src={binImg} alt='delete' />
            </ActionBtn>
            <ActionBtn onClick={handleStatus} type='button'>
                <Icon src={binImg} alt='toggle status' />
            </ActionBtn>
        </Wrapper>
    );
}

const Wrapper = styled('div')`
display: flex;
column-gap: 5px;
`;

const ActionBtn = styled('button')``;

const Icon = styled('img')`
width: 20px;
aspect-ratio: 1;
`;
