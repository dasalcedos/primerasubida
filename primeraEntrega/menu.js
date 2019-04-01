const ListarCursos = require('./ListarCursos');
//const selectCursos = require('./selectCursos');

// Requires readline and create global variable menu
var readline = require('readline'),
    menu;
// Main
function showMain() {
    // Clear screen
    process.stdout.write('\033c');

    // Imprime menu
    console.log(
        'Menu \n\n' +
        '1 = Listar Cursos \n' +
        '2 = Inscribir \n' +
        '3 = Salir'
    );

    // Verifica si el menu esta activo, si es asi lo cierra
    if (menu) menu.close();

    //Crea las intefaces para leer de la consola
    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Ask question
    menu.question('Que deseas hacer ? : ', function (input) {
        switch (input) {
            case '1': showCursos(); break;
            case '2': inscribirCursos(); break;
            case '3': process.exit(); break;
            default: showMain() /* despliega el menu principal  si no hay coincidencia */;
        }
    });
}


function showCursos() {
    // Clear screen
    process.stdout.write('\033c');
    // Call Listar Cursos
    ListarCursos.imprimirCursos();
  
}

function inscribirCursos() {
    // Clear screen
    process.stdout.write('\033c');
    process.stdout.write('\n');
    process.stdout.write (" Ejecutar Este Comando ==> node Inscribir  prematricula --id XXXXX  --name NNNNNNN --idCedula 9999999");
    process.stdout.write('\n \n');
    process.stdout.write (" Reemplazar Comodines  (XXXXX, NNNNNNN ,9999999");
    process.stdout.write('\n \n');
    process.exit();
}
showMain();
