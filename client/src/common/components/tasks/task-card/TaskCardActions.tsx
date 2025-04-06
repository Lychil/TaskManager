import styled from 'styled-components';
import editImg from "@/common/images/svg/edit.svg";
import binImg from "@/common/images/svg/bin.svg";

interface TaskCardActionsProps {
    openEditModal: () => void
}

export default function TaskCardActions({openEditModal}: TaskCardActionsProps) {
    const handleEdit = () => {
        openEditModal();
    }
    const handleDelete = () => {}

    return (
        <Wrapper>
            <ActionBtn onClick={handleEdit} type='button'>
                <Icon src={editImg} alt='edit' />
            </ActionBtn>
            <ActionBtn onClick={handleDelete} type='button'>
                <Icon src={binImg} alt='bin' />
            </ActionBtn>
        </Wrapper>
    )
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