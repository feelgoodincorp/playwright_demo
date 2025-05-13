import test, { APIRequestContext, APIResponse } from '@playwright/test';
import { APIRoutes } from '../../utils/constants/routes';
import { ApiClient } from '../../utils/types/api/client';
import { AuthUser } from '../../utils/types/api/authentication';
import { getDefaultApiContext } from '../context/default-context';

class AuthApiClient implements ApiClient{
    constructor(public context: APIRequestContext) {}

    async getAuthTokenApi(data: AuthUser): Promise<APIResponse> {
        const stepName = `Getting token for user with email "${data.email}" and password "${data.password}"`;
        return await test.step(stepName, async () => {
            return await this.context.post(APIRoutes.Auth, { data })
        })
    }

    async getAuthToken(data: AuthUser): Promise<string> {
        // Should be used like this:

        // const response = await this.getAuthTokenApi(data);
        // const json = await response.json();

        // expect(response.status()).toBe(200);

        // return json.token;

        return 'token';
    }
}

export const getAuthAPIClient = async (): Promise<AuthApiClient> => {
    const defaultContext = await getDefaultApiContext();
    return new AuthApiClient(defaultContext);
};