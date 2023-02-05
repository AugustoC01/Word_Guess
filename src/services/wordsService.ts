import words from "../Mocks/words4.json";
import { Word } from "../types";

let word = "";
let wordObj = {};
let valueObj = {};
let limit = 0;
let attempts = 0;
let splitWord = [];
let splitValue = [];

export const getRandomWord = (): Word => {
  let i = Math.trunc(Math.random() * words.length);
  word = words[i];
  return word;
};

const setData = (word: Word, value: Word): void => {
  splitWord = word.split("");
  splitValue = value.split("");
  let i = -1;
  splitWord.forEach((letter) => {
    i++;
    if (!Object.keys(wordObj).includes(letter)) {
      wordObj[letter] = [i];
    } else {
      wordObj[letter].push(i);
    }
  });
  i = -1;
  splitValue.forEach((letter) => {
    i++;
    if (!Object.keys(valueObj).includes(letter)) {
      valueObj[letter] = [i];
    } else {
      valueObj[letter].push(i);
    }
  });
};

export const checkWord = (word: Word, value: Word): Number[] => {
  let result: Number[] = [];
  for (let i = 0; i < limit; i++) {
    if (wordLetters.includes(valueLetters[i])) {
      valuePositions[i].forEach((index) => {
        if (wordObj[valueLetters[i]].some((value) => value == index)) {
          result[index] = 1;
        } else {
          if (!valuePositions[i].length > wordPositions[i].length) {
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
