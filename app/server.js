var express = require('express') //llamamos a Express
var app = express()

// Para establecer distintas rutas necesitamos
// instanciar el express router
var router = express.Router()

var port = process.env.PORT || 8080  // establecemos nuestro puerto

/*
router.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola birra!' })   
})
*/

router.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' + req.params.nombre })  
})

// Matchea con cualquier nombre
router.get('/:nombre', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/',function(req,res) { 
  res.json({mensaje: 'Hola teresa' + req.body.nombre})  
})

/*

router.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

router.delete('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})
*/

app.use('/api', router)

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
