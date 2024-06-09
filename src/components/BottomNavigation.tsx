import { useContext } from "react"
import { AppContext } from "../context/answerContext"

type BottomNavProps = {
  handleNext: () => void
}

export default function BottomNavigation({ handleNext }: BottomNavProps) {
  const { currentStep, testLength, answers, test, startTimer, stopTimer } =
    useContext(AppContext)

  const isStart = currentStep === 0

  if (isStart) {
    return (
      <div className="flex justify-between">
        <button
          onClick={() => {
            localStorage.setItem("currentStep", JSON.stringify(currentStep + 1))
            startTimer()
            handleNext()
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md font-roboto"
        >
          Начать
        </button>
      </div>
    )
  }

  const isLastQuestion = currentStep === testLength - 2
  const isEnd = currentStep === testLength - 1

  const validationQuestionHandle = () => {
    const questionName = test[currentStep].questionName

    if (answers[questionName]) {
      if (Array.isArray(answers[questionName])) {
        return answers[questionName].length > 0
      }

      return true
    }

    return false
  }

  const isLastQuestionHandle = () => {
    localStorage.setItem("currentStep", JSON.stringify(currentStep + 1))
    stopTimer()
    handleNext()
  }

  const regularQuestionHandle = () => {
    localStorage.setItem("currentStep", JSON.stringify(currentStep + 1))
    handleNext()
  }

  const buttonIsActive = !validationQuestionHandle()
  //

  return (
    <div className="flex justify-between">
      {!isEnd && (
        <button
          onClick={
            isLastQuestion ? isLastQuestionHandle : regularQuestionHandle
          }
          className={`px-4 py-2 ${
            buttonIsActive ? "bg-gray-500" : "bg-blue-500"
          } text-white rounded-md font-roboto `}
          disabled={buttonIsActive}
        >
          Ответить
        </button>
      )}
    </div>
  )
}
