import React from 'react'
import "../style/contact.css"
const Contact = ()=> {
  return (
    <div className='contactContainer'>
      <div className="login-box ">
  <h2>Contact us</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="/#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
    </div>
  )
}

export default Contact