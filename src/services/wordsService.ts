import wordsList from "../Mocks/words.json";
import alphabeth from "../Mocks/alphabet.json";
import { WordObject } from "../types";

let word = "";
let wordObj: WordObject = {};
let letters = alphabeth;
// let attempts = 6;

export const getRandomWord = (): string => {
  let i = Math.trunc(Math.random() * wordsList.length);
  word = wordsList[i];
  setWordData(word);
  return word;
};

const setWordData = (word: string) => {
  wordObj = {};
  const splitWord = [...word];
  let i = -1;
  splitWord.forEach((letter) => {
    i++;
    if (!Object.keys(wordObj).includes(letter)) {
      wordObj[letter] = [i];
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

const wordExists = (value: string): void => {
  const exists = wordsList.includes(value);
  if (!exists) throw Error("Esa palabra no existe!");
};

export const checkWord = (value: string): number[] => {
  let result: number[] = [];
  const valueObj = setValueData(value);
  const wordLetters = Object.keys(wordObj);
  // const wordPositions = Object.values(wordObj);
  const valueLetters = Object.keys(valueObj);
  const valuePositions = Object.values(valueObj);

  try {
    wordExists(value);
  } catch (e) {
    for (let i = 0; i < value.length; i++) {
      result[i] = -2;
    }
    return result;
  }

  for (let i = 0; i < value.length; i++) {
    result[i] = -1;
  }
  const limit =
    wordLetters.length < valueLetters.length
      ? wordLetters.length
      : valueLetters.length;

  let repeated = 0;
  for (let i = 0; i < limit; i++) {
    if (wordLetters.includes(valueLetters[i])) {
      valuePositions[i].forEach((index) => {
        if (wordObj[valueLetters[i]].some((value) => value == index)) {
          result[index] = 1;
        } else {
          const quantity =
            wordObj[valueLetters[i]].length - valuePositions[i].length + 1;
          if (quantity >= repeated) {
            ++repeated;
            result[index] = 0;
          }
        }
      });
    } else {
      setLetterValue(valueLetters[i]);
    }
  }
  return result;
};

// THIS IS BEING STORED IN MEMORY
const setLetterValue = (x: string) => {
  const i = letters.findIndex((obj) => x == obj.letter);
  letters[i].status = -1;
};
