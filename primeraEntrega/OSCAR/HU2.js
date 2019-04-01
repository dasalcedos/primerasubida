const {
    institucion,
    cursos,
    listarCursos,
    listarCurso
} = require('./HU1');

const opciones = {
    cursoSeleccionado:{
        demand : true,
        alias : 'curso'
    },
    nombre:{
        demand : true,
        alias : 'nom'
    },
    cedula:{
        demand : true,
        alias : 'cc'
    }
}
const arg = require('yargs') 
    .command('inscribir', 'Si estás interesado en inscribirte ingresa el id del curso, tu nombre y tu cédula.', opciones)
    .argv;
const estudiante = {
    nombre: arg.nombre,
    cedula: arg.cedula
}
const fs = require('fs');

let generarArchivo = (estudiante, curso) => {
    let textoCurso= "\nInformación del curso:\nIdentificador: "+ curso.idCurso +
    "\nNombre: "+ curso.nombreCurso+
    "\nDuración: "+ curso.duracionHrs + " horas"+
    "\nValor: $"+ curso.valor ;
    
    let textoEstudiante= "\nInformación del estudiante:\nCédula: "+ estudiante.nombre +
    "\nNombre: "+ estudiante.cedula;
    fs.writeFile('Info-Inscripcion.txt', textoCurso+textoEstudiante, (error) => {
        if (error) throw (error);
        console.log('Se ha creado el archivo exitosamente.')
    });
}

let cursoSelected = listarCurso(arg.cursoSeleccionado);
let inscripcion= cursoSelected.inscritos;
inscripcion.push(estudiante);
generarArchivo(estudiante,cursoSelected);

for (const index in cursos) {
    if (cursos.hasOwnProperty(index)) {
        const curso = cursos[index];
        console.log(curso)
    }
}

// node HU2 inscribir --curso=4 --nom='Oscar' --cc=12312312


