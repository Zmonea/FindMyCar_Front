import React, { useState } from 'react'
import '../App.css';

const LoginForm = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const triggerLogin = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    props.handleLogin(userObj)
  }


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={triggerLogin}>
        <input type='text' placeholder='username' onChange={(event)=> {setUsername(event.target.value)}}/>
        <input type='password' placeholder='password' onChange={(event)=> {setPassword(event.target.value)}}/>
        {props.toggleError ?
          <h5 class='errorMsg'>{props.errorMessage}</h5>
          :
          null
        }
        <input type='submit' value='Login' className='button'/>
      </form>
    </div>
  );
}

export default LoginForm;
