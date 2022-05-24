import React from 'react'
import Cell from './Cell'

/**
 * 
 * @returns The plane drawn with the points where the cells will inhabit
 */
const Grid = ({ grid }) => {
  return (
    <main>
        {/* Iteration of the main grid, each grid returns a row */}
        {
            grid.map(row => <div>
                {/* Each row will iterate to generate the element and return a column */}
                {
                    row.map(value => 
                        <Cell alive={value} />
                    )
                }
            </div>)
        }
    </main>
  )
}

export default Grid