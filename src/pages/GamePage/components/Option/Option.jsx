export const Option = ({
  option,
  number,
  correctAnswer,
  optionPlayed,
  setOptionPlayed,
}) => {
  const numberToLetter = () => {
    switch (number) {
      case 0:
        return "A";

      case 1:
        return "B";

      case 2:
        return "C";

      case 3:
        return "D";

      default:
        return "X";
    }
  };

  const onOptionPlayed = () => {
    setOptionPlayed(option);
  };

  if (optionPlayed) {
    return (
      <div
        className={`option ${
          option === correctAnswer
            ? "correct"
            : optionPlayed === option
            ? "incorrect"
            : null
        }`}
      >
        <span className="letter">{numberToLetter(number)}</span>
        <span>{option.name.common}</span>
      </div>
    );
  }

  return (
    <div className="option" onClick={onOptionPlayed}>
      <span className="letter">{numberToLetter(number)}</span>
      <span>{option.name.common}</span>
    </div>
  );
};
