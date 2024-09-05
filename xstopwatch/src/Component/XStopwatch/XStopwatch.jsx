import React, { useEffect, useState } from 'react'
import "./XStopwatch.css"
const XStopwatch = () => {
    const [runTimer, setRunTimer] = useState(false);
    const [time, setTime] = useState(0)

    function handleStartTimer() {
        setRunTimer(!runTimer);
    }

    function handleResetTimer() {
        setTime(0);
    }

    function timeFormat () {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    useEffect(() => {
        let interval;

        if(runTimer) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [runTimer, time]);
  return (
    <div className='stopwatch-container'>
        <h1>Stopwatch</h1>

        <div className="timer">
            <p>
                <span>Time: </span>
                <span>{timeFormat()}</span>
            </p>
        </div>

        <div className="time-controller">
            <button onClick={handleStartTimer}>{runTimer === false? "start" : "stop"}</button>
            <button onClick={handleResetTimer}>Reset</button>
        </div>
    </div>
  )
}

export default XStopwatch