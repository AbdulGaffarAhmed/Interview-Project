import React, { useState } from 'react'

const Application = () => {
    const [data, setData] = useState([]);
    fetch('https://gorest.co.in/public/v1/todos')
    .then((response)=>response.json())
    .then((json)=>{
    setData(json);});
    
    return (
      <div>
        {/* <button className="Ab" onClick={api}>click</button> */}
     {JSON.stringify(data)}
      </div>
    )}
  
    
  export default Application