import test, { APIRequestContext, APIResponse } from '@playwright/test';
import { expectStatusCode } from '../../utils/assertions/solutions';
import { APIRoutes } from '../../utils/constants/routes';
import { ApiClient } from '../../utils/types/api/client';
import { Question, UpdateQuestion } from '../../utils/types/api/question';

export class QuestionApiClient implements ApiClient{
    constructor(public context: APIRequestContext) {}

    async getQuestionApi(questionId: number): Promise<APIResponse> {
        return await test.step(`Getting question with id "${questionId}"`, async () => {
            return await this.context.get(`${APIRoutes.Questions}/${questionId}`)
        })
    }

    async createQuestionApi(data: Question): Promise<APIResponse> {
        return await test.step(`Creating question with id "${data.id}"`, async () => {
            return await this.context.post(APIRoutes.Questions, {data})
        })
    }

    async updateQuestionApi(questionId: number, data: UpdateQuestion): Promise<APIResponse> {
        return await test.step(`Updating question with id "${questionId}"`, async () => {
            return await this.context.patch(`${APIRoutes.Questions}/${questionId}`, { data });
        });
    }

    async deleteQuestionApi(questionId: number): Promise<APIResponse> {
        return await test.step(`Deleting question with id "${questionId}"`, async () => {
            return await this.context.delete(`${APIRoutes.Questions}/${questionId}`);
        });
    }

    async createQuestion(data: Question): Promise<APIResponse> {
        const response = await this.createQuestionApi(data)
        await expectStatusCode({ actual: response.status(), expected: 201, api: response.url() });

        return await response.json();
    }
}