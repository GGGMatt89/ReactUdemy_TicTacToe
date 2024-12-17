/* import { useState } from "react"; */

export default function GameBoard({ board, onSelectSquare }) {
  //, activePlayerSymbol }) {
  /* const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const board = [...prevGameBoard.map((innerArray) => [...innerArray])];
      board[rowIndex][colIndex] = activePlayerSymbol;
      return board;
    });

    onSelectSquare();
  } */

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* <button onClick={() => handleClick(rowIndex, colIndex)}> */}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
