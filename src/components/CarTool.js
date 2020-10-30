import React from "react";

export const CarTool = () => {

    const cars = [
        {
          id: 1, 
          Make: "Volvo",
          Model: "V60",
          Year: 2018,
          Color: "Perl",
          Price: 41000,
        },
        {
          id: 2,
          Make: "Acura",
          Model: "TLX",
          Year: 2019,
          Color: "Blue",
          Price: 43000,
        },
    ];

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
        </>
    )
}