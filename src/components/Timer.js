import React, { useState, useEffect } from "react"
import moment from "moment"

const Timer = ({ deadline }) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setInterval(() => {
      const now = moment()
      const then = moment(deadline, "YYYY-MM-DD hh:mm:ss")
      const countdown = moment(then - now)

      setDays(countdown.format("D"))
      setHours(countdown.format("HH"))
      setMinutes(countdown.format("mm"))
      setSeconds(countdown.format("ss"))
    }, 1000)
  }, [deadline])

  return (
    <div className="bg-red-500 py-2 flex justify-center fixed bottom-0 w-full">
      <div className="mx-2">
        <h1 className="text-white text-4xl font-bold">0{days}</h1>
        <p className="uppercase text-white font-bold text-xs">days</p>
      </div>
      <div className="mx-2">
        <h1 className="text-white text-4xl font-bold">{hours}</h1>
        <p className="uppercase text-white font-bold text-xs">hrs</p>
      </div>
      <div className="mx-2">
        <h1 className="text-white text-4xl font-bold">{minutes}</h1>
        <p className="uppercase text-white font-bold text-xs">min</p>
      </div>
      <div className="mx-2">
        <h1 className="text-white text-4xl font-bold">{seconds}</h1>
        <p className="uppercase text-white font-bold text-xs">sec</p>
      </div>
    </div>
  )
}

export default Timer
