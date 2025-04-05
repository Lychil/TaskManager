import { useState, useRef } from 'react';
import { colors, fonts, transitions } from '@/common/styles/styleConstants';
import styled from 'styled-components';
import { ITaskCard } from '@/common/components/tasks/types';
import { TaskCard } from '@/common/components/tasks/task-card/TaskCard';

interface TasksSliderProps {
    title: string;
    list: ITaskCard[];
}

const scrollValue = 400;

export default function TasksSlider({ title, list }: TasksSliderProps) {
    const [showButtons, setShowButtons] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const listRef = useRef<HTMLUListElement>(null);

    const handleScroll = () => {
        if (listRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: direction === 'left' ? -scrollValue : scrollValue,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Wrapper onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)}>
            <Title>{title}</Title>
            <SliderContainer>
                <ScrollButton
                    $direction="left"
                    $visible={showButtons && canScrollLeft}
                    onClick={() => scroll('left')}
                >
                    {'<'}
                </ScrollButton>
                <List
                    ref={listRef}
                    onScroll={handleScroll}
                >
                    {list.map((task, i) => (
                        <Item key={task.id || i}>
                            <TaskCard task={task} />
                        </Item>
                    ))}
                </List>
                <ScrollButton
                    $direction="right"
                    $visible={showButtons && canScrollRight}
                    onClick={() => scroll('right')}
                >
                    {'>'}
                </ScrollButton>
            </SliderContainer>
        </Wrapper>
    );
}

const Wrapper = styled('div')`
    position: relative;
    padding: 10px 0;
`;

const SliderContainer = styled('div')`
    position: relative;
`;

const Title = styled('h2')`
    margin-bottom: 10px;
    font-size: ${fonts.sizes.subtitle};
    font-weight: ${fonts.weights.bold};
`;

const List = styled('ul')`
    display: flex;
    column-gap: 10px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

const Item = styled('li')`
    flex: 0 0 auto;
`;

const ScrollButton = styled('button') <{$direction: 'left' | 'right', $visible: boolean}>`
    position: absolute;
    top: 0;
    ${({ $direction }) => $direction === 'left' ? 'left: 0px' : 'right: 0px'};
    width: 100px;
    height: 100%;
    color: ${colors.whiteTotal};
    background-color: ${colors.blackTransparent};
    transition: ${transitions.mediumTransition};
    opacity: ${({ $visible }) => $visible ? 1 : 0};
    pointer-events: ${({ $visible }) => $visible ? 'auto' : 'none'};
`;