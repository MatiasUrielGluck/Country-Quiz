import { useDispatch, useSelector } from "react-redux";
import { generateQuizType } from "../../../../helpers";
import { GameOver, CapitalQuiz, FlagQuiz } from "../";
import { finishGame } from "../../../../store/gameSlice";
import { useCountries } from "../../../../hooks";

export const GameController = () => {
  const { countries } = useCountries();

  const { stage, max_stage, finished } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  if (stage === max_stage) {
    dispatch(finishGame());
  }

  let quizType = generateQuizType();

  if (finished) {
    return <GameOver />;
  } else if (quizType === 1) {
    return <CapitalQuiz countries={countries} />;
  } else {
    return <FlagQuiz countries={countries}/>;
  }
};
