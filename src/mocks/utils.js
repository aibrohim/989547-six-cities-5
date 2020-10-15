export const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomElementsArray = (array) => {
  const MIN_ARRAY_LENGTH = 2;
  const randomArrayLength = getRandomInteger(0, array.length - 1);

  const splicedArray = array.slice().splice(MIN_ARRAY_LENGTH, randomArrayLength);

  if (splicedArray.length === 0) {
    return array;
  }

  return splicedArray;
};
