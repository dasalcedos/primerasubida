
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
console.log("el promedio del estudiante es: "+ (argv.m+argv.i+argv.p)/3);

//console.log("el nombre del estudiante es: "+ argv.nombre);
