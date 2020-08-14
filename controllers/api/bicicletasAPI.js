let Bicicleta = require('../../models/bicicleta');
let bicicletas = require('../../models/listado_bicicletas');

exports.exsistsId = function (id) {
    for(let i = 0; i < bicicletas.length; i++){
        if(bicicletas[i].id === id){
            return true;
        }
    }
    return false;
}


exports.bicicletas_list = (req, res) => {
    res.status(201).json(
        {
            bicicletas: bicicletas
        }
    );
}

exports.bicicletas_add = async (req, res) => {
    if(this.exsistsId(req.body.id)){
        res.status(200).send();
    } else {
        let newBici = new Bicicleta(req.body.id, req.body.modelo, req.body.color, req.body.coordenadas);
        bicicletas.push(newBici);
        res.status(201).json(
            {
                bicicleta: newBici
            }
        );
    }    
}

exports.bicicletas_delete = (req, res) => {

    if(!this.exsistsId(req.body.id)){
        res.status(406);
    }

    let biciEliminada;
    for(let i = 0; i < bicicletas.length; i++){
        if(bicicletas[i].id === req.body.id){
            biciEliminada = bicicletas[i];
            bicicletas.splice(i,1);
            break;
        }
    }

    res.status(204).json(
        {
            bicicleta: biciEliminada
        }
    );
}

exports.bicicletas_update = (req, res) => {
    
    let i;
    for(i = 0; i < bicicletas.length; i++){
        if(bicicletas[i].id === req.body.id){
            bicicletas[i].modelo = req.body.modelo;
            bicicletas[i].color = req.body.color;
            bicicletas[i].coordenadas = req.body.coordenadas;
            break;
        }
    }
    res.status(200).json(
        {
            bicicleta: bicicletas[i]
        }
    );
}