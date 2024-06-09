import { createContext } from "react"
import { SurveyResponse } from "../Types"

export const AppContext = createContext<{ answers: SurveyResponse }>({
  answers: {},
})
