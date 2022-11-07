import { useDispatch } from "react-redux";
import {
  getOptions,
  getRandomCountry,
  shuffleArray,
} from "../../../../helpers";
import { nextStage } from "../../../../store/gameSlice";
import { Option } from "../Option";

import "./capital-quiz.css";

export const CapitalQuiz = ({ countries }) => {
  const dispatch = useDispatch();

  const country = getRandomCountry(countries);
  let options;
  let shuffledOptions;

  if (country) {
    options = getOptions(countries, country);
    options.push(country);
    shuffledOptions = shuffleArray(options);
  }

  const onNext = () => {
    dispatch(nextStage());
  };

  return (
    <div className="capital-quiz">
      {country ? (
        <>
          <h2>{country.capital[0]} is the capital of</h2>

          <div className="options-container">
            { shuffledOptions.map((option, index) => <Option option={option} correctOption={country} number={index} key={index} />) }
          </div>

          <button onClick={onNext}>Next</button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
