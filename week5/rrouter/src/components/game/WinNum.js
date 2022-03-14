import React from 'react'
///component where we keep the num of wins 
const WinNum =({oWin,xWin})=> {
return (
<div className='win-num'>
        <div>O:{oWin} </div>
        <div>X:{xWin}</div>
</div>
)
}
export default WinNum