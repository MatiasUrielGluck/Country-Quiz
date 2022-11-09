export const getOptionss = (countries, correctOption) => {
  // Returns 3 options, different from the correct option which is passed as a parameter
  const options = [];

  for (let i = 0; i < 3; i++) {
    let option = countries[0];

    if (option.name !== correctOption.name && !options.includes(option)) {
      options.push(option);
    }
  }

  return options;
};

export const getOptions = (countries, correctOption) => {
  // Returns 3 options, different from the correct option which is passed as a parameter
  const options = [];
  
  while (options.length < 3) {
    let option = countries[Math.floor(Math.random() * countries.length)];
    
    if (option.name !== correctOption.name && !options.includes(option)) {
      options.push(option);
    }
  }

  return options;
};
