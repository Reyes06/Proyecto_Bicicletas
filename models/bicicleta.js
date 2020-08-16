
const mongoose = require('mongoose');
const schemaBicicleta = new mongoose.Schema(
    {
        code: Number,
        modelo: String,
        color: String,
        ubicacion: [Number]
    }
);

schemaBicicleta.statics.allBicis = async function () {
    return await this.find({}, (err) => {if(err) console.log(err)});
}

schemaBicicleta.statics.add = async function (newBici) {
    return await this.create(newBici, (err) => {if(err) console.log(err)});
}

schemaBicicleta.statics.findByCode = async function (codigo) {
    return await this.findOne({code: codigo}, (err) => {if(err) console.log(err)});
}

schemaBicicleta.statics.removeByCode = async function (codigo) {
    return await this.deleteOne({code: codigo}, (err) => {if(err) console.log(err)});
}

schemaBicicleta.statics.updateByCode = async function (codigo, modelo, color, ubicacion) {
    return await this.updateOne({code: codigo}, {modelo: modelo, color: color, ubicacion: ubicacion}, (err) => {if(err)console.log(err)});
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