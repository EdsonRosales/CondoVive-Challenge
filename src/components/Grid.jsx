import React from 'react'
import Cell from './Cell'
import styled from 'styled-components'
import './../App.css'

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
`

const StyledDiv = styled.div`
    display: flex;
`

const Grid = ({ grid }) => {
  return (
    <StyledMain>
        {/* Iteration of the main grid, each grid returns a row */}
        {
            grid.map(row => <StyledDiv>
                {/* Each row will iterate to generate the element and return a column */}
                {
                    row.map(value => 
                        <Cell alive={value} />
                    )
                }
            </StyledDiv>)
        }
    </StyledMain>
  )
}

export default Grid