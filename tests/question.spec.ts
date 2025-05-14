import { getRandomQuestion, getRandomUpdateQuestion } from '../utils/api/questions';
import { assertQuestion, assertUpdateQuestion } from '../utils/assertion/api/questions';
import {expectStatusCode, expectToEqual} from '../utils/assertion/solution';
import { questionSchema, questionsListSchema, updateQuestionSchema } from '../utils/schema/api/questions-schema';
import { validateSchema } from '../utils/schema/validator';
import { Question } from '../utils/types/api/question';
import { questionsTest as test } from './questions-test';
import {QuestionsAPIClient} from "../core/api/question-api";

test.describe('Questions', () => {
    test('Get question', async ({question, questionsClient }) => {
        const response = await questionsClient.getQuestionAPI(question.id)

        const json: Question = await response.json()

        await expectStatusCode({ actual: response.status(), expected: 200, api: response.url() })
    })
})