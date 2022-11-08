import { useDispatch, useSelector } from "react-redux";
import { generateQuizType } from "../../../../helpers";
import { GameOver, Quiz } from "../";
import { useCountries } from "../../../../hooks";

export const GameController = () => {
  const { countries } = useCountries();

  const { stage, max_stage } = useSelector((state) => state.game);

  let quizType = generateQuizType();

  if (stage > max_stage) {
    return <GameOver />;
  }

  if (countries.length > 0) {
    return <Quiz countries={countries} quizType={quizType} />;
  }
  
  return <h2>Loading...</h2>
};
