## NPX CREATE-REACT-APP

O facebook(criador do react) criou um configuracao basica para agilizar o processo de configuracao, com apenas um comando voce tem todas as funcionalidades de react em seu projeto.


```
npx create-react-app <nome_do_app>
```

**obs:** O npx é um comando do npm que executa diretamente um pacote online.

## Analisando o codigo

Dentro da pasta **src** temos o index.js, e nele temos alguns imports desnecessarios(no momento), por enquanto iremos utilizar apenas o App.js.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
Pode se observar algumas funcionalidades novas.

- #### createRoot()
    O react cria uma raiz para o nó do DOM que assumira o gerenciamento do DOM dentro dele. Depois de criar essa raiz, basta chamar o render.
    
- #### StrictMode
    Essa tag roda o react em modo restrito, ele funciona como uma interface, onde é estabelido regras para que nós a seguimos.


```js
import React from "react";

const App = () => {
    return <h1>Hello world</h1>
}

export default App;
```

App.js

## Configurações adicionais

### Formatando HTML

Linkagem para css

```html
<link rel="stylesheet" href="%PUBLIC_URL%/style.css">
```
public/index.html


Código css

```css
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 1.5rem;
}
```
public/style.css

