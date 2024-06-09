import { useEffect, useState } from "react"

const timeKey = "test_started_at"

const useTimer = (cb: () => void) => {
  const [timerState, setTimerState] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => {
    const time = localStorage.getItem(timeKey)

    if (time) {
      const dif = Math.floor((Date.now() - Number(time)) / 1000)

      if (dif > 0) {
        setTimerState(true)
        return 600 - dif
      } else {
        return 0
      }
    } else return 600
  })

  const startTimer = () => {
    localStorage.setItem(timeKey, Date.now().toString())
    setTimerState(true)
  }
  const stopTimer = () => {
    setTimerState(false)
  }

  useEffect(() => {
    if (timeLeft <= 0) return cb()
    if (timerState) {
      const interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearInterval(interval)
    }
  }, [timeLeft, timerState, cb])

  return { timeLeft, startTimer, stopTimer }
}

export { useTimer }
