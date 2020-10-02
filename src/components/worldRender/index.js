import React, {useEffect, useState} from 'react';
import './style.css'

function WorldRender (parentProps) {

    const GridRender = () => {
        let gridArray = [];
        let rowNumber;

        //Assigns each grid element a row number
        function rowAssigner (element) {
            if(Number.isInteger(element/10)){
                rowNumber=element/10;
            }
            return (rowNumber)
        }

        //Assigns each grid element a column number
        function columnAssigner (element) {
            if(element<10){
                return(element)
            }
            else{
                return(element%10)
            }
        }

        const ReactGridElement = (props) => {
            const [isHighlighted, setIsHighlighted] = useState(false)
            const [columnNumber, setColumnNumber] = useState(columnAssigner(props.elementNumber))
            const [gridRowNumber, setGridRowNumber] = useState(rowAssigner(props.elementNumber))

            useEffect(() => {
                if(parentProps.highlightedColumn === columnNumber){
                    setIsHighlighted(true)
                }
                else if(parentProps.highlightedRow === gridRowNumber){
                    setIsHighlighted(true)
                }
            }, [parentProps.highlightedColumn, parentProps.highlightedRow])

            return(
                <div className={`gridElement ${"gridNumber" + props.elementNumber} ${"gridRow" + rowAssigner(props.elementNumber)} ${"gridColumn" + columnAssigner(props.elementNumber)} ${isHighlighted ? "bg-red-700" : "bg-gray-400"}` + " w-16 h-16 border border-black"}
                    onClick={function () {isHighlighted ? setIsHighlighted(false) : setIsHighlighted(true);
                        }}/>
            )
        }

        //Creates 100 divs representing a grid element each and assigns elements unique class names/combinations
        for(let i=0; i<10*10; i++){
            gridArray.push(<ReactGridElement
                elementNumber={i}
            />)
        }

        return(
            <div className="gameGrid">
                {gridArray}
            </div>
        )
    }

    return(
       <GridRender/>
    )

}

export default WorldRender;