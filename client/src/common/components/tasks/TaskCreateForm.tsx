import React, { useState } from 'react';
import styled from 'styled-components';
import { ITaskCard } from '@/common/components/tasks/types';
import { borders, colors, fonts, transitions } from '@/common/styles/styleConstants';

export default function TaskCreateForm() {
    const [task, setTask] = useState<ITaskCard>({
        title: '',
        deadline: '',
        priority: 'low',
        status: 'to-do',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Созданная задача:', task);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormItem>
                <Label htmlFor="title">Название задачи</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    required
                />
            </FormItem>

            <FormItem>
                <Label htmlFor="deadline">Дедлайн</Label>
                <Input
                    type="datetime-local"
                    id="deadline"
                    name="deadline"
                    value={task.deadline}
                    onChange={handleChange}
                    required
                />
            </FormItem>

            <FormItem>
                <Label htmlFor="priority">Приоритет</Label>
                <Select
                    id="priority"
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                >
                    <option value="low">Низкий</option>
                    <option value="medium">Средний</option>
                    <option value="high">Высокий</option>
                </Select>
            </FormItem>

            <FormItem>
                <Label htmlFor="status">Статус</Label>
                <Select
                    id="status"
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                >
                    <option value="todo">Не выполнено</option>
                    <option value="done">Выполнено</option>ы
                </Select>
            </FormItem>

            <Button type="submit">Создать задачу</Button>
        </FormContainer>
    );
};

const FormContainer = styled('form')`
display: flex;
flex-direction: column;
row-gap: 20px;
max-width: 400px;
margin: 0 auto;
padding: 20px;
border-radius: ${borders.radius.medium};
background-color: ${colors.lightGray};
`;

const FormItem = styled('div')``;

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

const Select = styled('select')`
width: 100%;
padding: 5px 10px;
border-radius: ${borders.radius.small};
`;

const Button = styled('button')`
padding: 10px 15px;
border-radius: ${borders.radius.small};
transition: ${transitions.fastTransition};

&:hover {
    color: ${colors.whiteTotal};
    background-color: ${colors.blackTransparent};
}
`;