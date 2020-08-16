let Bicicleta = require('../../models/bicicleta');
const mongoose = require('mongoose');

beforeAll( (done) => {
    mongoose.connect('mongodb://localhost/red_bicicletas', {useNewUrlParser: true, useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB ERROR'));
    db.on('open', () => {
        console.log('MongoDB OK'); 
        done();
    });
});

afterEach ( (done) => {
    Bicicleta.deleteMany({}, (err, success) => {
        if(err) console.log(err);
        done();
    })
});

describe('Bicicleta.createInstance', () => {
    it('Crear una instancia de bicicleta', () => {
        let nuevaInstancia = Bicicleta.createInstance(1, 'modelo', 'color', [12, 23]);

        expect(nuevaInstancia.code).toBe(1);
        expect(nuevaInstancia.modelo).toBe('modelo');
        expect(nuevaInstancia.color).toBe('color');
        expect(nuevaInstancia.ubicacion[0]).toBe(12);
        expect(nuevaInstancia.ubicacion[1]).toBe(23);
    })
})

describe('Bicicleta.allBicis', () => {
    it('Verificar que venga vacia', async () => {
        let bicis = await Bicicleta.allBicis();
        expect(bicis.length).toBe(0);
    })
})

describe('Bicicleta.add', () => {
    it('Agrega una bicicleta', async () => {

        const newBici = new Bicicleta({code: 1, color: "verde", modelo: "urbana", ubicacion: [3,4]});
        await Bicicleta.add(newBici);
        let bicis = await Bicicleta.allBicis();

        expect(bicis.length).toBe(1);
        expect(bicis[0].code).toBe(1);
        expect(bicis[0].color).toBe('verde');
        expect(bicis[0].modelo).toBe('urbana');
        expect(bicis[0].ubicacion[0]).toBe(3);
        expect(bicis[0].ubicacion[1]).toBe(4);
    })
})

describe('Bicicleta.findByCode', () => {
    it('Agregar una bicicleta', async () => {
        
        let bici1 = new Bicicleta( {code: 1, modelo: 'abc', color: 'def', ubicacion: [3,4]});
        await Bicicleta.add(bici1);
        let bici2 = new Bicicleta( {code: 2, modelo: 'cba', color: 'fed', ubicacion: [4,3]});
        await Bicicleta.add(bici2);

        let bici3 = await Bicicleta.findByCode(1);

        expect(bici3.code).toBe(1);
        expect(bici3.modelo).toBe('abc');
        expect(bici3.color).toBe('def');
        expect(bici3.ubicacion[0]).toBe(3);
        expect(bici3.ubicacion[1]).toBe(4);

        let bici4 = await Bicicleta.findByCode(2);

        expect(bici4.code).toBe(2);
        expect(bici4.modelo).toBe('cba');
        expect(bici4.color).toBe('fed');
        expect(bici4.ubicacion[0]).toBe(4);
        expect(bici4.ubicacion[1]).toBe(3);
    })
})
