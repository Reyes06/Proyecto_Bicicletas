let Bicicleta = require('../models/bicicleta');

exports.mostrarBicicletas = (req, res) => {
    res.render('bicicletas/list', {bicis: bicicletas});
}

exports.agregarBicicletaGET = (req, res) => {
    res.render('bicicletas/agregar');
}

exports.agregarBicicletaPOST = (req, res) => {
    bicicletas.push(new Bicicleta(req.body.code, req.body.modelo, req.body.color, req.body.ubicacion));
    console.log(req.body);
    res.redirect('/bicicletas');
}