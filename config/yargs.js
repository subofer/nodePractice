const argv = require('yargs')

.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'Base de la tabla de multiplicar',
})

.option('m',{
    alias: 'mostrar',
    type: 'boolean',
    defaultValue:false,
    describe:'Mostrar la tabla por pantalla',
})
.option('l',{
    alias: 'limite',
    type: 'number',
    defaultValue: 10,
    describe:'Limite de la tabla',
})

.check( (argv, options) => {

    if (isNaN(argv.b)){
        throw 'Debe ingresar una base numerica'
    }else{
        return true
    }

})
.argv;

module.exports = argv;