
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './carCard';


const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios
            .get('https://findmycar-frontend.herokuapp.com/')
            .then((response) => {
                setCars(response.data)
            })
    }, [])

    const handleDelete = (carData) => {
        axios
            .delete(`https://findmycar-frontend.herokuapp.com/${carData._id}`)
            .then(() => {
                axios
                    .get('https://findmycar-frontend.herokuapp.com/')
                    .then((response) => {
                        setCars(response.data)
                    })
            })
    }

    const editCar = (carData) => {
        axios
            .put(
                `https://findmycar-frontend.herokuapp.com/${carData._id}`,
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
                    .get('https://findmycar-frontend.herokuapp.com/')
                    .then((response) => {
                        setCars(response.data)
                    })
            })
    }
    return (
        <section>
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
