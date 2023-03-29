const gameBoard = (() => {
    const rows = [
        ['x', 'x', 'o'], ['x', 'o', 'o'], ['o', 'x', 'x']
    ];
    const getRows = () => {
        return rows;
    }
    const populateCells = (row, index, mark) => {
        rows[row][index] = mark;
        return rows[row][index];
    }
    return {
        getRows,
        populateCells
    }
})();

const createGameBoard = (() => {
    const gameBoardRows = gameBoard.getRows();
    gameBoardRows.forEach((row, index1) => {
        row.forEach((cell, index2) => {
            const gameBoardArea = document.querySelector(".gameboard");
            const newDiv = document.createElement('div');
            newDiv.dataset.rowIndex = index1;
            newDiv.dataset.cellIndex = index2;
            newDiv.textContent = cell;
            newDiv.classList.add('cell');
            gameBoardArea.append(newDiv);
        })
    })
})();

const player = ((name, mark) => {
    const getName = () => name;
    const getMark = () => mark;
    return {
        getName,
        getMark,
    }
});

const player1 = player('Mitko', 'x');
const player2 = player('Ida', 'o');

const playGame = (() => {



    const board = document.querySelector('.gameboard');
    board.addEventListener('click', (e) => {
        e.preventDefault();
        const row = e.target.dataset.rowIndex;
        const index = e.target.dataset.cellIndex;
        const newMark = gameBoard.populateCells(row, index, player1.getMark());
        e.target.textContent = newMark;
    })
})();

