import {APIRequestContext, request} from '@playwright/test';
import { APIAuth } from '../../utils/types/api/authentication';
import { getAuthAPIClient  } from '../api/authentication-api';

export const getAuthApiContext = async({ user, authToken }: APIAuth): Promise<APIRequestContext> => {
    let extraHttpHeaders: { [key: string]: string } = {
        accept: "/*",
        'Content-Type': 'application/json'
    }

    if (!user && !authToken) {
        throw Error('Provide "user" or "authToken"');
    }

    if(user && !authToken) {
        const authClient = await getAuthAPIClient()
        const token = await authClient.getAuthToken(user)

        extraHttpHeaders = {...extraHttpHeaders, Authorization: `Token ${token}` }
    }

    if(!user && authToken) {
        extraHttpHeaders = {...extraHttpHeaders, Authorization: `Token ${authToken}` }
    }

    return await request.newContext({
        baseURL: process.env.BASE_URL,
        extraHTTPHeaders: extraHttpHeaders
    })
}