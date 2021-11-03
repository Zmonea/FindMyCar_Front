import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [cars, setCars] = useState([]);
  const [newMake, setNewMake] = useState('');
  const [newModel, setNewModel] = useState(false);
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
const handleNewPrice = (event)=>{
  setNewPrice(event.target.value);
}
const handleNewImage = (event) => {
  setNewImage(event.target.value)
}
const handleNewModel = (event) => {
  setNewModel(event.target.value)
}

const handleNewTodoFormSubmit = (event)=>{
  event.preventDefault();

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

const handleDelete = (carData)=>{
  axios
      .delete(`http://localhost:3000/cars/${carData._id}`)
      .then(()=>{
          axios
              .get('http://localhost:3000/cars')
              .then((response)=>{
                setCars(response.data)
              })
      })
}

const handleToggleComplete = (carData)=>{
  axios
      .put(
          `http://localhost:3000/animals/${carData._id}`,
          {
            make:newMake,
            model: newModel,
            year: newYear,
            color: newColor,
            image: newImage,
            price: newPrice,
          }
      )
      .then(()=>{
          axios
              .get('http://localhost:3000/animals')
              .then((response)=>{
                  setCars(response.data)
              })
      })
}

console.log(cars.name)
  return (
    <main class="flexColumn">
            <h1>Animals List</h1>
            <section>
                <h2>Setup Animal for Adoption</h2>
               
                <form onSubmit={handleNewTodoFormSubmit}>
                  Name: <input type="text" onChange={handleNewMake}/><br/>
                  Model: <input type="text" onChange={handleNewModel}/><br/>

                  Image: <input type="text" onChange={handleNewImage}/><br/>
                  Reserved: <input type="text" onChange={handleNewPrice}/><br/>
                    <input type="submit" value="Create new Car"/>
                </form>
                
            </section>
            <section>
    <h2>cars</h2>
    <ul>
    {
      cars.map((car) => {

            return <div class="aniCard" key={car._id}>
            Name: {car.make}<br/>
            Species: {car.model}<br/>
            <img src={car.image}/><br/>
            {/* Reserved: {car.reservedForAdoption?'Reserved': 'Able to Reserve'}<br/> */}
             <button onClick={ ()=>{ handleToggleComplete(car) } }>edit</button>
            <button onClick={ ()=> { handleDelete(car) } }>Delete</button>
            </div>
        })
    }
        
    </ul>
</section>
        </main>
  );
  
}

export default App;
