import React from 'react'
import styled from 'styled-components'

/**
 * 
 * @returns The cell in the plane, changing the color through the prop "alive", the cell can have 2 values, Live or Dead (1 or 0)
 */

const StyledSpan = styled.span`
    width: 1.6vmin;
    height: 1.6vmin;
    display: block;
    border: 1px solid black;
    background: ${({ alive }) => alive ? '#009DD4' : transparent};
`

export default StyledSpan