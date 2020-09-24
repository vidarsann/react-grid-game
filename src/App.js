import React from 'react';
import './App.css';

import WorldRender from './components/worldRender';
import ControlPanel from './components/controlPanel'

function App() {
  return (
    <div className="App">
      <ControlPanel/>
      <WorldRender/>
    </div>
  );
}

export default App;
