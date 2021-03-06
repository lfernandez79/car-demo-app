import React from "react";
import ReactDOM from "react-dom";
import { CarTool } from "./components/CarTool"

const carList = [
    {
        id: 1,
        make: "Volvo",
        model: "V60",
        year: 2018,
        color: "Perl",
        price: 41000,
    },
    {
        id: 2,
        make: "Acura",
        model: "TLX",
        year: 2019,
        color: "Blue",
        price: 43000,
    },
    {
        id: 3,
        make: "Lexus",
        model: "IS350",
        year: 2019,
        color: "Orange",
        price: 43500,
    },
];

ReactDOM.render(
    <CarTool cars={carList} />, document.querySelector("#root"),
);