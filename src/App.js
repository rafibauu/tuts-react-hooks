import React, { useState } from 'react';
import ClassApp from './ClassApp';
import FunctionalApp from './FunctionalApp';
import './App.css';

function App() {
  const [level, setLevel] = useState(1)
  return (
    <div className="App App-header">
      <button onClick={() => setLevel(level + 1)}>Add Level</button>
      <FunctionalApp level={level} />
      <ClassApp />
    </div>
  )
}

export default App;
