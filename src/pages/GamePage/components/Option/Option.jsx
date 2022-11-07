export const Option = ({ option, correctOption, number }) => {
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

  return (
    <div>
      <span>{numberToLetter(number)}</span>
      <span>{option.name.common}</span>
      {
        // If this option was clicked, show if its correct or no
        // If it was not clicked but is correct and the user choose another option, show it's correct.
      }
    </div>
  );
};
