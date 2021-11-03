import React from 'react';
 
 const carCard = (props) => {
    
     return(
     <section>
        <h2>Cars</h2>
        <ul>
        {
            props.cars.map((car) => {
    
                return <div class="aniCard" key={car._id}>
                Make: {car.make}<br/>
                Model: {car.model}<br/>
                Year: {car.make}<br/>
                Color: {car.model}<br/>
                <img src={car.image}/><br/>
                Price: ${car.price}<br/>
                {/* Reserved: {car.reservedForAdoption?'Reserved': 'Able to Reserve'}<br/> */}
                 {/* <button onClick={ ()=>{ handleToggleComplete(car) } }>edit</button>
                <button onClick={ ()=> { handleDelete(car) } }>Delete</button> */}
                </div>
            })
        }
            
        </ul>
    </section>
    
    );
    
 }



export default carCard;