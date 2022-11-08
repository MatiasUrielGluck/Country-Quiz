import { useDispatch, useSelector } from "react-redux"
import gameOverLogo from "../../../../assets/winner_logo.svg"
import { resetState } from "../../../../store/gameSlice";
import './game-over.css'

export const GameOver = () => {
  const { correctCounter } = useSelector(state => state.game);
  const dispatch = useDispatch();

  const onTryAgain = () => {
    dispatch(resetState());
  }

  return (
    <div className="game-over">
      <img src={gameOverLogo} alt="game over" />
      <h1>Results</h1>
      <p>You got <span className="correct-counter">{correctCounter}</span> correct answers</p>
      <button className="try-again-btn" onClick={onTryAgain}>Try again</button>
    </div>
  )
}
