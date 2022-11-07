export const shuffleArray = (array) => {
  let result = [];
  for (const element of array) {
    result.push(element);
  }

  for (let i = result.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
    let temp = result[j];
    result[j] = result[i];
    result[i] = temp;
  }

  return result;
};
