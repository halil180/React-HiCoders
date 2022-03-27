import React from "react";
const MainMenu =({ handleFrenchQuiz, handleGermanQuiz })=> {
  //////full screeen api
    const FullScreen = () =>{
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
      }
  return (
    <>
      <div className="score-container"></div>
      <div className="main-part">
        <div className="question-container">Best quiz game ever</div>
        <div className="btn-container">
          <button onClick={() => handleGermanQuiz() + FullScreen()}>German to English</button>
          <button onClick={() => handleFrenchQuiz() +  FullScreen()}>French to English</button>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
