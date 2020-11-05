import React, { useState } from "react";

export const CarTool = (props) => {
    // carFrom current state data, setCarForm: function to update the current data and re-dender
    const [ carForm, setCarForm ] = useState({
        make: "Volvo",
        model: "",
        year: 1900,
        color: "",
        price: 0,
    });

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
                {props.cars.map(car => <tr key={car.id}>
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
                    <input type="text" id="make-input" value={carForm.make} />
              </div>
              <div>
                    <label htmlFor="model-input">Model:</label>
                    <input type="text" id="model-input" value={carForm.model}/>
              </div>
              <div>
                    <label htmlFor="year-input">Year:</label>
                    <input type="text" id="year-input" value={carForm.year}/>
              </div>
              <div>
                    <label htmlFor="color-input">Color:</label>
                    <input type="text" id="color-input" value={carForm.color}/>
              </div>
              <div>
                    <label htmlFor="price-input">Price:</label>
                    <input type="text" id="price-input" value={carForm.price}/>
              </div>
          </form>
        </>
    )
}