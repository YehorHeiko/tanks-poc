
const field = document.querySelector('.field')
const cell = document.querySelector('.cell')

filedCell()
createTank(76, 0)


function createTank(x, y) {
    const i = y * 22 + x
    const cell = field.children[i]
    cell.classList.add('tank')
}

function filedCell() {
    for (let i = 0; i < 285; i++) {
        addCell();
        
    }
}


function addCell() {
   
    const addCell = cell.cloneNode()

    field.append(addCell)
}
