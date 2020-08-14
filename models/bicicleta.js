
const mongoose = require('mongoose');
const schemaBicicleta = new mongoose.Schema(
    {
        code: Number,
        modelo: String,
        color: String,
        ubicacion: [Number]
    }
);

schemaBicicleta.methods.toString = function () {
    return `code: ${this.code} | color: ${this.color}`;
}

schemaBicicleta.statics.allBicis = function (callback) {
    return this.find({}, callback);
}

schemaBicicleta.statics.add = function (newBici, callback) {
    this.create(newBici, callback);
}

schemaBicicleta.statics.findByCode = function (codigo, callback) {
    this.findOne({code: codigo}, callback);
}

schemaBicicleta.statics.removeByCode = function (codigo, callback) {
    this.deleteOne({code: codigo}, callback);
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