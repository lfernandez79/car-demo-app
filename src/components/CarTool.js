import React, { useState } from "react";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable"
import { CarForm } from "./CarForm"

// Destructuring cars from props then using an alias due cars will conflic with cars line 15 cars 
export const CarTool = ({ cars: initialCars }) => {

    // add the new car to existing array
    const [cars, setCars] = useState(initialCars.concat())
    
    // add a car function
    const addCar = (car) => {
        setCars(cars.concat({
            // we need the original form and generate an id getting the max value id
            ...car,
            id: Math.max(...cars.map(c => c.id)) + 1,
        }));
    };

    return (
        <>
            <ToolHeader headerText="Cars Tool" />
            <CarTable cars={cars} />
            <CarForm buttonText="Add car!" onSubmitCar={addCar} />
        </>
    )
}