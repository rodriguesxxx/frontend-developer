//COMPONENT
const Compras = () => {
    const [qtdCompras, setQtdCompras] = React.useState(0); //HOOK
    const clicked = () => {
        setQtdCompras(qtdCompras+1);
    }
    return <div>
        <p>Quantidade de compras: {qtdCompras}</p>
         <button onClick={clicked}>Comprar</button> {/* EVENTO DE CLICK */}
    </div>

}

//COMPONENT
const Preco = () => {
    let preco = Math.floor( Math.random() * 100 );
    return <h2>Preco {preco}</h2>
}

//REACT ELEMENT
//COMPONENT PRINCIPAL
const App = () => {
    return <div>
        <h1>Meu app React</h1>
        <Preco /> {/* COMPOSICAO */}  
        <Compras /> {/* COMPOSICAO */}
    </div>;
}


let app = document.getElementById("app");

ReactDOM.render(<App />, app); // CRIE UMA INSTACIA DO COMPONENTE APP