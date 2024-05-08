import { Alganews } from "./Alganews";

export namespace Payment{
    export type Input = Alganews.components['schemas']['PaymentInput']
    export type Detailed = Alganews.components['schemas']['PaymentDetailed']
    export type Earnings = Alganews.components['schemas']['PaymentEarnings']
    export type Preview = Alganews.components['schemas']['PaymentPreview']
    export type PreviewInput = Alganews.components['schemas']['PaymentPreviewInput']
    export type Summary = Alganews.components['schemas']['PaymentSummary']
    export type Paginated = Alganews.components['schemas']['PaymentsPaginated']
}