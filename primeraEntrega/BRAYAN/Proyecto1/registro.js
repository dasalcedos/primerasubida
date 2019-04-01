cdconst {curso} = require ('./curso');
const fs = require('fs');

const opciones = {
    id:{ demand: true, alias:'i',},
    nombre:{ demand: true, alias:'n',},
    cedula:{ demand: true, alias:'c',}
}

const argv = require('yargs')
            .command('inscribir', 'Inscribirse en un curso', opciones)
            .argv




//imprimiendo información de los cursos
let imprimir = (id, nombre, duracion, valor, tiempo)=>{
    setTimeout(function(){
    console.log('El curso número ' + id + ' sobre ' + nombre + ' con una duración de '
                + duracion + ' horas y un costo de ' +  valor + ' dólares');
    }, tiempo);
    
};

tiempo = 2000;

let crearArchivo = (idCurso) => {
	texto = 'Estudiante: ' + argv.n + '\n' + 
		'con numero de cédula: ' + argv.c +'\n'+
        'se inscribió en el curso número ' + curso[idCurso-1].id + 
        ' sobre ' + curso[idCurso-1].nombre + ' con una duración de '
        + curso[idCurso-1].duracion + 
        ' horas y un costo de ' + curso[idCurso-1].valor + ' dólares';
	fs.writeFile('curso.txt', texto, (err)=> {
		if (err) throw (err);
		console.log('Se incribió satisfactoriamente, se ha creado el archivo')
	});
}

if(argv._[0] == 'inscribir'){
    if(argv.i>0 && argv.i < 4){
    imprimir(curso[argv.i-1].id, curso[argv.i-1].nombre, curso[argv.i-1].duracion, curso[argv.i-1].valor, 0);
    crearArchivo(curso[argv.i-1].id);
    } else {
        console.log('ID erróneo');
    }
} else {
    for(i=0; i < 3; i++){
        imprimir(curso[i].id, curso[i].nombre, curso[i].duracion, curso[i].valor, tiempo);
        tiempo += 2000;
        };
}
