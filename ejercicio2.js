//Ejercicio 2
let numero1 = 15
let numero2 = 25
let numero3 = 35

mayor = 0
menor = 99999

if(mayor < numero1)
    mayor = numero1

    if(mayor < numero2)
        mayor = numero2

        if(mayor < numero3)
            mayor = numero3
if(menor > numero1)
    menor = numero1 
    
    if(menor > numero2)
        menor = numero2 
    
        if(menor > numero3)
            menor = numero3

console.log(`El numero mayor es ${mayor}`)
console.log(`El numero menor es ${menor}`)