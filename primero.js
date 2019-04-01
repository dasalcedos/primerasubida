function promedio (nota_1, nota_2, nota_3)
{
let resultado = (nota_1+nota_2+nota_3)/3;
console.log("el promedio 1 es: "+resultado);
}

let promedio2 =(nota_1, nota_2, nota_3) => {
 setTimeout(function(){
let resultado = (nota_1+nota_2+nota_3)/3;
console.log("el promedio 2 es :"+resultado);
},3000);
}

let promedio3= (nota_1, nota_2, nota_3) => console.log  ("el promedio 3 es:"+(nota_1+nota_2+nota_3)/3);

promedio(2,3,4);
promedio2(1,2,1);
promedio3(5,4,5);