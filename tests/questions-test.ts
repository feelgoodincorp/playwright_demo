import { test as base } from "@playwright/test";
import { questionsFixture, QuestionsFixture } from "../fixtures/questions";
import { usersFixture, UserFixture } from "../fixtures/users";
import { combineFixtures } from "../utils/fixtures";
import {Question} from "../utils/types/api/question";

export const questionsTest = base.extend<UserFixture, QuestionsFixture>(
    combineFixtures(usersFixture, questionsFixture)
)
