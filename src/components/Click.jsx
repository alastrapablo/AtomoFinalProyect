import React from 'react'

function Click() {
    function eventHandler() {
        console.log("Loading...")
    };

    return (
        <div>
            <button 
            type="button"
            onClick={eventHandler}
            >More Info</button>
        </div>
    );
}

export default Click;