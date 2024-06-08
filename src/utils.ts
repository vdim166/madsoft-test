import { AnswerTypes } from "./Types"

export class CreateTest {
  private tests: {
    type: AnswerTypes
    questionName: string
    options?: string[]
  }[] = []

  constructor(welcomePrompt = "Вы готовы к тестированию?") {
    this.tests.push({ type: AnswerTypes.Start, questionName: welcomePrompt })
  }

  public addTest = (
    type: AnswerTypes,
    questionName: string,
    options?: string[]
  ) => {
    if (options) {
      this.tests.push({ type, questionName, options })
    } else {
      this.tests.push({ type, questionName })
    }

    return this
  }

  public build = () => {
    this.tests.push({
      type: AnswerTypes.End,
      questionName: "Конец тестирования",
    })

    return this.tests
  }
}
