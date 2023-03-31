import React, { useState } from 'react'
import "./App.css";
import { Link } from 'react-router-dom';
const Add = () => {
  const [count, setCount] = useState(0)
  const Addition = () =>{
    setCount(count+1*3);
  };
  const Sub = ()=>{
    setCount(count-1*3);
  }
  return (
    <div className='Add'>
      <button onClick={Addition}>+</button>
      <h1>{count}</h1>
      <button onClick={Sub}>-</button>
      <div>
        <Link to = "/First Api">
           <h1> Go to Api</h1>
        </Link>
        <Link to = "/Post Api">
           <h1> Post Api</h1>
        </Link>
      </div>
    </div>
  )
}

export default Add