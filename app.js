const {crearArchivo} = require('./helpers/multiplicar');
const argv  = require('./config/yargs')
var colors = require('colors')
console.clear()

crearArchivo(argv.base,argv.mostrar, argv.limite)
.then(mensaje => console.log(mensaje," creado con exito" .green))
.catch(err => console.error(err))
