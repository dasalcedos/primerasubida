const estudiante1 = require('./calculos');
console.log(estudiante1.estudiante);
console.log("el promedio del estudiante es: " +
    estudiante1.obtenerPromedio(estudiante1.estudiante.notas.ingles,
        estudiante1.estudiante.notas.matematicas,
        estudiante1.estudiante.notas.programacion));

/* Destructuracion*/

const { estudiante, obtenerPromedio } = require('./calculos');
console.log("*Destructuracion* el Nombre del estudiante es " + estudiante.nombre);
console.log("*Destructuracion* el promedio del estudiante es: " +
    obtenerPromedio(estudiante.notas.ingles,
        estudiante.notas.matematicas,
        estudiante.notas.programacion));
/* Destructuracion 2*/
/*para crear archivos*/
const fs = require("fs");
let { nombre, edad: anos, notas: { matematicas, ingles, programacion } } = estudiante;
console.log("*Destructuracion 2* el Nombre del estudiante es " + nombre);
console.log("*Destructuracion 2* el promedio del estudiante es: " +
    obtenerPromedio(ingles,
        matematicas,
        programacion));
console.log("*Destructuracion 2* la Edad del estudiante es " + anos);
/*se usa funcion flecha =>*/
let crearArchivo=(estudiante) => {
    texto = 'el nombre del estudiante es ' + nombre + '\n' +
        'ha obtenido un promedio de ' + obtenerPromedio(matematicas , ingles , programacion);
    fs.writeFile('promedio.txt', texto, (err) => {

        if (err) throw (err);
        console.log("se ha creado el archivo con exito!!");
    });

    
}
crearArchivo(estudiante);
