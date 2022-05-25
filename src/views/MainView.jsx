import React, { useEffect, useState } from 'react'

import Grid from '../components/Grid'
import { gridConstructor } from '../helpers/utils';

import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    color: #009DD4;
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
            <Grid grid={[[1, 0, 1, 0], [1, 1, 1, 1]]} />
        </>
    )
}

export default MainView