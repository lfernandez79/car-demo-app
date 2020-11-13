import React, { useState } from "react";

// Destructuring cars from props then using an alias due cars will conflic with cars line 15 cars 
export const CarTool = ({ cars: initialCars }) => {
    // carFrom: current state data, setCarForm: function to update the current data and re-dender
    const [ carForm, setCarForm ] = useState({
        make: "",
        model: "",
        year: 1900,
        color: "",
        price: 0,
    });
    
    // add the new car to existing array
    const [ cars, setCars ] = useState(initialCars.concat())
    console.log(cars)
    
    // event onChan
    //  we are desctructuring target property using {} to its own variable from the event object
    // you can aliesing target as well to use name, type, value
    const change = ({ target }) => {
        setCarForm({
            ...carForm,
            // use square bracket to access "input in the form bellow, target = input" 
            [ target.name ]: target.type === "number" 
            ? Number(target.value) : target.value,
        });
    }

    // add a car function
    const addCar = () => {
        setCars(cars.concat({
            // we need the original form and generate an id getting the max value id
            ...carForm,
            id: Math.max(...cars.map(c => c.id)) + 1,
        }));
        
        setCarForm({
            make: "",
            model: "",
            year: 1900,
            color: "",
            price: 0,
        });
    };

    console.log(carForm)
    return (
        <>
          <header>
            <h1>Car Tool</h1>
          </header>

          <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {cars.map(car => <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>{car.color}</td>
                    <td>{car.price}</td>
                </tr>)}
            </tbody>
          </table>

          <form>
              <div>
                    <label htmlFor="make-input">Make:</label>
                    {/* all inputs are control components */}
                    <input type="text" id="make-input" name="make" value={carForm.make} onChange={change} />
              </div>
              <div>
                    <label htmlFor="model-input">Model:</label>
                    <input type="text" id="model-input" name="model" value={carForm.model} onChange={change} />
              </div>
              <div>
                    <label htmlFor="year-input">Year:</label>
                    <input type="number" id="year-input" name="year" value={carForm.year} onChange={change} />
              </div>
              <div>
                    <label htmlFor="color-input">Color:</label>
                    <input type="text" id="color-input" name="color" value={carForm.color} onChange={change} />
              </div>
              <div>
                    <label htmlFor="price-input">Price:</label>
                    <input type="number" id="price-input" name="price" value={carForm.price} onChange={change} />
              </div>
              <button type="button" onClick={addCar}>Add new car!</button>
          </form>
        </>
    )
}