import React, { useState } from 'react';
import Candy from "./candy"
import './App.css';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`App-header ${isMorning ? 'App' : ''}`}>
      <h3>Have A Good {isMorning ? 'Morning' : 'Night'}</h3>
      <Candy counter = {count}/>
      <button onClick = {() => setCount(++count)}>Add More</button>
      <br/>
      <button onClick={()=> setMorning(!isMorning)}>Dark Mode</button>
    </div>
  );
}

export default App;
