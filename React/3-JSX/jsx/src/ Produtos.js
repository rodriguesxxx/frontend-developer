import React from "react";

const listaProdutos = [
    {
        nome: "MacBook Pro M3",
        preco: 30000,
        cores: ["#570a22", "#615e5f", "#171717"],
    },
    {
        nome: "Samsung Book",
        preco: 14000,
        cores: ["#615e5f", "#171717", "#570a22"],
    },
    {
        nome: "IPHONE 11",
        preco: 8500,
        cores: ["#615e5f", "#171717", "#570a22"],
    },
];

const coresStyle = {};
const Produtos = () => {
    return (
        <React.Fragment>
            <h2>Meus Produtos</h2>
            <div>
                {listaProdutos
                    .filter((produto) => produto.preco > 10000)
                    .map((produto) => (
                        <div>
                            <h2>{produto.nome}</h2>
                            <b>preco: R$ {produto.preco}</b>
                            <h4>cores</h4>
                            <ul>
                                {produto.cores.map((cor) => (
                                    <li
                                        style={{
                                            backgroundColor: cor,
                                            color: "white",
                                            listStyle: "none",
                                            margin: "10px",
                                            padding: "10px",
                                        }}
                                        key={cor}>
                                        {cor}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </React.Fragment>
    );
};

export default Produtos;
