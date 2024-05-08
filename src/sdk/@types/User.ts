import { Alganews } from "./Alganews";

export namespace User {
    export type Input = Alganews.components['schemas']['UserInput']
    export type IdInput = Alganews.components['schemas']['UserIdInput']
    export type Detailed = Alganews.components['schemas']['UserDetailed']
    export type Summary = Alganews.components['schemas']['UserSummary']
    export type Minimal = Alganews.components['schemas']['UserMinimal']
    export type Metrics = Alganews.components['schemas']['UserMetrics']
    export type Role = Alganews.components['schemas']['Role']
    export type Skill = Alganews.components['schemas']['Skill']
    export type EditorDetailed = Alganews.components['schemas']['EditorDetailed']
    export type EditorSummary = Alganews.components['schemas']['EditorSummary']
}