import s from '../styles/board.module.css'
import Square from './square'
import { useState } from 'react'

const Board = (props) => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i) => {
    const x = squares.slice()
    x[i] = "X"
    setSquares(x)
  };

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onClick={ () => {handleClick(i)} }
    />
  )

  const status = "Next player: X"

  return (
    <div>
      <div className={s.status}>{status}</div>
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
