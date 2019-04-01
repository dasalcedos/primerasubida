const cursosExtension = require('./datosCursos');
const ListarCursos = require('./ListarCursos');
const fs = require("fs");
let cursos = cursosExtension.cursosExtension.cursos;
const datosMatrucula = {
    idCurso: {
        demand: true,
        alias: 'id'
    },

    nombreSolicitante: {
        demand: true,
        alias: 'name'
    },
    idSolicitante: {
        demand: true,
        alias: 'idCedula'
    }
}
const argv = require('yargs')
    .command('prematricula', 'matricular', datosMatrucula)
    .argv;




let cursoSeleccionado = cursos.find(function (cursoSelect) { return cursoSelect.id == argv.id })
if (typeof cursoSeleccionado != 'undefined'){
    let crearArchivo = (cursoSeleccionado) => {
        texto = argv.name + " Con numero de identificacion: " + argv.idCedula + " Se ha matriculado en : " + cursoSeleccionado.nombre + '\n';
        fs.writeFile('matricula.txt', texto, (err) => {
            if (err) throw (err);
            console.log("se ha creado el registro con exito ver archivo Matricula.txt !!");
        });

    }
     crearArchivo(cursoSeleccionado);
}
else {
    console.log("No se ha logrado encontrar el curso.."+ '\n');
    ListarCursos.imprimirCursos();
}

