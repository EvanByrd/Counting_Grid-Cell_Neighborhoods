const matrices = {
    'm1': [
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, 10, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
    ],
    'm2': [
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
    ],
    'm3': [
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, 10, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, 10, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
    ],
    'm4': [
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, 10, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, 10, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
    ],
    'm5': [
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, 10, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, 10, 10, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, 10, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
    ],
    'm6': [
        [ -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1 ],
        [ -1, 10, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, 10, 10 ],
        [ -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, 10 ],
        [ -1, -1, -1, -1, -1 ]
    ],
    'm7': [
        [ 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10 ]
    ],
    'm8': [
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ 10 ],
        [ -1 ],
        [ -1 ],
        [ -1 ],
        [ 10 ],
        [ -1 ]
    ],
    'm9': [
        [ -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, 10, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, ],
        [ -1, -1, -1, -1, 10, -1, -1, -1, -1, -1, -1 ],
        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
    ]
}

module.exports = matrices