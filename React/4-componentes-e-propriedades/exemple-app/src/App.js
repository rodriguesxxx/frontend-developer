import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Titulo = ({ texto, children }) => {
    return (
        <React.Fragment>
            <h2>{texto}</h2>
            <h3>{children}</h3>
        </React.Fragment>
    );
};

const Input = ({ placeholder, ...props }) => {
    return (
        <React.Fragment>
            <input placeholder={placeholder} {...props} />
        </React.Fragment>
    );
};

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Titulo texto='Daniel 11'>Esse é o meu children.</Titulo>
            <p>Esse é o meu app</p>
            <Input placeholder='Eai chorume' type='password' />
            <Footer />
        </React.Fragment>
    );
};

export default App;
