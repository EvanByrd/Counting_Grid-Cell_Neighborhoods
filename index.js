const matrices = require('./matrices.js')
const findNeighbors = require('./neighborFinder.js')

const args = process.argv.slice(2)

function main(input) {
    try {
        // we need to be sure that the inputs will not cause issues down the line
        if (input === undefined || input.length < 2) {
            throw('Input must contain both a chosen matrix and neighborhood size')
        }
        if (input[1] < 0) {
            throw('Neighborhood size must be a positive integer value')
        }

        const matrix = matrices[input[0]]
        const n = Number(input[1])

        const numNeighbors = findNeighbors(matrix, n)

        console.log(numNeighbors)
    } catch (error) {
        console.log(error);
    }
}

main(args)
