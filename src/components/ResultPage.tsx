type ResultPageProps = {
  questionName: string
}
export const ResultPage = ({ questionName }: ResultPageProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-lg font-bold mb-2 font-roboto"
        htmlFor="question4"
      >
        {questionName}
      </label>
    </div>
  )
}
