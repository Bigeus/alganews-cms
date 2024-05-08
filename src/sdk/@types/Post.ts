import { Alganews } from "./Alganews";

export namespace Post {
    export type Summary = Alganews.components['schemas']['PostSummary']
    export type Detailed = Alganews.components['schemas']['PostDetailed']
    export type Earnings = Alganews.components['schemas']['PostEarnings']
    export type Input = Alganews.components['schemas']['PostInput']
    export type WithEarnings = Alganews.components['schemas']['PostWithEarnings']
    export type Paginated = Alganews.components['schemas']['PostsPaginated']
}