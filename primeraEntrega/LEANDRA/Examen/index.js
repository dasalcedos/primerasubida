const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const config = require('./config');

async function fnCursos(first = true) {
  try {
    if (first) {
      console.log('\n******* BIENVENIDO AL PROCESO DE INSCRIPCIÓN DE CURSOS *******'.yellow);
      await time_out(config.timeoutBegin);
    }
    console.log('\n....:::: A continiación se listan los cursos disponibles ::::....\n'.green);
    await time_out(config.timeoutCursos);
    for (let i = 0; i < config.cursos.length; i++) {
      if (i > 0) await time_out(config.timeoutCursos);
      let cursoStr = `
        *********************************************
        => Id       : ${config.cursos[i].id}
        => Nombre   : ${config.cursos[i].nombre}
        => Duración : ${config.cursos[i].duracion}
        => Valor    : ${config.cursos[i].valor}
        *********************************************`;
      if ((i % 2) === 0) {
        console.log(cursoStr.gray);
      } else {
        console.log(cursoStr.blue);
      }
    }
    await time_out(config.timeoutCursos);
    let result = await questions();
    if (result.status) {
      let inscribir = await writeFile(result);
      if (inscribir.status) {
        console.log(`
          *********************************************************
          ** Inscripción procesada con la siguiente información: **
          ** => Curso  : ${result.curso.nombre}
          ** => Nombre : ${result.nombre}
          ** => Cédula : ${result.documento}
          *********************************************************
          `.magenta);
        await reloadQuestion();
      } else {
        console.log(`\nSe ha presentado el siguiente error al tratar de procesar la inscripción: ${inscribir.message}`.red);
      }
    } else {
      console.log('\nInscripción no procesada!'.red);
      await reloadQuestion();
    }
  } catch (e) {
    console.log(`\nSe ha presentado el siguiente error no controlado: ${e}`.red);
  }
}

async function reloadQuestion() {
  let otroCurso = await questionTwo();
  if (otroCurso.status) {
    fnCursos(false);
  } else {
    console.log(`
    *****************************************
    ** Proceso de inscripción finalizado!  **
    ** Gracias por usar nuestra plataforma **
    *****************************************
    `.magenta);
  }
}

function writeFile(obj) {
  return new Promise((resolve) => {
    fs.writeFile(`${config.rootFiles}${obj.curso.nombre}_${obj.documento}.txt`, JSON.stringify(obj), (err) => {
      if (err) {
        resolve({
          status: false,
          message: err
        });
        return;
      }
      resolve({
        status: true
      });
    });
  });
}

function questions() {
  return new Promise((resolve, reject) => {
    let result = {};
    inquirer.prompt([{
      type: 'input',
      name: 'curso',
      message: "\nIngrese el id del curso deseado: ".yellow,
      validate: (value) => {
        let curso = config.cursos.filter(f => {
          if (f.id == value) {
            return f;
          }
        });
        if (curso != null && curso != 'undefined' && curso.length != 0) {
          result.curso = curso[0];
          return true;
        }
        return 'Ingrese un id de curso válido!'.red;
      }
    }, {
      type: 'input',
      name: 'nombre',
      message: "\nIngrese su nombre:".yellow,
      validate: (value) => {
        if (value != null && value != 'undefined' && value != '') {
          result.nombre = value.toUpperCase();
          return true;
        }
        return 'Debe ingresar su nombre!'.red;
      }
    }, {
      type: 'input',
      name: 'documento',
      message: "\nIngrese su número de cédula:".yellow,
      validate: (value) => {
        var valid = !isNaN(parseFloat(value));
        if (valid) {
          result.documento = value;
          return true;
        }
        return '\nDebe ingresar su número de cédula válido!';
      }
    }, {
      type: 'input',
      name: 'confirmacion',
      message: "\n¿Confirma que desea inscribir el curso? [Y/N] (default Y): ".yellow,
      validate: (value) => {
        if (value != null &&
          value != 'undefined' &&
          (value.toUpperCase() == 'Y' || value.toUpperCase() == 'N' || value == '')) {
          let status = false;
          if (value.toUpperCase() == 'Y' || value.length == 0) {
            status = true;
          }
          result.status = status;
          return true;
        }
        return 'Debe ingresar una respuesta válida!'.red;
      }
    }]).then(answers => {
      resolve(result);
    });
  });
}

function questionTwo() {
  return new Promise((resolve, reject) => {
    let result = {};
    inquirer.prompt([{
      type: 'input',
      name: 'confirmacion',
      message: "\n¿Desea inscribirse en otro curso? [Y/N] (default Y): ".yellow,
      validate: (value) => {
        if (value != null &&
          value != 'undefined' &&
          (value.toUpperCase() == 'Y' || value.toUpperCase() == 'N' || value == '')) {
          let status = false;
          if (value.toUpperCase() == 'Y' || value.length == 0) {
            status = true;
          }
          result.status = status;
          return true;
        }
        return 'Debe ingresar una respuesta válida!'.red;
      }
    }]).then(answers => {
      resolve(result);
    });
  });
}

function time_out(miliseconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, miliseconds);
  });
}

fnCursos();
