import React, {useState} from 'react';
import './App.css';

import WorldRender from './components/worldRender';
import ControlPanel from './components/controlPanel'

function App() {
  const [highlightedColumn, setHighlightedColumn] = useState(0)

  const columnChangeHandler = (targetedColumn) => {
    setHighlightedColumn(targetedColumn)
  }

  return (
    <div className="App">
      <ControlPanel 
        highlightedColumn={highlightedColumn}
        columnChangeHandler={columnChangeHandler}/>
      <WorldRender/>
    </div>
  );
}

export default App;
