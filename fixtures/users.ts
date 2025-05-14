import { Fixtures } from '@playwright/test';
import { AuthUser } from '../utils/types/api/authentication';

export type UserFixture = {
    testUser: AuthUser
}

export const usersFixture: Fixtures<UserFixture> = {
    testUser: async({}, use) => {
        const email = process.env.TEST_USER_EMAIL;
        const password = process.env.TEST_USER_PASSWORD;

        if (!email || !password) {
            throw Error(`Provide "TEST_USER_EMAIL" and "TEST_USER_PASSWORD" inside .env`);
        }

        await use({email, password})
    }
}