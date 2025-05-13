import { APIRequestContext} from "@playwright/test";

export interface ApiClient {
    context: APIRequestContext
}