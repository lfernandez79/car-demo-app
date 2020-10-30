import React from "react";

export const CarTool = (props) => {

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
        </>
    )
}