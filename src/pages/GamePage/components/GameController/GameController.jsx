import { useDispatch, useSelector } from "react-redux";
import { generateQuizType } from "../../../../helpers";
import { GameOver, Quiz } from "../";
import { finishGame } from "../../../../store/gameSlice";
import { useCountries } from "../../../../hooks";

export const GameController = () => {
  const { countries } = useCountries();

  const { stage, max_stage, finished } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  if (stage > max_stage) {
    dispatch(finishGame());
  }

  let quizType = generateQuizType();

  if (finished) {
    return <GameOver />;
  }

  if (countries.length > 0) {
    return <Quiz countries={countries} quizType={quizType} />;
  }
  
  return <h2>Loading...</h2>
};
