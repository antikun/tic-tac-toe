const gameBoard = (() => {
    const rows = [
        ['x', 'x', 'o'], ['x', 'o', 'o'], ['o', 'x', 'x']
    ];
    return { rows }
})();

const setGameBoard = (() => {
    const gameBoardRows = gameBoard.rows;
    gameBoardRows.forEach(row => {
        row.forEach(cell => {
            const gameBoardArea = document.querySelector(".gameboard");
            const newDiv = document.createElement('div');
            const cellContent = document.createElement('span');
            cellContent.textContent = cell;
            newDiv.append(cellContent);
            newDiv.classList.add('cell');
            gameBoardArea.append(newDiv);
        })
    })
})();