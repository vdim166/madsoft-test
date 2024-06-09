import { createContext } from "react"
import { SurveyResponse, TestType } from "../Types"

type contextType = {
  answers: SurveyResponse
  currentStep: number
  testLength: number
  test: TestType[]
  startTimer: () => void
  stopTimer: () => void
}

export const AppContext = createContext<contextType>({
  answers: {},
  currentStep: 0,
  testLength: 0,
  test: [],
  startTimer: () => {},
  stopTimer: () => {},
})
