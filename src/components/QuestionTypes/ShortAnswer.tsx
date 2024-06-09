import { useContext } from "react"
import { AppContext } from "../../context/answerContext"

type ShortAnswerProps = {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  questionName: string
}

export const ShortAnswer = ({
  handleChange,
  questionName,
}: ShortAnswerProps) => {
  const state = useContext(AppContext).answers
  const answer = state[questionName] || ""

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-lg font-bold mb-2 font-roboto"
        htmlFor={questionName}
      >
        {questionName}
      </label>
      <input
        value={answer}
        type="text"
        name={questionName}
        id={questionName}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={handleChange}
      />
    </div>
  )
}
