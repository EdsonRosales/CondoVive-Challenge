/**
 * 
 * @param {number*} size : ;
 * @returns This function helps me to create the grid
 */
export const gridConstructor = (size) => {
    const baseGrid = []
    for (let row = 0; row < size; row += 1) {
        baseGrid[row] = []
        for (let column = 0; column < size; column += 1) {
            baseGrid[row][column] = 0
        }
    }

    return baseGrid
}