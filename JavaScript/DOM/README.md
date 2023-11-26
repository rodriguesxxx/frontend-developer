## O que é DOM?

O Document Object Model(DOM), é a arvore da sua pagina html, a estrutura de tags(seus elementos).

## Selecionando elementos com JS

- ### document (objeto)
    Responsavel por todo documento da pagina html

- #### document.getElementsByTagName("TagName")

    Pega todos os elementos pelo nome da tag.

    exemplo:
    ```js
        document.getElementsByTagName("h1") //retorna um array com todos os elementos da pagina com a tag h1       
    ```

- #### document.getElementById("id")

    Pega um elemento especifico pelo id

    exemplo:
    ```js
        document.getElementsById("titulo01") //retorna um objeto do elemento       
    ```
- #### document.getElementsClassName("classname")

    Pega todos os elementos daquela classe

    exemplo:
    ```js
        document.getElementsClassName("titulo") //retorna um array com todos os elementos.      
    ```
- #### document.queySelector("tag|id|class")

    Pega primeiro elemento daquela tag|id|class

    exemplo:
    ```js
        document.querySelector("h1") //retorna um objeto do elemento.      
    ```
- #### document.queySelectorAll("tag|id|class")

    Pega primeiro os elementos daquela tag|id|class

    exemplo:
    ```js
        document.querySelectorAll("h1") //retorna um array com todos os elementos.      
    ```

## Eventos e Manipulação de DOM

Evento é quando algo acontece.

- ### Eventos de clique
    - #### onclick()
        
        O onclick é uma tag html, que chama um codigo js assim que o botao é clicado(lá ele)

        exemplo:
        
        ```html
        <button id="meu-botao" type="button" onclick="clicked()">Meu Botão</button>    
        ```
    - #### addEventListener()
        Faz o mesmo só que de uma forma diferente.
        exemplo:
        html
        ```html
        <button type="button">Meu Botão</button>    
        ```
        JavaScrip
        ```js
        let botao = document.getElementById("meu-botao");
        botao.addEventListener( "click", clicked );
        ```