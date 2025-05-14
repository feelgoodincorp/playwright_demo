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

    test('Create question', async ({ questionsClient })=> {
        const payload = getRandomQuestion();

        const response = await questionsClient.createQuestionAPI(payload);
        const json: Question = await response.json();

        await expectStatusCode({actual: response.status(), expected: 201, api: response.url() })

        await assertQuestion({ expectedQuestion: payload, actualQuestion: json });

        await validateSchema({ schema: questionSchema, json });
    })

    test('Delete question', async ({ question, questionsClient }) => {
        const deleteQuestionResponse = await questionsClient.deleteQuestionAPI(question.id);
        const getQuestionResponse = await questionsClient.getQuestionAPI(question.id);

        await expectStatusCode({
            actual: getQuestionResponse.status(),
            expected: 404,
            api: getQuestionResponse.url()
        });
        await expectStatusCode({
            actual: deleteQuestionResponse.status(),
            expected: 200,
            api: deleteQuestionResponse.url()
        });
    });
})