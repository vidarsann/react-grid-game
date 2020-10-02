import React, {useState, useEffect} from 'react';
import './style.css'

function ControlPanel (props) {

    const [localHighlightedColumn, setlocalHighlightedColumn] = useState(0);
    const [localHighlightedRow, setlocalHighlightedRow] = useState(0);
    
    function handleSubmit (e) {
        e.preventDefault();
        console.log(localHighlightedRow, localHighlightedColumn, e.target)

        if (e.target.name === "columnSubmit"){
            props.highlightHandler(localHighlightedColumn, e.target.name)
        }
        else if(e.target.name === "rowSubmit"){
            props.highlightHandler(localHighlightedRow, e.target.name)
        }
    }

    function handleChange (e) {
        e.preventDefault();
        
        if(e.target.name === "columnSubmit"){
            setlocalHighlightedColumn(parseInt(e.target.value))
        }
        else if(e.target.name === "rowSubmit"){
            setlocalHighlightedRow(parseInt(e.target.value))
        }
    }

    return(
        <div className="w-64 h-64 absolute bg-teal-200 flex flex-row flex-wrap">
            <form onSubmit={handleSubmit} name="columnSubmit" className="w-full h-16 flex justify-center">
                <p className="text-center pt-2">Choose a column to highlight:</p>
                <label>
                    <input value={localHighlightedColumn} name="columnSubmit" className="w-12 h-full text-6xl text-center" onChange={handleChange} type="number"></input>
                </label>
                <button className="px-2" type="submit">Go!</button>
            </form>
            <form onSubmit={handleSubmit} name="rowSubmit" className="w-full h-16 flex justify-center">
                <p className="text-center pt-2">Choose a row to highlight:</p>
                <label>
                    <input value={localHighlightedRow} name="rowSubmit" className="w-12 h-full text-6xl text-center" onChange={handleChange} type="number"></input>
                </label>
                <button className="px-2" type="submit">Go!</button>
            </form>  
        </div>
    )
}

export default ControlPanel