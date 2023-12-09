import React from "react";

const luana = {
    cliente: "Luana",
    idade: 22,
    compras: [
        { produto: "Notebook", preco: 10000 },
        { produto: "mouse", preco: 400 },
    ],
    ativa: true,
};

const mario = {
    cliente: "Mario",
    idade: 29,
    compras: [{ produto: "celular", preco: 1000 }],
    ativa: false,
};

const App = () => {
    const dados = mario;
    const precos = dados.compras.map((compra) => compra.preco);
    let precoTotal = precos.reduce((x, y) => x + y);

    return (
        <React.Fragment>
            <h1>Dados do cliente</h1>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <span>Conta:</span>{" "}
            <span style={{ color: dados.ativa ? "green" : "red" }}>
                {dados.ativa ? "Ativa" : "Inativa"}
            </span>
            <p>Total gasto: {precoTotal}</p>
            {precoTotal > 10000 && <h2 style={{ color: "red" }}>Gastou demais amigao</h2>}
        </React.Fragment>
    );
};
export default App;
