import React, { useState } from 'react';

const SteakTimer = () => {

    let [time, setTimer] = useState(0);
    let [message, setMsg] = useState("Not Started");
    let [countdownStarted, setCountdownStarted] = useState(false);

    let stopTimer = (timer) => {
        clearInterval(timer);
        setMsg("Times up!");
    }

    let countdownTimer = (seconds) => {
        let steakCookTimer  = setInterval( 
            function() {
                if(seconds == 0) {
                    setCountdownStarted(false);
                    stopTimer(steakCookTimer);
                    setMsg("Times up!");
                    setTimer(seconds)
                    return;
                }
                setCountdownStarted(true)
                setMsg("Timer ongoing");
                seconds -= 1;
                setTimer(seconds)
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
                <button className="w-3/4 bg-slate-200 " onClick={rareTimer}><div >Rare</div></button>
                <button className="w-3/4 bg-slate-200 " onClick={mediumRareTimer}><div >Medium Rare</div></button>
                <button className="w-3/4 bg-slate-200 " onClick={mediumTimer}><div >Medium</div></button>
                <button className="w-3/4 bg-slate-200 " onClick={mediumWellTimer}><div >Medium-well</div></button>
                <button className="w-3/4 bg-slate-200 " onClick={wellTimer}><div >Well</div></button>
            </div>
        </>
    );

}

export default SteakTimer