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
    const [gridGeneration, setGridGeneration] = useState(-2);

    const checkGrid = () => {

    };

    //Build a new grid template
    useEffect(
        () => {
            setGrid(
                (prevGrid) => {
                    const newGrid = [...prevGrid];

                    newGrid[0][1] = 1;
                    newGrid[1][2] = 1;
                    newGrid[2][0] = 1;
                    newGrid[2][1] = 1;
                    newGrid[2][2] = 1;

                    newGrid[gridSize - 1][2] = 1;
                    newGrid[gridSize - 2][1] = 1;
                    newGrid[gridSize - 3][0] = 1;
                    newGrid[gridSize - 3][1] = 1;
                    newGrid[gridSize - 4][2] = 1;

                    newGrid[12][18] = 1;
                    newGrid[12][19] = 1;
                    newGrid[12][13] = 1;
                    newGrid[13][15] = 1;
                    newGrid[12][12] = 1;

                    return newGrid;
                }
            );

            setTimeout(checkGrid, speed);
        },
        []
    );

    useEffect(() => {
        setGridGeneration(n => n + 1);

        const newGrid = deepClone(grid);
        for (let row = 0; row < grid.length; row += 1) {
            for (let column = 0; column < grid.length; column += 1) {
                const current = grid[row][column];
                const many = checkNeighbors({ row, column, grid });
                const isAlive = Number(many === 3 || (many === 2 && current));

                newGrid[row][column] = isAlive;
            }
            
        }
        if (playing) {
            setGridGeneration(n => n + 1);
        }
        const clear = setTimeout(() => {
            setGrid(
                newGrid
            );
        }, speed);

        return () => {
            clearTimeout(clear);
        };
    }, [grid])

    return (
        <>
            <Title>
                Conway's Game of Life (CondoVive Challenge)
            </Title>
            <Grid grid={grid} />
            <StyledButton>Play</StyledButton>
        </>
    )
}

export default MainView