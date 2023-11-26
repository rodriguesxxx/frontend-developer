
//Objeto JS
var quadrado = {
    lado: 0,
    getArea: function () {
        return this.lado * this.lado;
    }
}

//update ES6

var quadrado = {
    lado: 0,
    getArea() {
        return this.lado * this.lado;
    }
}