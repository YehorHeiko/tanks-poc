const field = document.querySelector('.field')
const cell = document.querySelector('.cell')
let tankCell 

buildField()
createTank(5, 5)
assignListener()


function buildField() {
    for (let i = 0; i < 285; i++) {
        addCells();

    }
}


function addCells() {
    const createCell = cell.cloneNode()
    field.append(createCell)
}

function createTank(x, y) {
    const i = y * 22 + x
    tankCell = field.children[i]
    tankCell.classList.add('tank')
}

function assignListener() {
    document.addEventListener('keydown', (e) => {
        const {x, y} = getCoords(tankCell)
        if (e.code == 'ArrowUp' && y > 0) {
            moveTank(x, y - 1)
        }
        if (e.code == 'ArrowLeft' && x > 0) {
            moveTank(x - 1, y)
        }
        if (e.code == 'ArrowRight' && x < 21) {
            moveTank(x + 1, y)
        }
        if (e.code == 'ArrowDown' && y < 12) {
            moveTank(x, y + 1)
        }
    })
}

function getCoords(cell) {
    const cells = [...field.children]
    const i = cells.indexOf(cell)
    const x = i % 22
    const y = Math.trunc(i / 22)
    return { x, y }
}

function moveTank(x, y) {
    tankCell.classList.remove('tank')
    createTank(x, y)
}

