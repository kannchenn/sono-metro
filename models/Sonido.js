var mongoose = require('mongoose');

var SonidoSchema = new mongoose.Schema({
  date: Date
}, { collection: 'sonidos' });

mongoose.model('Sonido', SonidoSchema);
