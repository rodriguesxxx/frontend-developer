# React Hooks

## Estado

O estado é uma representação do seu aplicativo naquele momento exato. Por exemplo: **O botão está ativo** ou **O usuario está na pagina de contatos**

**exemplo:**

```js
const App = () => {
    let btnEstaAtivo = false;

    return <button disable={!btnEstaAtivo}>{btnEstaAtivo ? "Botão ativo" : "Botão inativo"}</button>;
};
```

## Hooks

Os Hooks são funçõess especiais do React controlarmos o estado e o ciclo de vida de componentes funcionai.

**exemplo:**

```js
const App = () => {
    const [btnEstaAtivo, setBtnEstaAtivo] = React.useState(false);

    return (
        <button onClick={() => setBtnEstaAtivo(!btnEstaAtivo)} disable={!btnEstaAtivo}>{btnEstaAtivo ? "Botão ativo" : "Botão inativo"}</button>
    );
}
```
