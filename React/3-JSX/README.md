## O que é o JSX

JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos com XML que são convertidos em funcoes React

## Atributos

-   #### <React.Fragment> </React.Fragment>

    Para retornar mais de um elemento

    exemplo:

    ```js
    const App = () => {
        return (
            <React.Fragment>
                <h1>Hello world</h1>
                <h2>Hello world 2</h2>
            </React.Fragment>
        );
    };

    export default App;
    ```

## JSX ARRAYS

Quando se passa um array para o JSX ele ira percorrer e listar todos os elementos de forma automatica

**exemplo:**

```js
const Todo = () => {
    const tasks = ["Lavar carro", "Estudar react", "Almocar"];

    return <p>{tasks}</p>;
};

export default Todo;
```

**Transformando em lista:**

```js
const Todo = () => {
    const tasks = ["Lavar carro", "Estudar react", "Almocar"];

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task}>{task}</li>
            ))}
        </ul>
    );
};

export default Todo;
```

## Eventos

É possivel atribuir eventos diretamente ao elementos JSX como um atributo. Os eventos são sintáticos, ou seja são criados pelo próprio REACT.

**exemplo: **

```js
const AddCart = () => {
    function click(event) {
        alert("O produto " + event.target.innerText + " Foi adicinado com sucesso");
    }

    return (
        <React.Fragment>
            <button onClick={click}>MacBook Pro M3</button>
        </React.Fragment>
    );
};

export default AddCart;
```

## window/document

Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JS normalmente.
