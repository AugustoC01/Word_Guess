import wordsList from "../Mocks/words.json";
import alphabeth from "../Mocks/alphabet.json";
import { WordObject, AlphabetObject } from "../types";

let wordObj: WordObject;
let letters: AlphabetObject;
let attempts: number;

export const getRandomWord = (): string => {
  let i = Math.trunc(Math.random() * wordsList.length);
  const word = wordsList[i];
  setWordData(word);
  return word;
};

const setWordData = (word: string) => {
  //SET INITIAL DATA
  letters = alphabeth;
  attempts = 0;

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
  if (!exists) throw Error("word");
};

const setInitialResult = (max: number): number[] => {
  let result: number[] = [];
  for (let i = 0; i < max; i++) {
    result[i] = -1;
  }
  return result;
};

const checkAttempts = () => {
  if (attempts == 5) throw Error("attempts");
  attempts = attempts + 1;
};

const setErrorResult = (e: string): number[] => {
  let status: number = 0;
  let result: number[] = [];
  switch (e) {
    case "word":
      status = -2;
      break;
    case "attempts":
      status = -3;
      break;
  }
  result[0] = status;
  return result;
};

// THIS IS BEING STORED IN MEMORY
const setLetterValue = (x: string) => {
  const i = letters.findIndex((obj) => x == obj.letter);
  letters[i].status = -1;
};

const checkWord = (value: string): number[] => {
  let result: number[] = [];
  const valueObj = setValueData(value);
  const wordLetters = Object.keys(wordObj);
  const valueLetters = Object.keys(valueObj);
  const valuePositions = Object.values(valueObj);

  result = setInitialResult(value.length);

  for (let i = 0; i < valueLetters.length; i++) {
    let repeated = 0;
    if (wordLetters.includes(valueLetters[i])) {
      valuePositions[i].forEach((index) => {
        if (wordObj[valueLetters[i]].some((value) => value == index)) {
          result[index] = 1;
        } else {
          if (wordObj[valueLetters[i]].length > valuePositions[i].length) {
            if (repeated < valuePositions[i].length) {
              repeated = repeated + 1;
              result[index] = 0;
            }
          } else {
            if (repeated < wordObj[valueLetters[i]].length) {
              repeated = repeated + 1;
              result[index] = 0;
            }
          }
        }
      });
    } else {
      setLetterValue(valueLetters[i]);
    }
  }
  return result;
};

export const getResult = (
  value: string
): { result: number[]; letters: AlphabetObject } => {
  try {
    wordExists(value);
    checkAttempts();
    const result = checkWord(value);
    return { result, letters };
  } catch (e: any) {
    const result = setErrorResult(e.message);
    return { result, letters };
  }
};

export const testGetRandomWord = (word: string) => {
  setWordData(word);
};

export const testGetResult = (
  word: string,
  value: string,
  showData: boolean
): { result: number[]; letters: AlphabetObject } => {
  try {
    if (word) {
      testGetRandomWord(word);
    } else {
      getRandomWord();
    }

    wordExists(value);
    checkAttempts();
    const result = checkWord(value);

    if (showData) {
      console.log("word::: ", word);
      console.log("wordObj::: ", wordObj);

      console.log("value::: ", value);
      console.log("ValueData::: ", setValueData(value));
    }
    return { result, letters };
  } catch (e: any) {
    const result = setErrorResult(e.message);
    return { result, letters };
  }
};
