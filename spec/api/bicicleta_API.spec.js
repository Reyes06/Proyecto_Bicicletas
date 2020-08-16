const axios = require('axios');
const server = require('../../bin/www');
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

describe('BICICLETAS-GET /', () => {
    it('Expected 202 status code', async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/bicicletas/');
            expect(response.status).toBe(201);
        } catch (error) {
            console.error(error);
        }
    })
})

describe('BICICLETAS-POST /add', () => {
    
    it('Expected 202 status code', async () => {

        try {
            let response = await axios.post('http://localhost:3000/api/bicicletas/add', {
                "id": 123,
                "color": "Yellow",
                "modelo": "a1",
                "coordenadas": [14.611465, -90.658410]
            });
            expect(response.status).toBe(201);

            response = await axios.post('http://localhost:3000/api/bicicletas/add', {
                "id": 12345,
                "color": "Yellow",
                "modelo": "a1",
                "coordenadas": [14.611465, -90.658410]
            });
            expect(response.status).toBe(201);
        } catch (error) {
            console.error(error);
        }
    })
})

describe('BICICLETA-DELETE /delete', () => {
    it('Crear una nueva bicicleta, eliminar una bicicleta existente', async () => {
        try {
            //Crear bicicleta
            let response = await axios.post('http://localhost:3000/api/bicicletas/add', {
                id: 123,
                "color": "Yellow",
                "modelo": "a1",
                "coordenadas": [14.611465, -90.658410]
            });
            expect(response.status).toBe(201);

            response = await axios.delete('http://localhost:3000/api/bicicletas/delete', {
                id: 123
            })
            expect(response.status).toBe(201);
        } catch (error) {
            console.log(error);
        }
    })
})

describe('BICICLETA-UPDATE /update', () => {
    it('Crear una nueva bicicleta', async () => {
        try {
            //Crear bicicleta
            const response = await axios.post('http://localhost:3000/api/bicicletas/add', {
                "id": 123,
                "color": "Yellow",
                "modelo": "a1",
                "coordenadas": [14.611465, -90.658410]
            });
            expect(response.status).toBe(201);
        } catch (error) {
            console.log(error);
        }

        try {
            //Actualizar bicicleta
            const response = await axios.post('http://localhost:3000/api/bicicletas/update', {
                "id": 123,
                "color": "red",
                "modelo": "honda",
                "coordenadas": [14.611465, -90.658410]
            });
            expect(response.status).toBe(201);
        } catch (error) {
            console.log(error);
        }
    }) 
})