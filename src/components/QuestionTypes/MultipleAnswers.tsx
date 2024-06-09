import { useContext } from "react"
import { AppContext } from "../../context/answerContext"

type MultipleAnswersProps = {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void

  questionName: string
  options: string[]
}

export const MultipleAnswers = ({
  handleChange,
  questionName,
  options,
}: MultipleAnswersProps) => {
  const state = useContext(AppContext).answers

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-lg font-bold mb-2 font-roboto"
        htmlFor={questionName}
      >
        {questionName}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="mr-2 inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name={questionName}
              value={option}
              checked={state[questionName]?.includes(option)}
              onChange={handleChange}
            />
            <span className="ml-2 font-roboto">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
