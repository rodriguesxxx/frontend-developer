# O que React

## React Element
Todo elemento React é criado com a função createElement. O Babel transforma o elemento JSX(similar ao html) em funções React

## Componentes
Permite que você divida sua interface em pequenos elementos. São criados por funções que retornam elementos React ou classes que estendem React.Component e possuem o metodo render que retorna um elemento React.

## Composição
A principal causa da criação de um componente é para podermos compor a interface com diversos componetes que podem ser reutilizados.

## Eventos
Podemos atribuir eventos diretamente no elemento

## Hooks
Um dos pontos mais fortes do react é a facilidade em sincronizar o estado de determinado elemento.

## Exemplo de codigo


```js

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
```
file: firstapp/src/app.js

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- INCLUI O REACT NA PAGINA:  -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <title>First React APP</title>
</head>
<body>
    <div id="app"></div>
    <script type="text/babel" src="app.js"></script>
</body>
</html>
```
file: firstapp/src/index.html