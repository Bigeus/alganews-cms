import { Alganews } from "./Alganews";

export namespace CashFlow{
    export type CategoryInput = Alganews.components['schemas']['CashFlowCategoryInput']
    export type CategoryDetailed = Alganews.components['schemas']['CashFlowCategoryDetailed']
    export type CategoryIdInput = Alganews.components['schemas']['CashFlowCategoryIdInput']
    export type CategoryMinimal = Alganews.components['schemas']['CashFlowCategoryMinimal']
    export type CategorySummary = Alganews.components['schemas']['CashFlowCategorySummary']
    export type EntryDetailed = Alganews.components['schemas']['CashFlowEntryDetailed']
    export type EntryInput = Alganews.components['schemas']['CashFlowEntryInput']
    export type EntrySummary = Alganews.components['schemas']['CashFlowEntrySummary']
    export type EntryType = Alganews.components['schemas']['CashFlowEntryType']
}