const fs = require('fs');
var colors = require('colors')

const crearArchivo = async (base = 5, mostrar=false, limite=10) =>{
console.log(base,mostrar, limite);
    try{
        let salida = [...Array(limite+1).keys()].splice(1).map( n => `${base} x ${n} = ${base * (n)}`).join("\n")

        fs.writeFileSync(`./output/tabla-${base}.txt`, salida)
        
        if(mostrar){
            console.log("=================="  .rainbow)
            console.log("  Tabla del: "       .red, colors.blue(base) )
            console.log("=================="  .rainbow)
            console.log(colors.yellow(salida))
        }

        return `tabla-${base}.txt` .green
    
    } catch(error) {
        throw error
    }


}

module.exports = {crearArchivo}