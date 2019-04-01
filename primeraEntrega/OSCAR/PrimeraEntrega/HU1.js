let curso1 = {
    idCurso: 1,
    nombreCurso: 'Fundamentos Node JS',
    duracionHrs: 47,
    valor: 0,
    inscritos:[]
}
let curso2 = {
    idCurso: 2,
    nombreCurso: 'Git y control de versiones',
    duracionHrs: 120,
    valor: 50000,
    inscritos:[]
}

let curso3 = {
    idCurso: 3,
    nombreCurso: 'De 0 a master class en Chocolatería',
    duracionHrs: 10,
    valor: 1150000,
    inscritos:[]
}
let institucion = {
    nombre: 'Tecnológico de Antioquia',
    cursos: [
        curso1,
        curso2,
        curso3
        ]
}
let cursos = institucion.cursos;
let listarCursos = (cursos,i) => {
    setTimeout(function () {
        let curso = cursos[i-1];
        console.log("\nInformación del curso:\nIdentificador: "+ curso.idCurso +
            "\nNombre: "+ curso.nombreCurso+
            "\nDuración: "+ curso.duracionHrs + " horas"+
            "\nValor: $"+ curso.valor );
      if (--i) {
        listarCursos(cursos,i); 
      }
    }, 2000);
  }

let listarCurso = (idCursoInput,callback) => {
  let finCurso = cursos.find(curso => curso.idCurso == idCursoInput);
  if(!finCurso) throw Error('Id de curso no encontrado.')
  console.log("A elegido el curso "+ finCurso.idCurso + " . Tienes toda la información para inscribirte:"+
  "\nNombre: "+ finCurso.nombreCurso+
  "\nDuración: "+ finCurso.duracionHrs + " horas"+
  "\nValor: $"+ finCurso.valor );
  return callback(finCurso);
}

listarCursos(cursos,cursos.length);

module.exports = {
  institucion,
  cursos,
  listarCursos,
  listarCurso
}