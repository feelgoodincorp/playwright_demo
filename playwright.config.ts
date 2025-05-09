import { defineConfig, devices } from '@playwright/test';
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';

dotenvConfig({ path: resolve(__dirname, '.env'), override: true });

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html'], ['allure-playwright']],
    globalTeardown: require.resolve('./utils/config/global-teardown'),
    use: {
        trace: 'on-first-retry',
    },
    projects: [
        // {
        //     name: 'chromium',
        //     use: { ...devices['Desktop Chrome'] },
        // },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // },
    ],
});