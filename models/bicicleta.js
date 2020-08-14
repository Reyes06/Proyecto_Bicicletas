
const mongoose = require('mongoose');
const schemaBicicleta = new mongoose.Schema(
    {
        code: int,
        modelo: string,
        color: string,
        ubicacion: [number]
    }
);

schemaBicicleta.methods.toString = function () {
    return `code: ${this.code} | color: ${this.color}`;
}

schemaBicicleta.statics.allBicis = function (callback) {
    return this.find({}, callback);
}

schemaBicicleta.statics.createInstance = function (code, modelo, color, ubicacion){
    return new this ({
        code: code,
        modelo: modelo,
        color: color,
        ubicacion: ubicacion
    });
}

module.exports = mongoose.model('Bicicleta', schemaBicicleta);