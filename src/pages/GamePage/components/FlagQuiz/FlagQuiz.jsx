import { useDispatch } from "react-redux";
import { nextStage } from "../../../../store/gameSlice";

export const FlagQuiz = ({countries}) => {
  const dispatch = useDispatch();

  const onNext = () => {
    dispatch(nextStage());
  };

  return (
    <div>
      <button onClick={onNext}>Next</button>
    </div>
  )
}
