var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SonidoSchema = new Schema({
    usuario: String,
    sonido: Number,
    date: Date
}, { collection: 'sonidos' });

mongoose.model("Sonido", SonidoSchema);
