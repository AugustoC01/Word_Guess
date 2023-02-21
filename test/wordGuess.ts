import { WordObject } from "../src/types";

let wordObj: WordObject;

const setWordData = (word: string) => {
  //SET INITIAL DATA
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

const setInitialResult = (max: number): number[] => {
  let result: number[] = [];
  for (let i = 0; i < max; i++) {
    result[i] = -1;
  }
  return result;
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
    }
  }
  return result;
};

export const testGetRandomWord = (word: string) => {
  setWordData(word);
};

const testGetResult = (word: string, value: string, showData: boolean) => {
  if (word) {
    testGetRandomWord(word);
  }
  const result = checkWord(value);
  if (showData) {
    console.log("word::: ", word);
    console.log("wordObj::: ", wordObj);

    console.log("value::: ", value);
    console.log("ValueData::: ", setValueData(value));
  }
  return result;
};

const result = testGetResult("PERRO", "PODER", true);
console.log("result::: ", result);
