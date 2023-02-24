import s from '../styles/board.module.css'
import Square from './square'
import { useState } from 'react'

const Board = (props) => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i) => {
    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? "X" : "O"
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onClick={ () => {handleClick(i)} }
    />
  )

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null
  }

  const status = () => {
    const winner = calculateWinner(squares)
    if (winner) {
      return "Winner: " + winner
    } else if (squares.reduce((x, y) => x && y)) {
      return "Draw"
    } else {
      return `Next player: ${xIsNext ? "X" : "O"}`
    }
  }

  return (
    <div>
      <div className={s.status}>{status()}</div>
      <div className={s.boardrow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={s.boardrow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={s.boardrow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
