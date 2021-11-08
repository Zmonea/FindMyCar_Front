import React, { useState } from 'react'
import '../App.css';

const NewUserForm = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const triggerCreateUser = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    props.handleCreateUser(userObj)
  }

  return (
    <div>
      <h1>Create an Account</h1>
      <form onSubmit={triggerCreateUser}>
        <input type='text' placeholder='username' onChange={(event)=> {setUsername(event.target.value)}}/>
        <input type='password' placeholder='password' onChange={(event)=> {setPassword(event.target.value)}}/>
        {props.toggleError ?
          <h5>{props.errorMessage}</h5>
          :
          null
        }
        <input type='submit' value='Register'/>
      </form>
    </div>
  );
}

export default NewUserForm;
