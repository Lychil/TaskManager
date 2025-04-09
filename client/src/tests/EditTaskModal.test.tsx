import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EditTaskModal from '@/common/components/tasks/EditTaskModal';
import { updateTask } from '@/common/api/api';
import '@testing-library/jest-dom';
import { ITaskCard } from '@/common/components/tasks/types';

vi.mock('@/common/api/api', () => ({
    updateTask: vi.fn(() => Promise.resolve({ data: {} })),
}));

const mockTask: ITaskCard = {
    id: 1,
    title: 'задача',
    deadline: '2025-04-10T10:00',
    priority: 'medium',
    status: 'to-do',
};

const onClose = vi.fn();
const onChange = vi.fn();

describe('EditTaskModal', () => {
    beforeEach(() => {
        render(<EditTaskModal task={mockTask} onClose={onClose} onChange={onChange} />);
        vi.clearAllMocks();
    });

    it('Отображение начальных значений', () => {
        expect(screen.getByDisplayValue('задача')).toBeInTheDocument();
        expect(screen.getByDisplayValue('2025-04-10T10:00')).toBeInTheDocument();
    });

    it('Обновление поля', () => {
        const input = screen.getByLabelText('Название задачи');
        fireEvent.change(input, { target: { value: 'Новая задача' } });
        expect(input).toHaveValue('Новая задача');
    });

    it('Правильное обновление при сохранении', async () => {
        const titleInput = screen.getByLabelText('Название задачи');
        fireEvent.change(titleInput, { target: { value: 'Обновлённая задача' } });

        const saveButton = screen.getByRole('button', { name: 'Сохранить' });
        fireEvent.click(saveButton);

        await waitFor(() => {
            expect(updateTask).toHaveBeenCalledWith({
                ...mockTask,
                title: 'Обновлённая задача',
            });
            expect(onChange).toHaveBeenCalledWith({
                ...mockTask,
                title: 'Обновлённая задача',
            });
            expect(onClose).toHaveBeenCalled();
        });
    });

    it('Закрытие при клике на "Отмена"', () => {
        const cancelButton = screen.getByRole('button', { name: 'Отмена' });
        fireEvent.click(cancelButton);
        expect(onClose).toHaveBeenCalled();
    });
});
