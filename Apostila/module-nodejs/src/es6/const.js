const version = 7;
version = 20;
const version = 20; // TypeError: Identifier 'version' has already been declared

// não modifica o valor
// var version = 20; // undefined
// console.log("Versão: " + version); // 7

// // Atribuir valores a uma variável const é um erro de sintaxe
// const a = 1; a = 2;

// // const também funciona com objetos
// const user = {name: "Suissa"};

// user = {name: "Itacir"};
// console.log(user); //Suissa

// // Entretando, atributos de objetos não estão protegidos,
// // logo a seguinte instrução é executada sem problemas 
// user.name = "Caio";
// console.log(user); //Caio

// function pimba() {
//   const naGorduchinha = true;
//   console.log(naGorduchinha); //true
// }

// pimba();

// const naGorduchinha = false;
// console.log(naGorduchinha); //false



