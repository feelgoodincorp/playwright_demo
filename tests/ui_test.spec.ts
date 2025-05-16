import { searchTest as test } from './tests';

test.beforeEach(async ({ homePage }) => {
    await homePage.open('/');
});

test('Testing search on playwright documentation page', async ({ homePage, languagePage }) => {
    await homePage.navbar.openSearch();
    await homePage.navbar.searchModal.findResult({ keyword: 'python', resultNumber: 0 });

    await languagePage.languagePresent('python');
});