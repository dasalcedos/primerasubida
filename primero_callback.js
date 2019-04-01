let promedio2 =(nota_1, nota_2, nota_3,callback) => {
    setTimeout(function(){
   let resultado = (nota_1+nota_2+nota_3)/3;
   callback(resultado);
   },3000);
   }

   promedio2 (5,4,21,function(resultado){
    console.log(resultado);

   })