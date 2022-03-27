import { useState,useEffect } from "react";
import german from "./data/german.json"
import french from "./data/french.json"
import selectSound from './sounds/select.mp3'
import nextQuestionSound from './sounds/next.mp3'
import restartSound from './sounds/restart.mp3'
import PlayAgain from "./components/PlayAgain";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";

const App =()=> {
const [language,setLanguage] = useState() ////select language(german or french)
///////sound effects:
const selectSoundEffect = new Audio(selectSound)  
const nextBtnSound = new Audio(nextQuestionSound)
const restartBtnSound = new Audio(restartSound)
const [showScore,setShowScore] = useState(false) ////if u set this to true you will get the end screen
const [score,setScore]= useState(0) //// i use this state to save the right answers
const [falseScore,setFalseScore] = useState(0) //// save the incorrect answers
const [disableButton,setDisableButton] = useState(false) ////when u select an answer you can't click the buttons anymore
const [currentQuestion, setCurrentQuestion] = useState(0)//////with this state we set the current question randomly; randomQuesitonArray[this state] we will add 1 to this state whenever we click the answer options
const [buttonColors,setButtonColor] = useState(false) //// this will be set to true once the user selects an answer to show the right and wrong answers
const [menu,setMenu] = useState(true)/// this state represents the main menu when u start the game this will be set to false
const [randomQuesitonArray, setrandomQuesitonArray] = useState(0)///////this state gets us random array of 10 numbers (1-10)for example : [1,4,5,7,8,9,3,0,6,2]
const [progressBar, setProgessBar] = useState(0)////progress bar to let the user know how much of the test is currently completed
///i used useffect because i only want to get new random array of 10 numbers (see randomQuesitonArray above) whenever the user goes back to main menu so they get  random questions in different order
useEffect(() => {
  var arr = [];
  while(arr.length < 10){
      var r = Math.floor(Math.random() * 10);
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  setrandomQuesitonArray(arr)
  return () => {
  }
}, [menu])

console.log("oldu",randomQuesitonArray)
/////// random qusetion 
let randomize = randomQuesitonArray[currentQuestion]
console.log(randomize)
const handleNextClick = () => {
  if (currentQuestion + 1 < language.length) {
  setCurrentQuestion(currentQuestion + 1)
  }else{
  setShowScore(true)
  }
  setDisableButton(false)
  setButtonColor(false)
  nextBtnSound.play()
}
const handleAnswerButtonClick = (isCorrect) => {
  setProgessBar(progressBar + 10)
  if (isCorrect === "true") {
    setScore(score + 1)
  }else if(isCorrect === "false"){
    setFalseScore(falseScore + 1)
  }
  setDisableButton(true)
  setButtonColor(true)
  console.log(isCorrect)
  selectSoundEffect.play()
}
const handlePlayAgain =() => {
  setShowScore(false)
  setScore(0)
  setFalseScore(0)
  setDisableButton(false)
  setCurrentQuestion(0)
  setButtonColor(false)
  restartBtnSound.play()
  setProgessBar(0)
}
const handleGermanQuiz =() =>{
  setLanguage(german)
  setMenu(false)
}
const handleFrenchQuiz = () =>{
  setLanguage(french)
  setMenu(false)
}
const handleMainMenu =()=> {
  setShowScore(false)
  setScore(0)
  setFalseScore(0)
  setDisableButton(false)
  setCurrentQuestion(0)
  setButtonColor(false)
  setMenu(true)
  setProgessBar(0)
  
}
return (
    <div className="App container">
      {/* if you are in the menu section you will see the main menu else you will be either playing the game or at the score screen */}
      {menu ? 
      <MainMenu handleGermanQuiz={handleGermanQuiz} handleFrenchQuiz={handleFrenchQuiz}/>
      :
      <>
           {showScore ? 
     <PlayAgain score={score}  falseScore={falseScore} handlePlayAgain={handlePlayAgain} handleMainMenu={handleMainMenu}/>
       : (
        <Game  handleMainMenu={handleMainMenu} 
        buttonColors={buttonColors} 
        handleNextClick={handleNextClick}
         handleAnswerButtonClick={handleAnswerButtonClick}
         disableButton={disableButton}
         language={language}
         randomize={randomize}
         score={score}
         falseScore={falseScore}
         currentQuestion={currentQuestion}
         progressBar={progressBar}
         /> 
      )} 
      
      </>
      }
    </div>
  );
}
export default App;