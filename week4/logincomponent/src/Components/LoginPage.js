import {Form,Button} from "react-bootstrap"
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import AlertDismissibleExample from "./Alert";
function LoginPage(props) {
  ////// if you can log in successfully  you will be directed to posts 
const [loginInfo, setloginInfo] = useState(false)
const [to] = useState('/posts')
/////this will show alert in case the user enters something wrong or forgets to fill in the input sections
const [show, setShow] = useState(false);
//////password and password repeat must match
const [passwordRepeat, setpasswordRepeat] = useState('')  
//////check if the user fills in every input section
  function handleSubmit(e) {
    if ((props.username === '' || props.email === ''  || props.password === '' ) || (passwordRepeat !== props.password)) {
      setShow(true)
    }else{
      setloginInfo(true)
    }
  }
  return (
    <>
<div className="container">
  <div className="row mt-5">
    <div className="col-sm-12 col-lg-6">
    <img src="https://media.giphy.com/media/1APdUDqpsV6wJSshXQ/giphy.gif" alt="nokia3310" />
    </div>
    <div className="col-sm-12 col-lg-5">
    <Form className='rounded bg-custom p-4'>
      <Form.Label className='display-5'>Sign Up </Form.Label>
      <AlertDismissibleExample show={show}  setShow={setShow}/>
      <Form.Group className="mb-5" >
      <Form.Control type="text" placeholder="username" value={props.username} onChange={(e) => props.setusername(e.target.value)}required />
      </Form.Group>
      <Form.Group className="mb-5">
      <Form.Control type="email" placeholder="Email"  value={props.email} onChange={(e) => props.setemail(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-5" >
      <Form.Control type="password" placeholder="password" value={props.password} onChange={(e) => props.setpassword(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-5" controlId="">
      <Form.Control type="password" placeholder="password repeat" value={passwordRepeat} onChange={(e) => setpasswordRepeat(e.target.value)} />
      </Form.Group>
      <Link to={loginInfo && to}> 
          <Button type='submit' variant="outline-primary " onClick={handleSubmit}>click</Button>
      </Link>
      </Form>
    </div>
  </div>
</div>    
    </>
  )
}
export default LoginPage