import React, {useState, useEffect} from 'react';
import './style.css'

function ControlPanel () {
    const [highlightedColumn, setHighlightedColumn] = useState(0)

    const columnChangeHandler = (targetedColumn) => {
        setHighlightedColumn(targetedColumn)
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        let submitArray = document.getElementsByClassName(`gridColumn${highlightedColumn}`);

        console.log(submitArray)

        Array.from(submitArray).forEach(element => {
            console.log(element.style.backgroundColor)
            element.style.backgroundColor = "red"
        })
    }

    function handleChange (e) {
        e.preventDefault();
        columnChangeHandler(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input value={highlightedColumn} onChange={handleChange}></input>
            </label>
            <button type="submit">Go!</button>
        </form> 
    )
}

export default ControlPanel