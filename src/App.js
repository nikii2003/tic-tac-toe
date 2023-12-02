import React, { useState } from 'react';
import "./App.css";
import bluediaImage from "./icons8-diamond-48-removebg-preview.png"
import reddiaImage from "./icons8-diamond-64-removebg-preview.png"


function App() {

  const [player, setPlayer]=useState(1);
  const [board,setBoard]=useState({
    1 : "💎",
    2 : "❤",
    3 : "💎",
    4 : "❤",
    5 : "💎",
    6 : "❤",
    7 : "💎",
    8 : "❤",
    9 : "❤",
  })

  return (
    <div>
      <h1 className='tic-tac-toe-title'>Tic Tac Toe</h1>
      <div className='player-title'>
        <span>
        Player <img src={bluediaImage} className='diamond-image'/>
        </span>
        <span>
        Player <img src={reddiaImage} className='diamond-image'/>
        </span>
      </div>
<div className='container'>
     <div className='row'>
      <div className='box'>{board [1]}</div>
      <div className='box'>{board [2]}</div>
      <div className='box'>{board [3]}</div>
     </div>

     <div className='row'>
      <div className='box'>{board [4]}</div>
      <div className='box'>{board [5]}</div>
      <div className='box'>{board [6]}</div>
     </div>
     
     <div className='row'>
      <div className='box'>{board [7]}</div>
      <div className='box'>{board [8]}</div>
      <div className='box'>{board [9]}</div>
     </div> 

    </div>
    </div>
  )
}

export default App
