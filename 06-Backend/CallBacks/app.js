
//const fs=require('fs'); //este viene instalado por defecto en el node
//const calculadora =require('twj-l-quimbita');//este necesita ser instaladom
//const Passwords =require('machinepack-passwords');
//let a = 2,
//    b = 3,
//    resultado;
//resultado =calculadora.calculadoraUdla.sumar(a,b);
//console.log(`Resultado es: ${resultado}`);

//let passwordEncriptar ="1234";
//Passwords.encryptPassword(
//{
//  password: passwordEncriptar,
//}).exec({
//    error:(err)=>{
//            console.log(`Error: ${error}`)
//    },
//    success: (resultado)=>{
//            console.log(`Resultado: ${resultado}`);
//    },
//});


//console.log("Empieza");
//1-Nombre y ruta del archivo
//2-Codificacion
//3-Anonimus functinon

//fs.readFile('texto.txt', 'utf8',
//    function (err, data){
//        if (err) throw err;
//console.log(data);

//});
//console.log("Temina");

//para arreglar el error que no se a podido encontar el modulo express
//instalamos npm install express
//sucedio que se crea la carpeta modulo-express



//SEGUNDO EJERCICIO
const fs=require('fs'); 
console.log("Empieza");

fs.readFile('texto.txt', 'utf8',
    function (err, data){
        if (err) throw err;
        console.log(data);

    });
console.log("Temina");
