import { useEffect } from "react";
import { useState } from "react";
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

  const [country, setCountry] = useState(null);
  const [optionPlayed, setOptionPlayed] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState(null);

  useEffect(() => {
    setCountry(getRandomCountry(countries));
  }, []);

  useEffect(() => {
    if (country) {
      let options = getOptions(countries, country);
      options.push(country);
      setShuffledOptions(shuffleArray(options));
    }
  }, [country]);

  const onNext = () => {
    setOptionPlayed(null);
    setCountry(getRandomCountry(countries));
    dispatch(nextStage());
  };

  return (
    <div className="capital-quiz">
      {country && shuffledOptions ? (
        <>
          <h2>{country.capital[0]} is the capital of</h2>

          <div className="options-container">
            {shuffledOptions.map((option, index) => (
              <Option
                option={option}
                number={index}
                correctAnswer={country}
                optionPlayed={optionPlayed}
                setOptionPlayed={setOptionPlayed}
                key={index}
              />
            ))}
          </div>

          <button className={`next-btn ${optionPlayed ? "show" : null}`} onClick={onNext}>Next</button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
