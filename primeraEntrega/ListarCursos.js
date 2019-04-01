const cursosExtension = require('./datosCursos');
let imprimirCursos = () => {
    console.log("Los Cursos que ofrece el Tecnologico de Antioquia en la Modalidad de educacion continua son:" + '\n')

    var i = 0;
    let cursos = cursosExtension.cursosExtension.cursos;
    var intervalObject = setInterval(function () {

        console.log(cursos[i].id);
        console.log(cursos[i].nombre);
        console.log(cursos[i].duracion);
        console.log(cursos[i].valor);
        console.log("\n");
        i++
        if (i == cursos.length) {
            clearInterval(intervalObject);
            process.stdout.write('\n \n');
            process.exit();
        }

    }, 2000);
   

}

module.exports = {
    imprimirCursos
};
