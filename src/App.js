import React, { useEffect, useState } from 'react';
import "./App.css";
import bluediaImage from "./icons8-diamond-48-removebg-preview.png"
import reddiaImage from "./icons8-diamond-64-removebg-preview.png"


function App() {

  const [player, setPlayer]=useState(1);
  const [board,setBoard]=useState({
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : "",
    6 : "",
    7 : "",
    8 : "",
    9 : "",
  })
  const [winner, setWinner]=useState(null)

const checkWinner = (player) =>{
const symbol = player ===1 ? "💎" : "❤"

if(board[1]=== symbol && board [2] === symbol && board[3] === symbol){
  setWinner(player)
}
else if (board [4]===symbol && board [5]===symbol && board[6] === symbol) {
  setWinner(player)
}
else if (board[7] === symbol && board [8] ===symbol && board[9]===symbol){
  setWinner(player)
}
else if (board[1] === symbol && board [4] ===symbol && board[7]===symbol){
  setWinner(player)
}
else if (board[2] === symbol && board [5] ===symbol && board[8]===symbol){
  setWinner(player)
}
else if (board[3] === symbol && board [6] ===symbol && board[9]===symbol){
  setWinner(player)
}
else if (board[1] === symbol && board [5] ===symbol && board[9]===symbol){
  setWinner(player)
}
else if (board[3] === symbol && board [5] ===symbol && board[7]===symbol){
  setWinner(player)
}
setPlayer(player===1 ? 2 : 1)
}  

useEffect(()=>{
  checkWinner(player)
},[board])

const reset = ()=>{
  setPlayer(1)
  setBoard({
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : "",
    6 : "",
    7 : "",
    8 : "",
    9 : ""
  });
setWinner(null)
}

const play = (boxNo) =>{
  if(board[boxNo]!== "" || winner !==null){
    return;
  }
if(player === 1){
  setBoard({...board,[boxNo] : "💎"})
}
else{
  setBoard({...board,[boxNo] : "❤"})
}

}

  return (
    <div>
      <h1 className='tic-tac-toe-title'>Tic Tac Toe</h1>
      <div className='player-title'>
        <span>
        Player <img src={bluediaImage} className='diamond-image'/>
        </span>
        <span className='player-current'>
          current player :{player === 1 ? "💎" : "❤" }
      </span>
        <span>
        Player <img src={reddiaImage} className='diamond-image'/>
        </span>
      </div>
    
   
        {
          winner ? (<h1 className='winner-container'>winner is {winner === 1 ? "💎" : "❤"}</h1> ) : null
        } 
       
   
    <div className='container'>
     <div className='row'>
      <div className='box' onClick={()=>{play(1)}}>{board [1]}</div>
      <div className='box' onClick={()=>{play(2)}}>{board [2]}</div>
      <div className='box' onClick={()=>{play(3)}}>{board [3]}</div>
     </div>

     <div className='row'>
      <div className='box' onClick={()=>{play(4)}}>{board [4]}</div>
      <div className='box' onClick={()=>{play(5)}}>{board [5]}</div>
      <div className='box'onClick={()=>{play(6)}}>{board [6]}</div>
     </div>
     
     <div className='row'>
      <div className='box' onClick={()=>{play(7)}}>{board [7]}</div>
      <div className='box' onClick={()=>{play(8)}}>{board [8]}</div>
      <div className='box' onClick={()=>{play(9)}}>{board [9]}</div>
     </div> 

    </div>
    <button type='button' className='reset-btn' onClick={reset}>Reset</button>
    </div>
    
  )
}

export default App
