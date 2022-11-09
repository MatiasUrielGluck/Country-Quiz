import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getOptions,
  getRandomCountry,
  shuffleArray,
} from "../../../../helpers";
import { addCorrect, nextStage } from "../../../../store/gameSlice";
import { Option } from "../Option";

import "./quiz.css";

export const Quiz = ({ countries, quizType }) => {
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
    if (optionPlayed === country) {
      dispatch(addCorrect());
    }
    setOptionPlayed(null);
    setCountry(getRandomCountry(countries));
    dispatch(nextStage());
  };

  return (
    <div className="capital-quiz">
      {country && shuffledOptions ? (
        <>
          {quizType === 1 ? (
            <h2>{country.capital[0]} is the capital of</h2>
          ) : (
            <>
              <img
                className="flag-img"
                src={country.flags[1]}
                alt="flag image"
              />
              <h2>Which country does this flag belong to?</h2>
            </>
          )}

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

          <button
            className={`next-btn ${optionPlayed ? "show" : null}`}
            onClick={onNext}
          >
            Next
          </button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
