import { Alganews } from "./Alganews";

export namespace Post {
  export type Input = Alganews.components['schemas']['PostInput']
  export type Detailed = Alganews.components['schemas']['PostDetailed']
  export type Summary = Alganews.components['schemas']['PostSummary']
  export type Paginated = Alganews.components['schemas']['PostsPaginated']
  export type WithEarnings = Alganews.components['schemas']['PostWithEarnings']

  export type Query = {
    editorId?: number
    page?: number
    size?: number
    showAll?: boolean
    sort?: [keyof Summary, 'asc' | 'desc']
  }
}