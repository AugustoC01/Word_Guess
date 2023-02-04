import words from "../Mocks/words4.json";
import { Word } from "../types";

export const getRandomWord = (): Word => {
  let i = Math.trunc(Math.random() * words.length);
  return words[i];
};

export const checkWord = (word: Word, value: Word): Number[] => {
  let answer: Number[] = [];
  if (word == value) {
    for (let i = 0; i < word.length; i++) {
      answer[i] = 1;
    }
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == value[i]) {
        answer[i] = 1;
      } else {
        if (word.includes(value[i])) {
          answer[i] = 0;
        } else {
          answer[i] = -1;
        }
      }
    }
  }
  return answer;
};

// const setLetterValue = () => {
//   //sets the value of the letters that arent in the answer to -1
// };
