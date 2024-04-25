// Ejercicio 14

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function esPar(numero) {
  return numero % 2 === 0;
}

const numerosPares = numeros.filter(esPar);

console.log("Números pares:", numerosPares);