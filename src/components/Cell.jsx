import React from 'react'
import styled, {css} from 'styled-components'
import './../App.css'

/**
 * 
 * @returns The cell in the plane, changing the color through the prop "alive", the cell can have 2 values, Live or Dead (1 or 0)
 */

const StyledSpan = styled.span`
    width: 1.6vmin;
    height: 1.6vmin;
    display: block;
    border: 1px solid black;
    ${({ alive }) => alive ? css`
        background: var(--purple)
        border-color: var(--purple)
    ` : ""};
`

export default StyledSpan