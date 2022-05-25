import React, { useEffect, useState } from 'react'
import './../App.css'

import Grid from '../components/Grid'
import { gridConstructor } from '../helpers/utils';

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

const MainView = () => {

    //State to generate a new grid
    const [grid, setGrid] = useState(gridConstructor(gridSize))

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