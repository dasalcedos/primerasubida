let estudiante = {
    nombre: "Danny",
    edad: "43",
    notas: {
        matematicas: 3,
        ingles: 4,
        programacion: 5
    }

};
let obtenerPromedio=(nota_1, nota_2, nota_3) => (nota_1+nota_2+nota_3)/3;
//console.log("La nota promedio de "+estudiante.nombre+" es :"+obtenerPromedio(estudiante.notas.ingles,estudiante.notas.matematicas,estudiante.notas.programacion));
module.exports ={

estudiante,
obtenerPromedio

};
