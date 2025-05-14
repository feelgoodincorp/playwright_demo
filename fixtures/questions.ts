import { Fixtures } from '@playwright/test';
import { QuestionsAPIClient } from '../core/api/question-api';
import { getAuthApiContext } from '../core/context/auth-context';
import { getRandomQuestion } from '../utils/api/questions';
import { Question } from '../utils/types/api/question';
import { UserFixture } from './users';

export type QuestionsFixture = {
    questionsClient: QuestionsAPIClient;
    question: Question;
};

export const questionsFixture: Fixtures<QuestionsFixture, UserFixture> = {
    questionsClient: async ({ testUser }, use) => {
        const authContext = await getAuthApiContext({ user: testUser });
        const questionsClient = new QuestionsAPIClient(authContext);

        await use(questionsClient);
    },
    question: async ({ questionsClient }, use) => {
        const randomQuestion = getRandomQuestion();
        const question = await questionsClient.createQuestion(randomQuestion);

        await use(question);

        await questionsClient.deleteQuestionAPI(question.id);
    }
};