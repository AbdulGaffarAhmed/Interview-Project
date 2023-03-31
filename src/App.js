import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";
import Add from './Add';
import Application from './Component';
import PostRequest from './PostRequest';
const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}></Route>
      <Route path='/First Api' element={<Application/>}></Route>
      <Route path='/Post Api' element={<PostRequest/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App