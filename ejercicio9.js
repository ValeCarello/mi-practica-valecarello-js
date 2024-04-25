// Ejercicio 9
function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  }
  
  
  const numeros = [1, 2, 3, 4, 5];
  console.log(sumaArray(numeros)); 