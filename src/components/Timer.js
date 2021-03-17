import React from "react"
import Countdown from "react-countdown"

const Timer = () => {
  return (
    <div>
      <Countdown zeroPadDays={7} date={Date.now() + 60780000} />,
    </div>
  )
}

export default Timer
