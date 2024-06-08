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
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-lg font-bold mb-2 font-roboto"
        htmlFor={questionName}
      >
        {questionName}
      </label>
      <textarea
        name={questionName}
        id={questionName}
        className="w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md"
        // value={answers.question4 || ""}
        onChange={handleChange}
      ></textarea>
    </div>
  )
}
