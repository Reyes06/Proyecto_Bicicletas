let Bicicleta = require('../../models/bicicleta');

exports.bicicletas_list = async (req, res) => {
    
    let bicis = await Bicicleta.allBicis();
    
    res.status(201).json({
        bicicletas: bicis
    });
}

exports.bicicletas_add = async (req, res) => {
    
    let newBici = new Bicicleta({
        code: req.body.code,
        modelo: req.body.modelo,
        color: req.body.color,
        ubicacion: req.body.ubicacion
    });
    
    let biciCreada = await Bicicleta.add(newBici);
    console.log(biciCreada)
    res.status(201).json({
        bicicleta: biciCreada
    });
}

exports.bicicletas_delete = async (req, res) => {
    let biciEliminada = await Bicicleta.removeByCode(req.body.code);
    res.status(201).json({
        bicicleta: biciEliminada
    });
}

exports.bicicletas_update = async (req, res) => {
    
    let response = Bicicleta.updateByCode(req.body.code, req.body.modelo, req.body.color, req.body.ubicacion);
    res.status(201).json(
        {
            action: response
        }
    );
}