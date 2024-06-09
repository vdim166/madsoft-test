export enum AnswerTypes {
  Start,
  SingleAnswer,
  MultipleAnswers,
  ShortAnswer,
  DetailedAnswer,
  End,
}

export interface SurveyResponse {
  [key: string]: string | string[]
}
