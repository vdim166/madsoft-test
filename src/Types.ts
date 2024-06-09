export enum AnswerTypes {
  Start,
  SingleAnswer,
  MultipleAnswers,
  ShortAnswer,
  DetailedAnswer,
  End,
}

export type TestType = {
  type: AnswerTypes
  questionName: string
  options?: string[]
}

export interface SurveyResponse {
  [key: string]: string | string[]
}
