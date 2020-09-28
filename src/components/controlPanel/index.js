import React, {useState, useEffect} from 'react';
import './style.css'

function ControlPanel (props) {
    function handleSubmit (e) {
        e.preventDefault();
    }

    function handleChange (e) {
        e.preventDefault();
        props.columnChangeHandler(e.target.value)
        console.log(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input value={props.highlightedColumn} onChange={handleChange}></input>
            </label>
            <button type="submit">Go!</button>
        </form> 
    )
}

export default ControlPanel