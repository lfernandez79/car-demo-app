import React, { useState } from "react";

export const CarTool = (props) => {
    // carFrom: current state data, setCarForm: function to update the current data and re-dender
    const [ carForm, setCarForm ] = useState({
        make: "",
        model: "",
        year: 1900,
        color: "",
        price: 0,
    });
    
    // add the new car to existing array
    const [ cars, setCars ] = useState(props.cars.concat())
    console.log(cars)
    
    // event onChange
    const change = (event) => {
        setCarForm({
            ...carForm,
            // use square bracket to access "input in the form bellow, target = input" 
            [ event.target.name ]: event.target.type === "number" 
            ? Number(event.target.value) : event.target.value,
        });
    }

    // add a car function
    const addCar = () => {
        setCars(cars.concat({
            // we need the original form and generate an id getting the max value id
            ...carForm,
            id: Math.max(...cars.map(c => c.id)) + 1,
        }));
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
                    <td>{car.Make}</td>
                    <td>{car.Model}</td>
                    <td>{car.Year}</td>
                    <td>{car.Color}</td>
                    <td>{car.Price}</td>
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