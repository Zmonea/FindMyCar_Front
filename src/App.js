import React from 'react';
import './views/skeleton.css'
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CarList from './components/carList.js'
import Nav from './components/nav.js'
import Footer from './components/footer.js'
import LoginForm from './components/LoginForm.js'
import NewUserForm from './components/NewUserForm.js'

function App() {

  const [cars, setCars] = useState([]);
  const [newMake, setNewMake] = useState('');
  const [newModel, setNewModel] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newYear, setNewYear] = useState(0);

  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(()=>{
    axios
        .get('https://findmycar-backend.herokuapp.com/cars')
        .then((response)=>{
          setCars(response.data);
        })
},[])

const handleNewMake = (event)=>{

  setNewMake(event.target.value);
}
const handleNewModel = (event) => {
  setNewModel(event.target.value)
}
const handleNewYear = (event) => {
  setNewYear(event.target.value)
}
const handleNewColor = (event) => {
  setNewColor(event.target.value)
}
const handleNewImage = (event) => {
  setNewImage(event.target.value)
}
const handleNewPrice = (event)=>{
  setNewPrice(event.target.value);
}

const handleCreateUser = (userObj) => {
    axios.post('https://findmycar-backend.herokuapp.com/createaccount', userObj).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        setErrorMessage(response.data)
        setToggleError(true)
      }
    })
  }

  const handleLogin = (userObj) => {
      console.log(userObj);
    axios.put('https://findmycar-backend.herokuapp.com/login', userObj).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        console.log(response);
        setToggleError(true)
        setErrorMessage(response.data)
      }
    })
  }

  const handleLogout = () => {
    setCurrentUser({})
    handleToggleLogout()
  }

  const handleToggleForm = () => {
    setToggleError(false)
    if(toggleLogin === true) {
      setToggleLogin(false)
    } else {
      setToggleLogin(true)
    }
  }

  const handleToggleLogout = () => {
    if(toggleLogout) {
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }



const handleNewTodoFormSubmit = (event)=>{
  axios.post(
      'https://findmycar-backend.herokuapp.com/cars',
      {
          make:newMake,
          model: newModel,
          year: newYear,
          color: newColor,
          image: newImage,
          price: newPrice,
      }
  ).then(()=>{
      axios
          .get('https://findmycar-backend.herokuapp.com/cars')
          .then((response)=>{
              setCars(response.data)
          })
      })
}


  return (
    <main>
    <Nav />

    <div className="App">
      <div>
         {toggleLogout ?
           <button onClick={handleLogout} class='logoutBtn'>Logout</button> :
           <div class='appFormDiv'>
             {toggleLogin ?
             <LoginForm handleLogin={handleLogin} toggleError={toggleError} errorMessage={errorMessage}/>
             :
             <NewUserForm handleCreateUser={handleCreateUser} toggleError={toggleError} errorMessage={errorMessage}/>
             }
             <button onClick={handleToggleForm} className='button'>{toggleLogin ? 'Create an account?' : 'Already have an account?'}</button>
            </div>
         }
      </div>
      {currentUser.username ?
         <div class='loggedInDiv'>
           <h1>Welcome {currentUser.username}</h1>
         </div>
         :
         null
       }
         </div>

   <section className="flexColumn">
   <h1 className="textAlignCenter">Find My Car</h1>
     <div className="formImgFlex">
        <section>
            <img className="formImg" src="https://images.unsplash.com/photo-1532268116505-8c59cc37d2e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80"></img>
        </section>
        <section className="newForm">
            <h2 >Setup Car for Sale</h2>
              <form className="formCenter"onSubmit={handleNewTodoFormSubmit}>
                 Make: <input type="text" onChange={handleNewMake}/><br/>
                 Model: <input type="text" onChange={handleNewModel}/><br/>
                 Year:   <input type="number" onChange={handleNewYear}/><br/>
                 Color:  <input type="text" onChange={handleNewColor}/><br/>
                 Image: <input type="text" onChange={handleNewImage}/><br/>
                 Price: <input type="number" onChange={handleNewPrice}/><br/>
                 <input id="submitNew" type="submit" value="Create new Car"/>
              </form>

        </section>
     </div>
   </section>



   <CarList />


   <Footer />

   </main>
  );

}

export default App;
