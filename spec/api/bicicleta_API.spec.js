const axios = require('axios');
//const server = require('../../bin/www');
let bicicletas = require('../../models/listado_bicicletas');

beforeEach( () => {
    //Eliminar el contenido del arreglo
    bicicletas.length = 0;
})

describe('BICICLETAS-GET /', () => {
    it('Expected 201 status code', async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/bicicletas/');
            expect(response.status).toBe(201);
        } catch (error) {
            console.error(error);
        }
    })
})

describe('BICICLETAS-POST /add', () => {
    
    it('Expected 202 status code, expected 406 code && registry added', async () => {

        try {
            expect(bicicletas.length).toBe(0);
            let response = await axios.post('http://localhost:3000/api/bicicletas/add', {
                "id": 123,
                "color": "Yellow",
                "modelo": "a1",
                "coordenadas": [14.611465, -90.658410]
            });
            expect(response.status).toBe(201);
            expect(bicicletas.length).toBe(1);

            response = await axios.post('http://localhost:3000/api/bicicletas/add', {
                "id": 123,
                "color": "Yellow",
                "modelo": "a1",
                "coordenadas": [14.611465, -90.658410]
            });
            expect(response.status).toBe(200);
            expect(bicicletas.length).toBe(1);
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
            expect(response.status).toBe(202);
            expect(bicicletas.length).toBe(1);

            response = await axios.delete('http://localhost:3000/api/bicicletas/delete', {
                id: 123
            })
            expect(response.status).toBe(202);
            expect(response.data.bicicleta.id).toBe(123);
            expect(bicicletas.length).toBe(0);
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
            expect(response.status).toBe(202);
            expect(bicicletas.length).toBe(1);
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
            expect(response.status).toBe(200);
            expect(bicicletas.length).toBe(1);
            expect(bicicletas[0].id).toBe(123);
            expect(bicicletas[0].color).toBe('red');
            expect(bicicletas[0].modelo).toBe("honda");
        } catch (error) {
            console.log(error);
        }
    }) 
})