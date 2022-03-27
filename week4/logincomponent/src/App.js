import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import LoginPage from './Components/LoginPage';
import LoggedIn from './Components/LoggedIn';
function App() {
  /////states for saving the users data
const [username, setusername] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
return (
  ///// i used react router for making the routing easier
  <BrowserRouter>
  <Routes>
    <Route path='/posts' element={<LoggedIn username={username} email={email} password={password}/>}></Route>
    <Route index element={<LoginPage username={username} email={email} password={password}  setusername={setusername} setemail={setemail} setpassword={setpassword}/ >}/>
  </Routes>
  </BrowserRouter>
);
}
export default App;