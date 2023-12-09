import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Todo from "./Todo";
import Produtos from "./ Produtos";
import AddCart from "./AddCart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <Todo />
        <Produtos />
        <AddCart />
    </React.StrictMode>
);
