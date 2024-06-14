const field = document.querySelector('.field')
const baseCell = document.querySelector('.cell')
const gameState = {x: 0, y: 0, dir:'S'}
const rowLength = 22
const rowCount = 13
const cellCount = rowLength * rowCount
const {min, max} = Math
const dirs = {
    N: 'up', E: 'right', S: 'down', W: 'left',
    ArrowUp: 'N', ArrowRight: 'E', ArrowDown: 'S', ArrowLeft: 'W',
    n: {x: 0, y: -1}, e: {x: 1, y: 0}, s: {x: 0, y: 1}, w:{x: -1, y: 0},
}

render()
assignKeyHandler()

function render() {
    const index = coordsToIndex(gameState.x, gameState.y)

    field.innerHTML = ''
    
    for (let i = 0; i < cellCount; i++) {
        const cell = baseCell.cloneNode()

        if (i == index) {
            cell.classList.add('tank', dirs[gameState.dir])
        }
        field.append(cell)
    }
}

function coordsToIndex(x, y) {
    return x + y * rowLength
}

function assignKeyHandler() {
    onkeydown = e => {
        const dir = dirs[e.key]

        if (dir) {
            gameState.dir = dir
            moveTank()
            render()
        }
    }
}

function moveTank() {
    const {x, y} = dirs[gameState.dir.toLowerCase()]
    
    gameState.x = min(rowLength - 1, max(0, gameState.x + x))
    gameState.y = min(rowCount - 1, max(0, gameState.y + y))
}

function shootTank(){
    
}