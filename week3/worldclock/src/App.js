import React,{useState,useEffect} from 'react'
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer';
import Main from './components/Main';
/* 
Analyse (analizlerimi bundan sonra mumkun oldugunca ingilizce  yapacagim ki ileride baskalarina gosterdigimde programda ne yaptigimi anlasin)
1.create a digital earth hour
2.it will show the hours for 3 Cities i will chose from around the world 
3.when the city is selected it will show the time of that city
use react states(setInterval ? )
 */
const App = () =>{
  ///use states : time,setTime is used for getting the current time
const [time,setTime] = useState()
////when you change your zone the current time will adapt to your zone
const [zone,setZone] = useState()
////// regions we have available:
const region = {
  zurich :'Europe/Zurich',
  us:'America/Los_Angeles',
  seoul:'Asia/Seoul'
}
////i used the useffect beacuse i wanted to re-render setinterval whenever the user changes the region(aksi halde slackden paylastigim 
////gibi iki zaman bir arada goruntuleniyor) 
////the hardest part was finding out that i needed to use useEffect to rerender Setinterval whenever the user selects something else
useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US',{timeZone:zone}))
    }, 1000);
    return () => clearInterval(interval);
  }, [zone]);
return (
  //////// my app is made of three parts; Nav, Main, Footer
    <>
        <Nav/>
        <Main setZone={setZone} time={time} region={region}/>
        <Footer/>
    </>
  )
}
export default App