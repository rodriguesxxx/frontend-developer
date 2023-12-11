## Componentes

É uma boa prática dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo.

## Modelo de App

```js
import React from "react";

const Header = () => {
    return (
        <header>
            <h1>O header do meu App</h1>
        </header>
    );
};

export default Header;
```

**_file:_** Header.js

```js
import React from "react";

const Footer = () => {
    return (
        <footer>
            <span>Esse é o footer do meu app</span>
        </footer>
    );
};

export default Footer;
```

**_file:_** Footer.js

```js
import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <p>Esse é o meu app</p>
            <Footer />
        </React.Fragment>;
    );
};

export default App;
```

**_file:_** App.js

## Propriedades

Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos como propriedades ou props.

**exemplo:**

```js
const Titulo = (props) => {
    return <h1>{props.meuTitulo}</h1>;
};

const App = () => {
    return <Titulo meuTitulo='Seilamano' />;
};

export default App;
```

### Propriedades - children

Se utilizarmos o componente abrindo e fechando o mesmo, o conteudo interno deste será acessado através da propriedade **children**

```js
const Titulo = (props) => {
    return <h1>{props.children}</h1>;
};

const App = () => {
    return <Titulo>Esse é o meu children babby</Titulo>;
};

export default App;
```

### Propriedades - Rest e Spread

Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

```js
const Input = ({ placeholder, ...props }) => {
    return (
        <React.Fragment>
            <input placeholder={placeholder} {...props} />
        </React.Fragment>
    );
};

const App = () => {
    return <Input placeholder='Eai chorume' type='password' />;
};

export default App;
```
