import React,{useState} from 'react'
import "../style/home.css"
import Square from './game/Square'
import WinNum from './game/WinNum'
import restartSoundEffect from '../components/sound/restartSound.mp3'
import selectSound from '../components/sound/selectSound.mp3'

const Home =()  =>{
    const audio = new Audio(selectSound)
const restartSound = new Audio(restartSoundEffect)
    const [square,setSquare] = useState(Array(9).fill(null))
    const [isX,setX] = useState(true)
    const[xWin,setWinX] = useState(0)
    const[oWin,setWinO] = useState(0)
function handleClick(i) {
    if (calculateWinner(square) || square[i]) {
        return
    }
    square[i] = isX ? 'X' : 'O'
    setSquare(square)
    setX(!isX)
    audio.play()
}
function calculateWinner(pSquare) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let index = 0; index < winningPatterns.length; index++) {
        const [a,b,c] = winningPatterns[index]
        if (pSquare[a] && pSquare[a] === pSquare[b] && pSquare[a] === pSquare[c]) {
            return  pSquare[a]
        }        
    }
    return null
}
const winner = calculateWinner(square)
let status 
if (winner) {
    status =  <h1> Winner : {winner} </h1>
}else if(!square.includes(null)){
    status = <h1>Draw</h1>
}else{
    status = <h1> Next : {isX ? 'X' :'O'}</h1>
}
function handleRestart() {
    setSquare(Array(9).fill(null))
    setX(true)
    if (winner === 'X') {
        setWinX(xWin + 1)
    }else if(winner === 'O'){
        setWinO(oWin + 1)
    }
    restartSound.play()
}
return (
    <div className='table'>
        <WinNum xWin={xWin} oWin={oWin}/>
        <div className='game-container'>
    <Square value={square[0]} onClick={() => handleClick(0)}/>
    <Square value={square[1]} onClick={() => handleClick(1)}/>
    <Square value={square[2]} onClick={() => handleClick(2)}/>
    <Square value={square[3]} onClick={() => handleClick(3)}/>
    <Square value={square[4]} onClick={() => handleClick(4)}/>
    <Square value={square[5]} onClick={() => handleClick(5)}/>
    <Square value={square[6]} onClick={() => handleClick(6)}/>
    <Square value={square[7]} onClick={() => handleClick(7)}/>
    <Square value={square[8]} onClick={() => handleClick(8)}/>
        </div>
        <div className='stat'>{status}</div>    
        {(winner || !square.includes(null))  && <button className='restart' onClick={handleRestart}> Restart Game</button>}
    </div>
)
}
export default Home