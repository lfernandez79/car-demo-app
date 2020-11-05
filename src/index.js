import React from "react";
import ReactDOM from "react-dom";
import { CarTool } from "./components/CarTool"

const carList = [
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

ReactDOM.render(
    <CarTool cars={carList} />, document.querySelector("#root"),
);