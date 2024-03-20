import React, { useEffect, useState } from 'react'
import { VscDebugStart } from "react-icons/vsc";
import { FaRegPauseCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import './Timer.css'

const Timer = () => {
    const [ isRunning, setIsRunning ] = useState(false);
    const [ time, setTime ] = useState(0);

    useEffect(() => {
        let timer;
        if(isRunning){
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return() => clearInterval(timer);
    }, [isRunning]);

    const startStopButton = () => {
        setIsRunning(!isRunning);
    };

    const resetButton = () => {
        setIsRunning(false);
        setTime(0);
    };

    const timeFormat = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  return (
    <div className='timer-container'>
        <h1>Stopwatch</h1>
        <div className='timer'>
          <div>
            <p>{timeFormat(time)}</p>
          </div>

          <div className='buttons'>
            <button onClick={startStopButton}>{isRunning ? <p><FaRegPauseCircle /></p> : <p><VscDebugStart /></p>}</button>
            <button onClick={resetButton}><p><GrPowerReset /></p></button>
          </div>
        </div>
    </div>
  )
}

export default Timer