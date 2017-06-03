//1 Funcion
function imprimirHola() {
    console.log("Imprimir Hola Mundo")

}
imprimirHola();
// con un parametro
function nombreApellid(nombre) {
    return nombre;
}
console.log(nombreApellid("Lilian Quimbita"));

//2 funcion
function suma2Numeros(a,b) {
    return a+b;

}
console.log(suma2Numeros(2,4));

//3 funcion
function Operar2Numeros(n1,n2,funcion) {
    n1=n1+1;
    n2=n2+2;
    funcion(n1,n2);
}
Operar2Numeros(2,4,function (primerNumero,segundoNumero) {
    //primer numero 3
    //segundo numero 6
    return primerNumero*segundoNumero;
    //igual a 18
});

//FOR EACH
// [1,2,3,4].forEach(function(valorIteracion,Indice,Arreglo))
//console.log(valorIteracion)

var lili={
    nombre:"",
    apellido:"Vega",
    saltar:function () {
        console.log("Saltar");
    },
    correr:function () {
        console.log("Correr");
    },
    sumar:function (a,b) {
        return a+b;
    },
    imprimirNombre: function () {
        return this.nombre+" "+this.apellido;
    }
};
//para llenar los atributos de un objeto
lili.nombre="Lilian";
lili.titulo="Estudiante";
console.log(lili);

//Arreglos
var arreglosStrings = ["1","2"];
//aumenta el numero al final
//arreglosStrings.push("3");
//Borra el numero del final
//arreglosStrings.pop();

//Deber agregar el 3 en medio
//borrar ek primero con splice
//[1,3,2]
//[3,2]
arreglosStrings.splice(1,0,3);
arreglosStrings.splice(0,1);
console.log(arreglosStrings);


