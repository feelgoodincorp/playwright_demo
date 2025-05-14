import { Question, UpdateQuestion } from '../../types/api/question'
import { expectToEqual } from '../solution'

type assertQuestionProps = {
    expectedQuestion: Question,
    actualQuestion: Question
}

type AssertUpdateQuestionProps = {
    expectedQuestion: UpdateQuestion;
    actualQuestion: UpdateQuestion;
};

export const assertUpdateQuestion = async ({ expectedQuestion, actualQuestion} : AssertUpdateQuestionProps) => {
    await expectToEqual({
        actual: expectedQuestion.question,
        expected: actualQuestion.question,
        description: 'Question "question"'
    });
    await expectToEqual({
        actual: expectedQuestion.correctAnswer,
        expected: actualQuestion.correctAnswer,
        description: 'Question "correctAnswer"'
    });
    await expectToEqual({
        actual: expectedQuestion.possibleAnswers,
        expected: actualQuestion.possibleAnswers,
        description: 'Question "possibleAnswers"'
    });
}

export const assertQuestion = async ({ expectedQuestion, actualQuestion }: assertQuestionProps) => {
    await expectToEqual({ actual: expectedQuestion.id, expected: actualQuestion.id, description: 'Question "id"' });
    await assertUpdateQuestion({ expectedQuestion, actualQuestion });
};