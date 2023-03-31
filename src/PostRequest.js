import React, { useState } from 'react'

const PostRequest = () => {
    
    const [email, setEmail] = useState("");
    const [message, setMassage] = useState("");
    const [name, setName] = useState("");
    const Save = ()=>{
        console.log(email,message,name);
        let data = {email,message,name}
        fetch("http://127.0.0.1:8000/web/api/client/v1/contact-us/",{
            method:"POST",
            headers:{
                'Accept':"application/json",
                'Content-Type':'application/json'
            },body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
console.log(resp);
            })
        })
    }
  return (
    <div>
        <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' placeholder='Email'/><br/> <br/>
        <input type='text' value={message} onChange={(e)=>{setMassage(e.target.value)}} name='message'placeholder='Message'/><br/> <br/>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name='name' placeholder='Name'/><br/> <br/>
        <button type='button' className='Ab' onClick={Save}>save</button>
        
    </div>
  )
}

export default PostRequest