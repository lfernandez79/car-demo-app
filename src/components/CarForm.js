import React, { useState } from "react";
import PropTypes from "prop-types";

export const CarForm = ({ onSubmitCar, buttonText }) => {

    // carFrom: current/initial state data, setCarForm: function to update the current data and re-dender
    const [carForm, setCarForm] = useState({
        make: "",
        model: "",
        year: 1900,
        color: "",
        price: 0,
    });

    // event onChan
    //  we are desctructuring target property using {} to its own variable from the event object
    // you can aliesing target as well to use name, type, value
    const change = ({ target }) => {
        setCarForm({
            ...carForm,
            // use square bracket to access "input in the form bellow, target = input" 
            [target.name]: target.type === "number"
                ? Number(target.value) : target.value,
        });
    };

    const submitCar = () => {
        onSubmitCar({ ...carForm });
        setCarForm({
            make: "",
            model: "",
            year: 1900,
            color: "",
            price: 0,
        });
    }
    return (
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
            <button type="button" onClick={submitCar}>{buttonText}</button>
        </form>
    )
};

CarForm.defaultProps = {
    buttonText: "Submit Car",
}

CarForm.propTypes = {
    buttonText: PropTypes.string,
    onSubmitCar: PropTypes.func.isRequired,
}