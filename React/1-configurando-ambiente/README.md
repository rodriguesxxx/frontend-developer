## Ferramentas Necessarias
- #### NPM
    Gerenciador de pacotes do JS

- #### WebPack
    - Agrupa (bundle) o código do seu aplicativo
    - Com ele podemos definir os componentes em diferentes arquivos.
    - Facilita o import de codigo externo via NPM
- #### Babel
    - Transforma JSX **return <div></div>** em funções de React **React.createElement()**
    - Transforma JavaScript novo **const** em JavaScript antigo **var**

## Configuração Mínima

```bash
npm init -y
```
execute dentro da pasta do seu projeto

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
```
Adiciona o webpack ao seu projeto


```bash
npm install react react-dom
```
Adiciona o react ao projeto

```bash
touch webpack.config.js || touch index.html | mkdir src | touch src/index.js
```

Cria os arquivos essencias

### Configurando arquivos

```js
module.exports = {
    devServer: {
        static: './',
    } 
}
```
webpack.config.js

```json
"scripts": {
    "start": "webpack serve --mode development --open --hot",
    "build": "webpack --mode production" 

},
```
package.json

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01-Config ambiente</title>
</head>
<body>
    <div id="root"></div>
    <script src="main.js"></script>
</body>
</html>

```
index.html

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello';

const divRoot = document.getElementById('root');

ReactDOM.render(Hello(), divRoot);
```
src/index.js

```js
import React from 'react'
const Hello = () => {
    return React.createElement('h1', {},'Hello world');
}

export default Hello;
```
src/Hello.js //sem o babel

### Babel Minimo

```bash
npm install @babel/core @babel/preset-react babel-loader --save-dev
```

```js
module.exports = {
    devServer: {
        static: './',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}
```
webpack.config.js //add babel configs

### Loaders (CSS)
Para adicionarmos outras funcionalidades, como importação de css/imagens/etc. precisamos adicionar o loaders especificos para cada situacao.

```bash
npm install style-loader css-loader --save-dev
```

Adicione o seguinte objeto dentro de rules
```
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

```
webpack.config.js