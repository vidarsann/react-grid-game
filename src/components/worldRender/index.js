import React, {useState} from 'react';
import './style.css'

function WorldRender () {

    const GridRender = () => {
        let gridArray = [];
        let rowNumber;


        //Assigns each grid element a row number
        function rowAssigner (element) {
            if(Number.isInteger(element/10)){
                rowNumber=element/10;
            }
            return ("gridRow" + rowNumber)
        }

        //Assigns each grid element a column number
        function columnAssigner (element) {
            if(element<10){
                return("gridColumn" + element)
            }
            else{
                return("gridColumn" + element%10)
            }
        }

        const ReactGridElement = (elementNumber) => {
            const [isHighlighted, setIsHighlighted] = useState(false)
            return(
                <div className={`gridElement ${"gridNumber" + elementNumber} ${rowAssigner(elementNumber)} ${columnAssigner(elementNumber)}`} style={{backgroundColor: "lightblue"}}></div>
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