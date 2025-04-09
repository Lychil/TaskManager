import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TaskCreateForm from '@/common/components/tasks/TaskCreateForm';
import { createTask } from '@/common/api/api';
import '@testing-library/jest-dom';

vi.mock('@/common/api/api', () => ({
    createTask: vi.fn(() => Promise.resolve({ data: {} }))
}));

describe('TaskCreateForm', () => {
    beforeEach(() => {
        render(<TaskCreateForm />);
        vi.clearAllMocks();
    });

    it('отображение всех элементов формы', () => {
        expect(screen.getByLabelText('Название задачи')).toBeInTheDocument();
        expect(screen.getByLabelText('Дедлайн')).toBeInTheDocument();
        expect(screen.getByLabelText('Приоритет')).toBeInTheDocument();
        expect(screen.getByLabelText('Статус')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Создать задачу' })).toBeInTheDocument();
    });

    it('обновление значения поля названия при вводе', () => {
        const input = screen.getByLabelText('Название задачи');
        fireEvent.change(input, { target: { value: 'Новая задача' } });
        expect(input).toHaveValue('Новая задача');
    });

    it('блокировка кнопки при отправке формы', async () => {
        const button = screen.getByRole('button', { name: 'Создать задачу' });
        const titleInput = screen.getByLabelText('Название задачи');
        const deadlineInput = screen.getByLabelText('Дедлайн');

        fireEvent.change(titleInput, { target: { value: 'Задача' } });
        fireEvent.change(deadlineInput, { target: { value: '2025-04-10T12:00' } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByRole('button')).toBeDisabled();
            expect(screen.getByRole('button')).toHaveTextContent('Отправка...');
        });
    });

    it('сброс формы после отправки', async () => {
        const titleInput = screen.getByLabelText('Название задачи');
        const deadlineInput = screen.getByLabelText('Дедлайн');
        const button = screen.getByRole('button', { name: 'Создать задачу' });

        fireEvent.change(titleInput, { target: { value: 'Тестовая задача' } });
        fireEvent.change(deadlineInput, { target: { value: '2025-04-09T12:00' } });

        fireEvent.click(button);

        await waitFor(() => {
            expect(titleInput).toHaveValue('');
            expect(deadlineInput).toHaveValue('');
        });
    });

    it('вызов createTask', async () => {
        fireEvent.change(screen.getByLabelText('Название задачи'), {
            target: { value: 'Важная задача' }
        });
        fireEvent.change(screen.getByLabelText('Дедлайн'), {
            target: { value: '2023-12-31T23:59' }
        });
        fireEvent.click(screen.getByRole('button', { name: 'Создать задачу' }));

        await waitFor(() => {
            expect(createTask).toHaveBeenCalledWith({
                title: 'Важная задача',
                deadline: '2023-12-31T23:59',
                priority: 'low',
                status: 'to-do'
            });
        });
    });
});