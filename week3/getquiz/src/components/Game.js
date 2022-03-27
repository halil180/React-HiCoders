import React from 'react'
import german from "../data/german.json"
import french from "../data/french.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "../index.css"
const Game = ({handleMainMenu,buttonColors,handleNextClick,handleAnswerButtonClick,disableButton,language,randomize,score,falseScore,currentQuestion,progressBar}) =>{
  ////// choose the screen reader's language
  function handleSound() {
    let msg = new SpeechSynthesisUtterance();
  if (language === german) {
    msg.lang='de-DE'
  }else if (language === french ) {
    msg.lang='fr-FR'
  }
msg.text = language[randomize].question
window.speechSynthesis.speak(msg);
  }
  return (
    <>
      <div className='score-container'>
        <div className="correct-container">True score: {score} </div>
        <div className="false-container">False score:{falseScore}</div>
        <button id="main" onClick={() => handleMainMenu()}>Main Menu</button>
      </div>
      <div className='main-part'>
        <div className="question-container">{language[randomize].question}   <FontAwesomeIcon id='soundIcon'  onClick={() => handleSound()} icon={faVolumeHigh} /> </div>
        <div className='question-num-container'>
        <div id="myProgress">
            <div id="myBar" style={{  width: progressBar+'%' }}></div>
            </div>
          Question:{currentQuestion + 1}/{language.length}
        </div>
        <div className='btn-container'>
          {language[randomize].answers.map((option,index) => <button key={index} style={buttonColors ?  option.isCorrect === "true" ? {backgroundColor : 'green',color:'black'} :  {backgroundColor: 'red'} : {}}  disabled={disableButton}  onClick={(event) => {handleAnswerButtonClick(option.isCorrect) ;handleSound() }}>{option.answer}</button> )}
        </div>
      </div>
      <div className='next-container'>
        <button id="next" onClick={handleNextClick}>Next</button>
      </div>
        </>
  )
}
export default Game