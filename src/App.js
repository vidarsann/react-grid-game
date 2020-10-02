import React, {useEffect, useState} from 'react';
import './styles.css';
import './output.css';

import WorldRender from './components/worldRender';
import ControlPanel from './components/controlPanel';

function App() {
  const [highlightedColumn, setHighlightedColumn] = useState();
  const [highlightedRow, setHighlightedRow] = useState();

  function highlightHandler (highlight, rowOrColumn) {
    if(rowOrColumn === "columnSubmit"){
      setHighlightedColumn(highlight)
    }
    else if(rowOrColumn === "rowSubmit"){
      setHighlightedRow(highlight)
    }
  }

  useEffect(() => {

  }, [highlightedColumn])

  return (
    <div className="App">
      <ControlPanel 
        highlightHandler={highlightHandler}
        />
      <WorldRender
        highlightedColumn={highlightedColumn}
        highlightedRow={highlightedRow}
        />
    </div>
  );
}

export default App;
