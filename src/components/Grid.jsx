import React, { useRef, useState } from 'react';
import Cell from './Cell';
import styled from 'styled-components';

/**
*
* @returns The plane drawn with the points where the cells will inhabit
*/


const StyledMain = styled.main`
    display: flex;
    margin: auto;
    text-align: center;
    width: 80vmin;
    flex-direction: column;
`;

const StyledDiv = styled.div`
    display: flex;
`;

const Grid = ({ grid, setGrid, playing }) => {
    const element = useRef(null);
    const [clicking, setClick] = useState(false);


    return (
        <StyledMain ref={element}>
            {/* Iteration of the main grid, each grid returns a row */}
            {
                grid.map((row, rowIndex) =>
                    <StyledDiv key={rowIndex}>
                        {/* Each row will iterate to generate the element and return a column */}
                        {
                            row.map((value, cellIndex) =>
                                <Cell
                                    alive={value}
                                    grid={grid}
                                    playing={playing}
                                    key={`${rowIndex}-${cellIndex}`}
                                    clicking={clicking}
                                    row={rowIndex}
                                    column={cellIndex}
                                    setGrid={setGrid}
                                />
                            )
                        }
                    </StyledDiv>)
            }
        </StyledMain>
    );
};

export default Grid;