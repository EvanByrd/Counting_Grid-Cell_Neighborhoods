// matrix : [[int]]
// n : int
function findNeighbors(matrix, n) {
    try {
        // we need to be sure that the inputs will not cause issues down the line
        if (matrix === undefined || n === undefined) {
            throw('Input must contain both a chosen matrix and neighborhood size')
        }
        if (n < 0) {
            throw('Neighborhood size must be a positive integer value')
        }

        const positiveCoordinates = collectPositiveCells(matrix)
        const neighboorhoods = countNeighbors(n, positiveCoordinates, matrix)

        return neighboorhoods
    } catch (error) {
        console.log(error);
    }
}

// matrix : [[int]]
function collectPositiveCells(matrix) {
    const positiveCoordinates = []

    // I'm not a fan of using nested loops, but fortunately this problem treats the two-dimensional array as a matrix and
    // the complexity of this navigation should still be roughly O(n) where n equals the number of cells within the matrix. Hopefully.
    for(let x = 0; x < matrix.length; x++) {
        for(let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] > 0) {
                // I want the coordinates stored as a key value pair within an object so that reading the code later will be more intuitive to the reader.
                positiveCoordinates.push({
                    'y': y,
                    'x': x
                })
            }
        }
    }
    
    return positiveCoordinates
}

// n : int
// positiveCoordinates : [coordinates : {x : int , y : int}]
// matrix : [[int]]
function countNeighbors(n, positiveCoordinates, matrix) {
    // We don't want to check every single cell of every single node for every single positive number,
    // but a two dimensional array isn't necessarily always going to be a matrix either.
    // As such I can't rely on every row being the same length. To cut down on the number of cells being checked
    // I'm opting to find the length of the longest row in the array to find the upper limit to search within.
    const longestRow = matrix.reduce((acc, row) => {
        acc = (row.length > acc) ? row.length : acc
    }, 0)

    // To avoid counting cells twice I'm going to store the coordinates of a cell within the accumulator.
    // Each coordinate will act as a key to the value 'n'. The value being mapped is of no significance, I just
    // want to make sure that repeating cells will simply overwrite each other so that there will only ever be one
    // to be counted when the time comes.
    const neighborhoodCoordinates = positiveCoordinates.reduce((acc, coordinate) => {
        // Here I am setting the upper and lower limits of each cell to be checked for the current positive number.
        const subMatrixDimensions = {
            'lowerX': (coordinate['x'] - n < 0) ? 0 : coordinate['x'] - n,
            'upperX': (coordinate['x'] + n >= matrix.length) ? matrix.length - 1 : coordinate['x'] + n,
            'lowerY': (coordinate['y'] - n < 0) ? 0 : coordinate['y'] - n,
            'upperY': (coordinate['y'] + n >= longestRow) ? longestRow - 1 : coordinate['y'] + n
        }
        
        for (let x = subMatrixDimensions['lowerX']; x <= subMatrixDimensions['upperX']; x++) {
            for (let y = subMatrixDimensions['lowerY']; y <= subMatrixDimensions['upperY']; y++) {
                let distance = Math.abs(coordinate['x'] - x) + Math.abs(coordinate['y'] - y)

                // I'm not so much searching the cells as I am mathematically predicting that they exist.
                // Because any given row can have any length it wants, I need to double check if the cell
                // exists before counting it as a part of the neighborhood.
                if (distance <= n && matrix[x][y] !== undefined) {
                    acc['(' + y + ',' + x + ')'] = 'n'
                }
            }
        }

        return acc
    }, {})

    // Because the cells are all stored as keys in an object they cannot be counted twice.
    return Object.keys(neighborhoodCoordinates).length
}

module.exports = findNeighbors