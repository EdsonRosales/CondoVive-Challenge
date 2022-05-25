import React, { useEffect, useState } from 'react'
import './../App.css'

import Grid from '../components/Grid'
import { gridConstructor } from '../helpers/utils';

import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    color: var(--purple);
    margin: 2rem;
`

const gridSize = 50;

const MainView = () => {

    //State to generate a new grid
    const [grid, setGrid] = useState(gridConstructor(50))

    return (
        <>
            <Title>
                Conway's Game of Life (CondoVive Challenge)
            </Title>
            <Grid grid={grid} />
        </>
    )
}

export default MainView