import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const timerId = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);
      return () => clearInterval(timerId);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
