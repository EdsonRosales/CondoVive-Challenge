import React, { useEffect, useState } from 'react'

import Grid from '../components/Grid'

import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    color: #009DD4;
    margin: 2rem;
`

const gridSize = 50;

const MainView = () => {

    //State to generate a new grid
    const [grid, setGrid] = useState([])

    //This effect helps me to fill the grid when the component is starting
    useEffect(() => {

        const baseGrid = []

        for (let row = 0; row < gridSize; row+=1) {
            for (let column = 0; column < gridSize; column+=1) {

            }
        }
    }, [])
    

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