// TODO: time left in storage
// TODO: validation
// TODO: end then time ends
type TimerProps = {
  timeLeft: number
}

export default function Timer({ timeLeft }: TimerProps) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <span className="text-lg font-roboto">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </span>
  )
}
