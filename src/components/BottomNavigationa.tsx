type BottomNavProps = {
  currentStep: number
  testLength: number
  handleNext: () => void
  startTimer: () => void
  stopTimer: () => void
}

export default function BottomNavigation({
  currentStep,
  testLength,
  handleNext,
  startTimer,
  stopTimer,
}: BottomNavProps) {
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

  const isLastQuestionHandle = () => {
    localStorage.setItem("currentStep", JSON.stringify(currentStep + 1))
    stopTimer()
    handleNext()
  }

  const regularQuestionHandle = () => {
    localStorage.setItem("currentStep", JSON.stringify(currentStep + 1))
    handleNext()
  }

  return (
    <div className="flex justify-between">
      {!isEnd && (
        <button
          onClick={
            isLastQuestion ? isLastQuestionHandle : regularQuestionHandle
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-md font-roboto"
          disabled={isEnd}
        >
          Ответить
        </button>
      )}
    </div>
  )
}
