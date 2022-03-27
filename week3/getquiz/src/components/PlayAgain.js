import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
const PlayAgain = ({score,falseScore,handlePlayAgain,handleMainMenu}) =>{
  //////this section will appear once the user have completed the quiz
  return (
    <>
      <div className='score-container'>
      </div>
      <div className='main-part'>
        <div className="question-container"> 
        <FontAwesomeIcon icon={faFlagCheckered} /> Game over<FontAwesomeIcon icon={faFlagCheckered} /> 
        </div>
        <div className="correct-container">True score: {score} </div>
        <div className="false-container">False score: {falseScore}</div>
        <div className='question-num-container'>
          {/* Question 10/4  {questions.length} */}
        </div>
      </div>
      <div className='next-container'> 
        <button id="next" onClick={() => handlePlayAgain()}>Play Again</button>
        <button id="main"  onClick={() => handleMainMenu()}>Main Menu</button>
      </div> 
      </>
  )
}

export default PlayAgain