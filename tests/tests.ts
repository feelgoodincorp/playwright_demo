import { test as base } from '@playwright/test';
import { ContextPagesFixture, contextPagesFixture } from '../fixtures/context-page';
import { PagesFixture, pagesFixture } from '../fixtures/pages';
import { combineFixtures } from '../utils/fixtures';

export const searchTest = base.extend<ContextPagesFixture, PagesFixture>(
    combineFixtures(contextPagesFixture, pagesFixture)
)