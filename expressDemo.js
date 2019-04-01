const express = require ('express');
const app = express();

const opciones = {
    matematicas: {
        default: 0,
        alias: 'm'
    },

    ingles: {
        default: 0,
        alias: 'i'
    },
    programacion: {
        demand: true,
        alias:  'p'
    }
}
const argv = require('yargs')
             .command('promedio','calcular promedio',opciones)
             .argv;
console.log(argv.matematicas);
console.log(argv);
texto="el promedio del estudiante es: "+ (argv.m+argv.i+argv.p)/3;

app.get('/',function(req, res){
res.send('<b> '+texto+'</b>');
})
app.listen(3000);
