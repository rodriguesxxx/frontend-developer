import React from "react";

const AddCart = () => {
    function click(event) {
        alert("O produto " + event.target.innerText + " Foi adicinado com sucesso");
    }

    return (
        <React.Fragment>
            <h2>Adicionar ao Carrinho</h2>
            <button onClick={click}>MacBook Pro M3</button>
            <button onClick={click}>Samsung Book</button>
        </React.Fragment>
    );
};

export default AddCart;
