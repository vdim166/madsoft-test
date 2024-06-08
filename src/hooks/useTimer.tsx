import { useEffect, useState } from "react"

const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState(600)
  const [timerState, setTimerState] = useState(false)

  const startTimer = () => {
    setTimerState(true)
  }
  const stopTimer = () => {
    setTimerState(false)
  }

  useEffect(() => {
    if (timerState) {
      if (timeLeft <= 0) return
      const interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearInterval(interval)
    }
  }, [timeLeft, timerState])

  return { timeLeft, startTimer, stopTimer }
}

export { useTimer }
