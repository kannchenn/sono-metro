var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sonido = mongoose.model('Sonido');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/datos', function (req, res, next) {
  res.send("Hola!");
});

router.post('/datos', function(req, res, next){
	// res.send(req.body.datos);
  var muestra = new Sonido ();
   muestra.usuario = req.body.datos.identificador;
   muestra.sonido = req.body.datos.decibelios;
   muestra.date = new Date();

  muestra.save(function(err,sonido){
    if(err){return next (err);}
    res.json(sonido);
  });
});

module.exports = router;
