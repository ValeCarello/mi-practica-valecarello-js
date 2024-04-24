// Ejercicio5
let palabra = "guitarra"
let numero = 2
if (!isNaN(numero) && numero > 0) {
    // Repetimos la palabra "n" veces
    for (let i = 0; i < numero; i++) {
        console.log(palabra);
    }
} else {
    console.log("El valor ingresado para 'numero' no es válido.");
}