import { useState } from 'react';
import styled from 'styled-components';
import { ITaskCard } from '@/common/components/tasks/types';
import { borders, colors, fonts } from '@/common/styles/styleConstants';

interface EditTaskModalProps {
    task: ITaskCard;
    onClose: () => void;
}

export default function EditTaskModal({task, onClose}: EditTaskModalProps) {
    const [updatedTask, setUpdatedTask] = useState<ITaskCard>({ ...task });

    const handleChange = () => {
        setUpdatedTask((prevTask) => ({...prevTask}));
    };

    const handleSave = () => {
        onClose();
    };

    return (
        <ModalOverlay>
            <ModalWrapper>
                <Title>Редактирование задачи</Title>

                <ModalItem>
                    <Label htmlFor="title">Название задачи</Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        value={updatedTask.title}
                        onChange={handleChange}
                        required
                    />
                </ModalItem>

                <ModalItem>
                    <Label htmlFor="deadline">Дедлайн</Label>
                    <Input
                        type="datetime-local"
                        id="deadline"
                        name="deadline"
                        value={updatedTask.deadline}
                        onChange={handleChange}
                        required
                    />
                </ModalItem>

                <Actions>
                    <ActionBtn type='button' onClick={onClose}>Отмена</ActionBtn>
                    <ActionBtn type='button' onClick={handleSave}>Сохранить</ActionBtn>
                </Actions>
            </ModalWrapper>
        </ModalOverlay>
    );
};


const ModalOverlay = styled('div')`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: ${colors.blackTransparent};
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`;

const ModalWrapper = styled('div')`
display: flex;
flex-direction: column;
row-gap: 20px;
background-color: ${colors.lightGray};
padding: 20px;
border-radius: ${borders.radius.medium};
width: 400px;
`;

const ModalItem = styled('div')``;

const Title = styled('h2')`
text-align: center;
font-size: ${fonts.sizes.subtitle};
font-weight: ${fonts.weights.semiBold};
`;

const Label = styled('label')`
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.regular};
margin-bottom: 10px;
`;

const Input = styled('input')`
width: 100%;
padding: 5px 10px;
border-radius: ${borders.radius.small};
`;

const Actions = styled('div')`
display: flex;
justify-content: space-between;
`;

const ActionBtn = styled('button')`
padding: 10px 15px;
border-radius: ${borders.radius.small};

&:hover {
    color: ${colors.whiteTotal};
    background-color: ${colors.blackTransparent};
}
`;