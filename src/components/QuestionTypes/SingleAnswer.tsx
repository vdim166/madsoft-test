type SingleAnswerProps = {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  questionName: string
  options: string[]
}

// TODO:

export const SingleAnswer = ({
  handleChange,
  questionName,
  options,
}: SingleAnswerProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2 font-roboto text-lg"
        htmlFor="question1"
      >
        {questionName}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center mr-2">
            <input
              type="radio"
              className="form-radio"
              name={questionName}
              value={option}
              // checked={answers.question1 === "option1"}
              onChange={handleChange}
            />
            <span className="ml-2 font-roboto">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
