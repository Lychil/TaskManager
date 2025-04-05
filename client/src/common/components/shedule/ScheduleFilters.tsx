import { useState } from 'react';
import styled from 'styled-components';
import { borders, colors, fonts } from '@/common/styles/styleConstants';

export default function ScheduleFilters() {
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [timeRange, setTimeRange] = useState({ start: '', end: '' });

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'start' | 'end') => {
        const updated = { ...dateRange, [type]: e.target.value };
        setDateRange(updated);
        applyFilters(updated, timeRange);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'start' | 'end') => {
        const updated = { ...timeRange, [type]: e.target.value };
        setTimeRange(updated);
        applyFilters(dateRange, updated);
    };

    const resetFilters = () => {
        const empty = { start: '', end: '' };
        setDateRange(empty);
        setTimeRange(empty);
        applyFilters(empty, empty);
    };

    const applyFilters = (dates: { start: string; end: string }, times: { start: string; end: string }) => {
        console.log('Фильтры применены:', { dateRange: dates, timeRange: times });
    };

    return (
        <Wrapper>
            <FilterBlock>
                <Label>Дата:</Label>
                <SmallInput type="date" value={dateRange.start} onChange={(e) => handleDateChange(e, 'start')} />
                <Separator>–</Separator>
                <SmallInput type="date" value={dateRange.end} onChange={(e) => handleDateChange(e, 'end')} />
            </FilterBlock>

            <FilterBlock>
                <Label>Время:</Label>
                <SmallInput type="time" value={timeRange.start} onChange={(e) => handleTimeChange(e, 'start')} />
                <Separator>–</Separator>
                <SmallInput type="time" value={timeRange.end} onChange={(e) => handleTimeChange(e, 'end')} />
            </FilterBlock>

            <ButtonsBlock>
                <TextButton type='button' onClick={resetFilters}>Сброс</TextButton>
                <ApplyButton type='button' onClick={() => applyFilters(dateRange, timeRange)}>Применить</ApplyButton>
            </ButtonsBlock>
        </Wrapper>
    );
}

const Wrapper = styled('div')`
display: flex;
align-items: center;
gap: 10px;
padding: 10px 5px;
background-color: ${colors.whiteTotal};
border-radius: ${borders.radius.small};
border: ${borders.styles.blackSm};
flex-wrap: wrap;
`;

const FilterBlock = styled('div')`
display: flex;
align-items: center;
gap: 5px;
`;

const Label = styled('label')`
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.medium};
`;

const SmallInput = styled('input')`
padding: 6px 10px;
font-size: ${fonts.sizes.main};
border-radius: ${borders.radius.small};
border: ${borders.styles.blackSm};
background: ${colors.lightGray};
`;

const Separator = styled('span')`
color: ${colors.lightGray};
font-size: ${fonts.sizes.main};
`;

const ButtonsBlock = styled('div')`
display: flex;
gap: 10px;
margin-left: auto;
`;

const TextButton = styled('button')`
font-size: ${fonts.sizes.main};
padding: 4px 8px;
`;

const ApplyButton = styled('button')`
background: ${colors.lightGray};
font-size: ${fonts.sizes.main};
padding: 6px 12px;
border-radius: ${borders.radius.small};

&:hover {
    background: ${colors.lightGray};
}
`;
