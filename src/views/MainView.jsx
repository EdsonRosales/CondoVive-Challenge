import React, { useEffect, useState } from 'react'
import './../App.css'

import Grid from '../components/Grid'
import { gridConstructor, checkNeighbors, deepClone } from '../helpers/utils';

import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    color: var(--purple);
    margin: 1.4rem;
`

const StyledButton = styled.button`
    background: var(--purple);
    padding: .75rem 1.5rem;
    border-radius: 2rem;
    border: 0;
    font-weight: bold;
    margin: auto;
    margin-top: 1rem;
    text-align: center;

    &:hover{
        background: var(--pink);
        cursor: pointer;
    }
`;

const gridSize = 20;
const speed = 1000; //<---Transition speed of life cycle of each cell 

const MainView = () => {

    //State to generate a new grid
    const [grid, setGrid] = useState(gridConstructor(gridSize))
    const [playing, setPlay] = useState(false);

    useEffect(
        () => {
            if (!playing) return;

            const newGrid = deepClone(grid);

            for (let row = 0; row < grid.length; row += 1) {
                for (let column = 0; column < grid.length; column += 1) {
                    const current = grid[row][column];
                    const many = checkNeighbors({ row, column, grid });
                    const isAlive = Number(many === 3 || (many === 2 && current));

                    newGrid[row][column] = isAlive;
                }
            }

            const clear = setTimeout(() => {
                setGrid(newGrid);
            }, speed);

            return () => {
                clearTimeout(clear);
            };
        }
        , [grid, playing]
    );

    return (
        <>
            <Title>
                Conway's Game of Life (CondoVive Challenge)
            </Title>
            <Grid grid={grid} setGrid={setGrid} playing={playing} />
            <StyledButton onClick={() => setPlay(true)}>Play</StyledButton>
        </>
    )
}

export default MainView