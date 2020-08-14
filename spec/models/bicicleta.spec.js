let bicicletas = require('../../models/listado_bicicletas');
let Bicicleta = require('../../models/bicicleta');

beforeEach(() => {
    bicicletas = [];
})

describe('Bicicletas.init', () => {
    it('Verificar 0 bicicletas al inicio', () => {
        expect(bicicletas.length).toBe(0);
    })
})

describe('Bicicletas.add', () => {
    it('Verificar agregar una bicicleta', () => {
        
        let b1 = new Bicicleta(512, 'Uchiha', 'Rojo', [14.610670, -90.656444]);
        let b2 = new Bicicleta(443,'Senju', 'Cafe', [14.613317, -90.658064]);

        bicicletas.push(b1);

        expect(bicicletas.length).toBe(1);
        expect(bicicletas[0].id).toBe(b1.id);
        expect(bicicletas[0].color).toBe(b1.color);
        expect(bicicletas[0].modelo).toBe(b1.modelo);
        expect(bicicletas[0].coordenadas).toBe(b1.coordenadas);

        bicicletas.push(b2);

        expect(bicicletas.length).toBe(2);
        expect(bicicletas[1].id).toBe(b2.id);
        expect(bicicletas[1].color).toBe(b2.color);
        expect(bicicletas[1].modelo).toBe(b2.modelo);
        expect(bicicletas[1].coordenadas).toBe(b2.coordenadas);
    })
});

describe('Bicicletas.delete', () => {

    it('Verificar eliminacion al principio/centro/final', () => {
        let b1 = new Bicicleta(123, 'm1', 'c1', [14.610670, -90.656444]);
        let b2 = new Bicicleta(456,'m2', 'c2', [14.613317, -90.658064]);
        let b3 = new Bicicleta(789, 'm3', 'c3', [14.610670, -90.656444]);
        let b4 = new Bicicleta(987,'m4', 'c4', [14.613317, -90.658064]);

        bicicletas.push(b1);
        bicicletas.push(b2);
        bicicletas.push(b3);
        bicicletas.push(b4);

        //Eliminar al frente
        expect(bicicletas[0]).toBe(b1);
        bicicletas.splice(0, 1);
        expect(bicicletas[0]).toBe(b2);
        expect(bicicletas.length).toBe(3);

        //Eliminar al centro
        expect(bicicletas[1]).toBe(b3);
        bicicletas.splice(1, 1);
        expect(bicicletas[1]).toBe(b4);
        expect(bicicletas.length).toBe(2);

        //Eliminar al final
        expect(bicicletas[1]).toBe(b4);
        bicicletas.splice(1, 1);
        expect(bicicletas[1]).toBe(undefined);
        expect(bicicletas.length).toBe(1);

        //Eliminarl ultimo elemento
        expect(bicicletas[0]).toBe(b2);
        bicicletas.splice(0, 1);
        expect(bicicletas[0]).toBe(undefined);
        expect(bicicletas.length).toBe(0);
    })

    

})