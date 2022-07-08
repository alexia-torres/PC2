var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    codigo: {type: String, required: true, max: 20},
    descripcion: {type: String, required: true, max: 20},
    precio: {type: String, required: true},
    stock: {type: String, required: true, max:2},
    marca: {type: String, required: true, max:10}
});


module.exports = mongoose.model('Usuario', UsuarioSchema);
