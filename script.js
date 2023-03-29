const gameBoard = (() => {
    const rows = [
        ['', '', ''], ['', '', ''], ['', '', '']
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

const displayMoves = (() => {
    const board = document.querySelector('.gameboard');
    let turns = 1;
    board.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(turns)
        const row = e.target.dataset.rowIndex;
        const index = e.target.dataset.cellIndex;
        let mark;
        if (turns % 2 === 0) {
            mark = player2.getMark();
        } else {
            mark = player1.getMark();
        }

        if (e.target.textContent) {
            return;
        } else {
            turns++;
            const newMark = gameBoard.populateCells(row, index, mark);
            e.target.textContent = newMark;
        }

    })
})();

