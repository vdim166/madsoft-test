import { useContext } from "react"
import { AppContext } from "../../context/answerContext"

type DetailedAnswerProps = {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  questionName: string
}

export const DetailedAnswer = ({
  handleChange,
  questionName,
}: DetailedAnswerProps) => {
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
      <textarea
        value={answer}
        name={questionName}
        id={questionName}
        className="w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md"
        onChange={handleChange}
      ></textarea>
    </div>
  )
}
