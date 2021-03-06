import React from 'react'
import styled, {css} from 'styled-components'
import './../App.css'

/**
 * 
 * @returns The cell in the plane, changing the color through the prop "alive", the cell can have 2 values, Live or Dead (1 or 0)
 */

const StyledSpan = styled.span`
    --size: ${({ gridSize }) => 80 / gridSize}vmin;
    width: var(--size);
    height: var(--size);
    display: block;
    border: 1px solid #FFFFFF44;
    background: transparent;
    transition-duration: 0s;

    ${({ alive }) => alive ? css`
        background: var(--purple);
        border-color: var(--purple);
    ` : ""};
`

const Cell = ({ alive, playing, clicking, setGrid, row, column, grid }) => {
    const updateCell = () => {
        if (clicking && !playing && !grid[row][column]) {
            setGrid(prevGrid => {
                const newGrid = [...prevGrid];
                newGrid[row][column] = 1;
                return newGrid;
            });
        }
    };

    return (<StyledSpan onMouseMove={updateCell} gridSize={grid.length} alive={alive} onClick={updateCell} />);
};

export default Cell