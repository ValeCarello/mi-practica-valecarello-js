// Ejercicio 15
function obtenerDivisores(minimo, maximo, divisor) {
    const divisores = [];
    for (let i = minimo; i <= maximo; i++) {
   
      if (i % divisor === 0) {
        
        divisores.push(i);
      }
    }
    
    return divisores;
  }
  const minimo = 1;
  const maximo = 20;
  const divisor = 3;
  const listaDivisores = obtenerDivisores(minimo, maximo, divisor);
  console.log("Divisores:", listaDivisores);