
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CarCard = (props) => {
    const {car, handleDelete, editCar} = props;
    const [newCar, setNewCar] = useState(car);
    const [showForm, setShowForm] = useState(true);
    const [showBuy, setShowBuy] = useState(true);

    const handleUpdateCar = (event, field) => {
        const updatedCar = newCar;
        const value = event.target.value;
        if(value != undefined || null || '') {
            updatedCar[field] = value;
            setNewCar(updatedCar);
        } 
    }

    const handleResetCar = () => {
        setNewCar(car);
    }

    return (
        <div className="aniCard" key={car._id}>
        <img className="carImg" src={car.image} /><br />
        <div className="cardText">
            Make: {car.make}<br />
            Model: {car.model}<br />
            Year: {car.year}<br />
            Color: {car.color}<br />
            Price: ${car.price}<br />
        </div>
        <section>
            {showForm ? (<div className="hide"> Not showing</div>
            ) : (
                <div className="editCardOverlay">
                    <h2>Edit Car</h2>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        editCar(newCar)
                        setShowForm(true);
                    }}>
                        Make: <input type="text" onChange= {(event) => handleUpdateCar(event, 'make')} placeholder={car.make} /><br />
                        Model: <input type="text" onChange={(event) => handleUpdateCar(event, 'model')} placeholder={car.model} /><br />
                        Year: <input type="text" onChange= {(event) => handleUpdateCar(event, 'year')} placeholder={car.year} /><br />
                        Color: <input type="text" onChange={(event) => handleUpdateCar(event, 'color')} placeholder={car.color} /><br />
                        Image: <input type="text" onChange={(event) => handleUpdateCar(event, 'image')} placeholder={car.image} /><br />
                        Price: <input type="text" onChange={(event) => handleUpdateCar(event, 'price')} placeholder={car.price} /><br />
                        <input id="edit" type="submit" value="Submit Edits" /><br />
                        <button id="editBack" onClick={() => {
                            handleResetCar();
                            showForm === false ? setShowForm(true) : setShowForm(false)
                        }}>Back</button>
                    </form>
                </div>

            )}
            <div className="flexWrapperRowButton">
                {showBuy ? (<form onSubmit={(event) => {
                    //palceholder for Buy Function
                }}>
                    <input id="buy" type="submit" value="Buy" onClick={() => {
                        showBuy === false ? setShowBuy(true) : setShowBuy(false)
                    }} />
                </form>) : (<div>Out of Stock</div>)

                }
                {/* <form onSubmit={(event) => {
                           //palceholder for Buy Function
                        }}>
                              <input id="buy" type="submit" value="Buy" />
                        </form> */}


                {showForm ? (<button key={car._id} id="edit" onClick={() => {
                    showForm === false ? setShowForm(true) : setShowForm(false)
                }}>Edit</button>) : (<div></div>)

                }
                <form onSubmit={(event) => {
                    event.preventDefault();
                    handleDelete(car)
                }}>
                    <input id="delete" type="submit" value="Delete" />
                </form>
            </div>

        </section>

    </div>

    );
}



export default CarCard;
