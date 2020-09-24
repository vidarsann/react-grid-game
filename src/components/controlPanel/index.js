import React from 'react';
import './style.css'

function ControlPanel () {

    function handleSubmit (event) {
        console.log(event)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input placeholder="Highlight a column..."></input>
            </label>
            <button type="submit">Go!</button>
        </form> 
    )
}

export default ControlPanel