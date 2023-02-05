import wordsList from "../Mocks/words4.json";
import { WordObject } from "../types";

let wordObj: WordObject = {};
// let attempts = 6;

export const getRandomWord = (): string => {
  let i = Math.trunc(Math.random() * wordsList.length);
  const word = wordsList[i];
  setWordData(word);
  return word;
};

const setWordData = (word: string) => {
  const splitWord = [...word];
  let i = -1;
  splitWord.forEach((letter) => {
    i++;
    if (!Object.keys(wordObj).includes(letter)) {
      Object.assign(wordObj, { letter: i });
    } else {
      wordObj[letter].push(i);
    }
  });
};

const setValueData = (value: string): WordObject => {
  const splitValue = [...value];
  let valueObj: WordObject = {};
  let i = -1;
  splitValue.forEach((letter) => {
    i++;
    if (!Object.keys(valueObj).includes(letter)) {
      valueObj[letter] = [i];
    } else {
      valueObj[letter].push(i);
    }
  });
  return valueObj;
};

// const wordExists = (value: string): void => {
//   const exists = wordsList.includes(value);
//   if (!exists) throw Error("Esa palabra no existe!");
// };

export const checkWord = (value: string): number[] => {
  let result: number[] = [];
  const valueObj = setValueData(value);
  const wordLetters = Object.keys(wordObj);
  const wordPositions = Object.values(wordObj);
  const valueLetters = Object.keys(valueObj);
  const valuePositions = Object.values(valueObj);

  // try {
  //   wordExists(value);
  // } catch (e) {
  //   for (let i = 0; i < value.length; i++) {
  //     result[i] = -2;
  //   }
  //   return result;
  // }

  for (let i = 0; i < value.length; i++) {
    result[i] = -1;
    if (wordLetters.includes(valueLetters[i])) {
      valuePositions[i].forEach((index) => {
        if (wordObj[valueLetters[i]].some((value) => value == index)) {
          result[index] = 1;
        } else {
          if (!(valuePositions[i].length > wordPositions[i].length)) {
            result[index] = 0;
          }
        }
      });
    }
  }

  return result;
};

// const setLetterValue = () => {
//   //sets the value of the letters that arent in the result to -1
// };
