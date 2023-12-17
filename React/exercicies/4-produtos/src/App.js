import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Produtos from "./components/Produtos";

const App = () => {
    const { pathname } = window.location;
    if (pathname === "/produtos") {
        return (
            <React.Fragment>
                <Header />
                <Produtos />
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Header />
            <Home />
        </React.Fragment>
    );
};

export default App;
