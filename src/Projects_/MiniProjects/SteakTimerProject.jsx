import React, { useState } from 'react';

const SteakTimer = () => {

    const [message, setMessage] = useState(0);
    
    const handleClick = (e) => {
        setMessage( e.target.value);
      };

    return (
        <>
            <h1>Time left:{message}</h1>
            {/* <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter a message" /> */}
            <button onClick={handleClick}>Change Message</button>

            {/* https://medium.com/@samsonspaddockau/whats-the-difference-between-rare-medium-and-well-done-steak-fe463e0f960f */}
            <h1 className='text-5xl'>Cook Steak with me</h1>
            <div className='grid grid-flow-row grid-cols-3 bg-slate-400 gap-9 justify-items-center p-5'>
                <button className="w-3/4 bg-slate-200 "><div >medium</div></button>
                <button className="w-3/4 bg-slate-200 "><div >medium</div></button>
                <button className="w-3/4 bg-slate-200 "><div >medium</div></button>
                <button className="w-3/4 bg-slate-200 "><div >medium</div></button>
                <button className="w-3/4 bg-slate-200 "><div >medium</div></button>
            </div>
        </>
    );

}

export default SteakTimer