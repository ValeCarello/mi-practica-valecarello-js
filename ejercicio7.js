// Ejercicio 7
const numero1 = 2;
const numero2 = 16;

console.log(`Los múltiplos de 3 comprendidos entre ${numero1} y ${numero2} son:`);
for (let i = numero1; i <= numero2; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}