export const getOptions = (countries, correctOption) => {
  // Returns 3 options, different from the correct option which is passed as a parameter
  const options = [];
  let counter = 0;

  for (let i = 0; i < 3; i++) {
    let option = countries[counter];

    if (option.name !== correctOption.name) {
      options.push(option);
    }

    counter++;
  }

  return options;
};
