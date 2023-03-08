import wordsList from "../Mocks/words.json";
import alphabeth from "../Mocks/alphabet.json";
import { LetterPositions, AlphabetObject } from "../types";

let wordObj: LetterPositions;
let letters: AlphabetObject;
let attemptCount: number;
let wordLetters: string[];

export const getRandomWord = (): string => {
  let i = Math.trunc(Math.random() * wordsList.length);
  const word = wordsList[i];
  setWordData(word);
  return word;
};

const setWordData = (word: string) => {
  letters = alphabeth;
  attemptCount = 0;

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
  wordLetters = Object.keys(wordObj);
};

const getLetterPositions = (value: string): LetterPositions => {
  const splitValue = [...value];
  let valueObj: LetterPositions = {};
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

const checkAttempts = () => {
  if (attemptCount == 5) throw Error("attempts");
  attemptCount = attemptCount + 1;
};

const setErrorResult = (errorName: string, value: string): number[] => {
  let errorCode: number = 0;
  switch (errorName) {
    case "word":
      errorCode = -2;
      break;
    case "attempts":
      errorCode = -3;
      break;
  }
  const result: number[] = Array.from(
    { length: value.length },
    () => errorCode
  );
  return result;
};

const setLetterValue = (x: string) => {
  const i = letters.findIndex((obj) => x == obj.letter);
  letters[i].status = -1;
};

const compareWords = (value: string): number[] => {
  const valueObj = getLetterPositions(value);
  const valueLetters = Object.keys(valueObj);
  const valuePositions = Object.values(valueObj);

  const result = new Array(value.length).fill(-1);

  for (let i = 0; i < valueLetters.length; i++) {
    let letter = valueLetters[i];
    let letterPositions = valuePositions[i];
    let repeated = 0;

    if (wordLetters.includes(letter)) {
      letterPositions.forEach((index) => {
        if (wordObj[letter].some((value) => value == index)) {
          result[index] = 1;
        } else {
          if (wordObj[letter].length > letterPositions.length) {
            if (repeated < letterPositions.length) {
              repeated = repeated + 1;
              result[index] = 0;
            }
          } else {
            if (repeated < wordObj[letter].length) {
              repeated = repeated + 1;
              result[index] = 0;
            }
          }
        }
      });
    } else {
      setLetterValue(letter);
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
    const result = compareWords(value);
    return { result, letters };
  } catch (e: any) {
    const result = setErrorResult(e.message, value);
    return { result, letters };
  }
};

/* FUNCTIONS TO TEST COMPARE WORDS 
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
    const result = compareWords(value);

    if (showData) {
      console.log("word::: ", word);
      console.log("wordObj::: ", wordObj);

      console.log("value::: ", value);
      console.log("ValueData::: ", getLetterPositions(value));
    }
    return { result, letters };
  } catch (e: any) {
    const result = setErrorResult(e.message, value);
    return { result, letters };
  }
}; */
