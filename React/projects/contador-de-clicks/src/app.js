
const App = () => {
    const [contador, setContador] = React.useState(0);
    return (
        <div>
            <h1>Contador de Clicks</h1>
            <h2>Clicks: {contador}</h2>
            <button onClick = { () => setContador( contador +  1 ) } >click</button>
            <br /><br /> 
            <button onClick = { () => setContador( 0 ) } >restart</button>
        </div>
    );
}

const divContador = document.getElementById("contador");
ReactDOM.render(<App />, divContador);