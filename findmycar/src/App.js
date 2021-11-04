import React from 'react';
import './views/skeleton.css'
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CarCard from './components/carCard.js'


function App() {

  const [cars, setCars] = useState([]);
  const [newMake, setNewMake] = useState('');
  const [newModel, setNewModel] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newYear, setNewYear] = useState(0);

  useEffect(()=>{
    axios
        .get('http://localhost:3000/cars')
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





const handleNewTodoFormSubmit = (event)=>{


  axios.post(
      'http://localhost:3000/cars',
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
          .get('http://localhost:3000/cars')
          .then((response)=>{
              setCars(response.data)
          })
      })
}






  return (
    <main class="flexColumn">
            <h1>Car List</h1>
            <section>
                <h2>Setup Car for Sale</h2>

                <form onSubmit={handleNewTodoFormSubmit}>
                  Make: <input type="text" onChange={handleNewMake}/><br/>
                  Model: <input type="text" onChange={handleNewModel}/><br/>
                  Year:   <input type="number" onChange={handleNewYear}/><br/>
                  Color:  <input type="text" onChange={handleNewColor}/><br/>
                  Image: <input type="text" onChange={handleNewImage}/><br/>
                  Price: <input type="number" onChange={handleNewPrice}/><br/>
                    <input type="submit" value="Create new Car"/>
                </form>

            </section>


    <CarCard cars={cars}/>





    </main>
  );

}

export default App;
