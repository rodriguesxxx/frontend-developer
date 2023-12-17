import React from "react";

const produtos = [
    {
        nome: "Iphone 14",
        preco: 2000,
    },
    {
        nome: "MacBook Air",
        preco: 10000,
    },
];

const Produtos = () => {
    return (
        <div>
            <ul>
                {produtos.map((produto) => (
                    <div>
                        <h1 key={produto}>Nome: {produto.nome}</h1>
                        <h2 key={produto}>Preco: {produto.preco}</h2>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Produtos;
