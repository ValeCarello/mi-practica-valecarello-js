// Ejercicio 11
function contarLetras(palabra) {
    let contadorLetras = palabra.split('').reduce((contador, letra) => {
        contador[letra] = (contador[letra] || 0) + 1;
        return contador;
    }, {});

    
    for (let letra in contadorLetras) {
        console.log(`${letra} = ${contadorLetras[letra]}`);
    }
}

contarLetras("HOLA");