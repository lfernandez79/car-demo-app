import React from "react";

export const CarTool = () => {
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
                <tr>
                    <td>1</td>
                    <td>Volvo</td>
                    <td>V60</td>
                    <td>2018</td>
                    <td>Perl</td>
                    <td>$40,000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Acura</td>
                    <td>TLX</td>
                    <td>2019</td>
                    <td>Blue</td>
                    <td>$43,000</td>
                </tr>
            </tbody>
          </table>
        </>
    )
}