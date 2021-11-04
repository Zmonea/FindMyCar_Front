
import React, {useState, useEffect} from 'react';
import axios from 'axios';


 const CarCard = (props) => {
    const [cars, setCars] = useState([]);
  const [newMake, setNewMake] = useState('');
  const [newModel, setNewModel] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newYear, setNewYear] = useState(0);
  const [showForm, setShowForm] = useState(true);


  const handleNewMakeChange = (event) => {
      setNewMake(event.target.value)
   }

   const handleNewModelChange = (event) => {
      setNewModel(event.target.value)
   }

   const handleNewYearChange = (event) => {
      setNewYear(event.target.value)
   }

   const handleNewColorChange = (event) => {
      setNewColor(event.target.value)
   }

   const handleNewImageChange = (event) => {
      setNewImage(event.target.value)
   }

   const handleNewPriceChange = (event) => {
      setNewPrice(event.target.value)
   }

   useEffect(() => {
      axios
         .get('http://localhost:3000/cars')
         .then((response) => {
            setCars(response.data)
         })
   },[])

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

  const editCar = (carData)=>{
    axios
        .put(
            `http://localhost:3000/cars/${carData._id}`,
            {
              make:newMake || carData.make,
              model: newModel || carData.model,
              year: newYear || carData.year,
              color: newColor || carData.color,
              image: newImage || carData.image,
              price: newPrice || carData.price,
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
        <ul className="flexCarCards">
        {
            props.cars.map((car) => {

                return <div className="aniCard" key={car._id}>
                <img className="carImg" src={car.image}/><br/>
                Make: {car.make}<br/>
                Model: {car.model}<br/>
                Year: {car.year}<br/>
                Color: {car.color}<br/>
                Price: ${car.price}<br/>
                <section>
                     {showForm ? (<div className="hide"> Not showing</div>
                         ):(
                            <div className="editCardOverlay">  
                                <h2>Edit Car</h2>
                                <form  onSubmit={(event) => {
                                    editCar(car)
                                }}>
                                    Make: <input type="text" onChange={handleNewMakeChange} /><br/>
                                    Model: <input type="text" onChange={handleNewModelChange} /><br/>
                                    Year: <input type="text" onChange={handleNewYearChange} /><br/>
                                    Color: <input type="text" onChange={handleNewColorChange} /><br/>
                                    Image: <input type="text" onChange={handleNewImageChange} /><br/>
                                    Price: <input type="text" onChange={handleNewPriceChange} /><br/>
                                    <input id="edit" type="submit" value="Submit Edits" />
                                </form> 
                            </div>

)}
                     
                    

                        <form onSubmit={(event) => {
                           handleDelete(car)
                        }}>
                              <input id="delete" type="submit" value="Delete" />
                        </form>
                        {showForm ? (<button id="edit" onClick={ ()=>{
                            showForm === false ? setShowForm(true): setShowForm(false)
                        } }>Edit</button>):(<button id="editBack" onClick={ ()=>{
                            showForm === false ? setShowForm(true): setShowForm(false)
                        } }>Back</button>)

                        }

                  </section>

                </div>
                
            })
        }

        </ul>
    </section>

    );

 }



export default CarCard;
