export const getRandomCountry = (countryList) => {
  return countryList[Math.floor(Math.random() * countryList.length)];
};
