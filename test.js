
const matrices = require('./matrices.js')
const findNeighbors = require('./neighborFinder.js')

// m1 n=3
test('Testing standard 11x11 matrix with 1 positive number', () => {
    expect(findNeighbors(matrices.m1, 3)).toBe(25)
})

// m1 n=100
test('Testing standard 11x11 matrix with 1 positive number with a massive neighborhood larger than the matrix', () => {
    expect(findNeighbors(matrices.m1, 100)).toBe(121)
})

// m2 n=3
test('Testing standard 11x11 matrix with 1 positive number at the edge of the matrix', () => {
    expect(findNeighbors(matrices.m2, 3)).toBe(21)
})

// m3 n=2
test('Testing standard 11x11 matrix with 2 positive numbers', () => {
    expect(findNeighbors(matrices.m3, 2)).toBe(26)
})

// m3 n=3
test('Testing standard 11x11 matrix with 2 positive numbers with large neighborhoods extending out of bounds', () => {
    expect(findNeighbors(matrices.m3, 3)).toBe(49)
})

// m4 n=2
test('Testing standard 11x11 matrix with 2 positive numbers near one another', () => {
    expect(findNeighbors(matrices.m4, 2)).toBe(22)
})

// m5 n=3
test('Testing standard 11x11 matrix with 4 positive numbers', () => {
    expect(findNeighbors(matrices.m5, 3)).toBe(57)
})

// m6 n=3
test('Testing standard 11x5 matrix with 4 positive numbers', () => {
    expect(findNeighbors(matrices.m6, 3)).toBe(45)
})

// m7 n=3
test('Testing standard 1x11 matrix with 2 positive numbers', () => {
    expect(findNeighbors(matrices.m7, 3)).toBe(8)
})

// m7 n=7
test('Testing standard 1x11 matrix with 2 positive numbers and overlapping neighborhoods', () => {
    expect(findNeighbors(matrices.m7, 7)).toBe(11)
})

// m8 n=3
test('Testing standard 11x1 matrix with 2 positive numbers', () => {
    expect(findNeighbors(matrices.m8, 3)).toBe(9)
})

// m9 n=3
test('Testing a two dimensional array with inequal row lengths and 2 positive numbers', () => {
    expect(findNeighbors(matrices.m9, 2)).toBe(21)
})