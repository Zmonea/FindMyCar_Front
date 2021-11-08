
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './carCard';
import SearchBar from './searchBar';


const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/cars')
            .then((response) => {
                setCars(response.data)
            })
    }, [])

    const handleDelete = (carData) => {
        axios
            .delete(`http://localhost:3000/cars/${carData._id}`)
            .then(() => {
                axios
                    .get('http://localhost:3000/cars')
                    .then((response) => {
                        setCars(response.data)
                    })
            })
    }

    const editCar = (carData) => {
        axios
            .put(
                `http://localhost:3000/cars/${carData._id}`,
                {
                    make: carData.make,
                    model: carData.model,
                    year: carData.year,
                    color: carData.color,
                    image: carData.image,
                    price: carData.price,
                }
            )
            .then(() => {
                axios
                    .get('http://localhost:3000/cars')
                    .then((response) => {
                        setCars(response.data)
                    })
            })
    }
    return (
        
           
    
        
        <section>
         <SearchBar cars={cars}/>
            <h2 className="textAlignCenter">Cars List</h2>
            <ul className="flexCarCards">
                {
                    cars.map((car) => {
                        return <CarCard car={car} handleDelete={handleDelete} editCar={editCar} />
                    })
                }

            </ul>
        </section>

    );

}

export default CarList;
