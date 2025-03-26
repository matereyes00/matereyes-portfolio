import React, { useState } from 'react';
import wellDone from '../../images/steak-assets/Group 5.svg'
import mediumWell from '../../images/steak-assets/Group 4.svg'
import medium from '../../images/steak-assets/Group 3.svg'
import mediumRare from '../../images/steak-assets/Group 2.svg'
import rare from '../../images/steak-assets/Group 1.svg'

const SteakTimer = () => {

    let [time, setTimer] = useState(0);
    let [message, setMsg] = useState("Not Started");
    let [countdownStarted, setCountdownStarted] = useState(false);

    let stopTimer = (timer) => {
        console.log('timer was stopped')
        clearInterval(timer);
        setTimer(0);
        console.log(timer)
        setMsg("Timer was abrumptly stopped!");
    }

    let countdownTimer = (seconds) => {
        let steakCookTimer  = setInterval( 
            function() {
                if(seconds === 0) {
                    setCountdownStarted(false);
                    setMsg("Times up!");
                    stopTimer(steakCookTimer);
                    const stopNum = 0;
                    setTimer(stopNum);
                    return;
                } else {
                    setCountdownStarted(true);
                    setMsg("Timer ongoing");
                    seconds -= 1;
                    setTimer(seconds);
                }
            }, 
            1000);
    }

    const rareTimer = (e) => {
        var minutesToSeconds = Math.floor(1*60);
        countdownTimer(minutesToSeconds);
    }

    const mediumRareTimer = (e) => {
        var minutesToSeconds = Math.floor(2*60);
        countdownTimer(minutesToSeconds);
    }
    
    const mediumTimer = (e) => {
        var minutesToSeconds = Math.floor(3*60);
        countdownTimer(minutesToSeconds);
    }

    const mediumWellTimer = (e) => {
        var minutesToSeconds = Math.floor(4*60);
        countdownTimer(minutesToSeconds);
    }

    const wellTimer = (e) => {
        var minutesToSeconds = Math.floor(5*60);
        countdownTimer(minutesToSeconds);
    }
    
    return (
        <>
            <h1>Time left:{time}</h1>
            <h1>{message}</h1>
            {/* <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter a message" /> */}
            <button onClick={stopTimer} className='p-3 bg-red-300 text-slate-900 mr-3 ml-3 rounded-xl'>Stop Timer</button>

            {/* https://medium.com/@samsonspaddockau/whats-the-difference-between-rare-medium-and-well-done-steak-fe463e0f960f */}
            <h1 className='text-5xl'>Cook Steak with me</h1>
            <div className='grid grid-flow-row grid-cols-3 bg-slate-400 gap-9 justify-items-center p-5 w-3/4 mx-auto my-4'>
                <button className="w-3/4 bg-slate-200 p-5 text-xl mt-30 " onClick={rareTimer}>
                    <div className="flex flex-row-reverse justify-around">
                        <h1>Rare</h1>
                        <img src={rare} alt="type-of-steak" />
                    </div>
                </button>
                <button className="w-3/4 bg-slate-200 p-5 text-xl mt-30 " onClick={mediumRareTimer}>
                    <div className="flex flex-row-reverse justify-around">
                        <h1>Medium Rare</h1>
                        <img src={mediumRare} alt="type-of-steak" />
                    </div>
                </button>
                <button className="w-3/4 bg-slate-200 p-5 text-xl mt-30 " onClick={mediumTimer}>
                    <div className="flex flex-row-reverse justify-around">
                        <h1>Medium</h1>
                        <img src={medium} alt="type-of-steak" />
                    </div>
                </button>
                <button className="w-3/4 bg-slate-200 p-5 text-xl mt-30 " onClick={mediumWellTimer}>
                    <div className="flex flex-row-reverse justify-around">
                        <h1>Medium Well</h1>
                        <img src={mediumWell}  alt="type-of-steak"/>
                    </div>
                </button>
                <button className="w-3/4 bg-slate-200 p-5 text-xl mt-30 " onClick={wellTimer}>
                    <div className="flex flex-row-reverse justify-around">
                        <h1>Well Done</h1>
                        <img src={wellDone} alt="type-of-steak" />
                    </div>
                </button>
            </div>
        </>
    );

}

export default SteakTimer