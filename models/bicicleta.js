class Bicicleta {
    constructor (id, modelo, color){
        this.id = id;
        this.modelo = modelo;
        this.color = color;
    }
}

let b1 = new Bicicleta(123, 'Hyuga', 'Azul')
let b2 = new Bicicleta(512, 'Uchiha', 'Rojo')
let b3 = new Bicicleta(443, 'Senju', 'Cafe')

let bicicletas = [b1,b2,b3];

module.exports = bicicletas;