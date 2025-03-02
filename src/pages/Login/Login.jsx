import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/Logo.png'
import { login, signup } from '../../firebase'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] =  useState("");
  const [email, setemail] =  useState("");
  const [password, setpassword] =  useState("");

  const user_auth = async(event)=>{
    event.preventDefault();
    if(signState==="Sign In"){
      await login(email,password);
    }else{
      await signup(name,email,password);
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='logo'></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your Name'/>:<></>}
          <input value={email} onChange={(e)=>{setemail(e.target.value)}} type='email'  placeholder='Email'></input>
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type='password' placeholder='Password'></input>
          <button onClick={user_auth} type="submit" >{signState}</button>
          <div className="form-help">
          <div className="remember">
            <input type='checkbox'></input>
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}> Sign In now</span></p>}
        </div>
      </div>
    </div>
  )
}
export default Login
