const mongoose = require('mongoose');
let Bicicleta = require('../../models/bicicleta');

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
    it('Verificar que venga vacia', (done) => {
        Bicicleta.allBicis( (err, bicis) => {
            expect(bicis.length).toBe(0);
            done();
        });
    })
})

describe('Bicicleta.add', () => {
    it('Agrega una bicicleta', (done) => {

        const newBici = new Bicicleta({code: 1, color: "verde", modelo: "urbana", ubicacion: [3,4]});
        Bicicleta.add(newBici, (err, newBici) => {


            if(err) console.log(err);
            Bicicleta.allBicis( (err, bicis) => {
                expect(bicis.length).toBe(1);
                expect(bicis[0].code).toBe(1);
                expect(bicis[0].color).toBe('verde');
                expect(bicis[0].modelo).toBe('urbana');
                expect(bicis[0].ubicacion[0]).toBe(3);
                expect(bicis[0].ubicacion[1]).toBe(4);
                done();
            })

        })
    })
})

describe('Bicicleta.findByCode', () => {
    it('Agregar una bicicleta', (done) => {
        let bici1 = new Bicicleta( {code: 1, modelo: 'abc', color: 'def', ubicacion: [3,4]});
        Bicicleta.add(bici1, (err, bici1) => {
            let bici2 = new Bicicleta( {code: 2, modelo: 'cba', color: 'fed', ubicacion: [4,3]});
            Bicicleta.add(bici2, (err, bici1) => {
                Bicicleta.findByCode(1, (err, bici) => {
                    expect(bici.code).toBe(1);
                    expect(bici.modelo).toBe('abc');
                    expect(bici.color).toBe('def');
                    expect(bici.ubicacion[0]).toBe(3);
                    expect(bici.ubicacion[1]).toBe(4);
                })

                Bicicleta.findByCode(2, (err, bici) => {
                    expect(bici.code).toBe(2);
                    expect(bici.modelo).toBe('cba');
                    expect(bici.color).toBe('fed');
                    expect(bici.ubicacion[0]).toBe(4);
                    expect(bici.ubicacion[1]).toBe(3);
                    done();
                })

                done();
            })
        })
    })
})
