// Secuencia Fibonacci, cada número es igual a la suma de sus dos anteriores ej :0, 1, 1, 2, 3, 5, 8, 13,
// Crear una secuencia fibonacci a partir de dos numeros que ingrese el usuario


let numero1
let numero2 

// Funciona hasta que se ingresen dos números
do{
    numero1 = parseFloat(prompt("ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
} while(isNaN(numero1) || isNaN(numero2))


for(let i = 0; i<= 500 ; i=numero1+numero2){
    i = numero1 + numero2
    console.log(numero1 + " + " + numero2 + " = " + i)
    numero1 = numero2
    numero2 = i
}
