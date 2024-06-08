type ProgressBarProps = {
  currentStep: number
  testLength: number
}

export default function ProgressBar({
  currentStep,
  testLength,
}: ProgressBarProps) {
  const progressPercentage =
    currentStep === 1 || currentStep === 0
      ? 0
      : (currentStep / (testLength - 1)) * 100

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  )
}
