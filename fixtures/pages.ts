import { Fixtures } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { LanguagesPage } from '../pages/languages-page';
import { ContextPagesFixture } from './context-page';

export type PagesFixture = {
    homePage: HomePage;
    languagePage: LanguagesPage;
}

export const pagesFixture: Fixtures<PagesFixture, ContextPagesFixture> = {
    homePage: async ({ contextPage }, use) => {
        const homePage = new HomePage(contextPage)
        await use(homePage)
    },
    languagePage: async ({ contextPage }, use) => {
        const languagePage = new LanguagesPage(contextPage)
        await use(languagePage)
    }
}