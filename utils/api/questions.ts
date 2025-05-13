import { randomListOfStrings, randomNumber, randomString } from '../data-generator';
import { Question, UpdateQuestion } from '../types/api/question';

export const getRandomUpdateQuestion = (): UpdateQuestion => ({
    question: randomString(),
    correctAnswer: randomString(),
    possibleAnswers: randomListOfStrings()
});

export const getRandomQuestion = (): Question => ({
    id: randomNumber(),
    question: randomString(),
    correctAnswer: randomString(),
    possibleAnswers: randomListOfStrings()
});