"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResult = exports.getRandomWord = void 0;
const words_json_1 = __importDefault(require("../Mocks/words.json"));
const alphabet_json_1 = __importDefault(require("../Mocks/alphabet.json"));
let wordObj;
let letters;
let attempts;
const getRandomWord = () => {
    let i = Math.trunc(Math.random() * words_json_1.default.length);
    const word = words_json_1.default[i];
    setWordData(word);
    return word;
};
exports.getRandomWord = getRandomWord;
const setWordData = (word) => {
    //SET INITIAL DATA
    letters = alphabet_json_1.default;
    attempts = 6;
    wordObj = {};
    const splitWord = [...word];
    let i = -1;
    splitWord.forEach((letter) => {
        i++;
        if (!Object.keys(wordObj).includes(letter)) {
            wordObj[letter] = [i];
        }
        else {
            wordObj[letter].push(i);
        }
    });
};
const setValueData = (value) => {
    const splitValue = [...value];
    let valueObj = {};
    let i = -1;
    splitValue.forEach((letter) => {
        i++;
        if (!Object.keys(valueObj).includes(letter)) {
            valueObj[letter] = [i];
        }
        else {
            valueObj[letter].push(i);
        }
    });
    return valueObj;
};
const wordExists = (value) => {
    const exists = words_json_1.default.includes(value);
    if (!exists)
        throw Error("word");
};
const setInitialResult = (max) => {
    let result = [];
    for (let i = 0; i < max; i++) {
        result[i] = -1;
    }
    return result;
};
const checkAttempts = () => {
    if (attempts == 0)
        throw Error("attempts");
    attempts = attempts - 1;
};
const setErrorResult = (e) => {
    let status = 0;
    let result = [];
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
const setLetterValue = (x) => {
    const i = letters.findIndex((obj) => x == obj.letter);
    letters[i].status = -1;
};
const checkWord = (value) => {
    let result = [];
    const valueObj = setValueData(value);
    const wordLetters = Object.keys(wordObj);
    // const wordPositions = Object.values(wordObj);
    const valueLetters = Object.keys(valueObj);
    const valuePositions = Object.values(valueObj);
    result = setInitialResult(value.length);
    const limit = wordLetters.length < valueLetters.length
        ? wordLetters.length
        : valueLetters.length;
    let repeated = 0;
    for (let i = 0; i < limit; i++) {
        if (wordLetters.includes(valueLetters[i])) {
            valuePositions[i].forEach((index) => {
                if (wordObj[valueLetters[i]].some((value) => value == index)) {
                    result[index] = 1;
                }
                else {
                    const quantity = wordObj[valueLetters[i]].length - valuePositions[i].length + 1;
                    if (quantity >= repeated) {
                        ++repeated;
                        result[index] = 0;
                    }
                }
            });
        }
        else {
            setLetterValue(valueLetters[i]);
        }
    }
    return result;
};
const getResult = (value) => {
    try {
        wordExists(value);
        checkAttempts();
        return checkWord(value);
    }
    catch (e) {
        return setErrorResult(e.message);
    }
};
exports.getResult = getResult;
