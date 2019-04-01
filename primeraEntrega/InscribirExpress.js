const cursosExtension = require('./datosCursos');
const ListarCursos = require('./ListarCursos');
const express = require ('express');
const app = express();
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
    let imprimirHtml = (cursoSeleccionado) => {
        texto = argv.name + " Con numero de identificacion: " + argv.idCedula + " Se ha matriculado en : " + cursoSeleccionado.nombre + '\n';
    }
    imprimirHtml(cursoSeleccionado);
}
else {
    console.log("No se ha logrado encontrar el curso.."+ '\n');
    ListarCursos.imprimirCursos();
}

app.get('/',function(req, res){
    res.send('<b> '+texto+'</b>');
    })
    app.listen(3000);

