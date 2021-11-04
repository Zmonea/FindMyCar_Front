
import React, {useState} from 'react';
import axios from 'axios';





 const CarCard = (props) => {
    

    const [cars, setCars] = useState([]);
  const [newMake, setNewMake] = useState('');
  const [newModel, setNewModel] = useState(false);
  const [newImage, setNewImage] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newYear, setNewYear] = useState(0);

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
            `http://localhost:3000/cars/${carData._id}`,
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
                .get('http://localhost:3000/cars')
                .then((response)=>{
                    setCars(response.data)
                })
        })
  }
     return(
     <section>
        <h2>Cars</h2>
        <ul>
        {
            props.cars.map((car) => {
    
                return <div class="aniCard" key={car._id}>
                <img class="carImg" src={car.image}/><br/>
                Make: {car.make}<br/>
                Model: {car.model}<br/>
                Year: {car.make}<br/>
                Color: {car.model}<br/>
              
                Price: ${car.price}<br/>
                <div class="flexWrapperRow">
                <button id="edit" onClick={ ()=>{ handleToggleComplete(car) } }>edit</button>
                <button id="delete" onClick={ ()=> { handleDelete(car) } }>Delete</button>
                </div>
                 
                </div>
            })
        }
            
        </ul>
    </section>
    
    );
    
 }



export default CarCard;