// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    // Tu código aquí
    const numero = 10

    if(numero % 2 === 0){                   // si el número es par su resto al dividir con 2 será 0
        console.log("El número es par.")
    }else{
        console.log("El número es impar.")
    }
}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    // Tu código aquí
    let edad = 27

    if(edad < 18){
        console.log("Eres menor de edad.")
    }else if(edad >= 18 && edad <= 65){
        console.log("Eres adulto.")
    }else {
        console.log("Eres adulto mayor.")
    }
}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    // Tu código aquí
    let numero = 2

    if(numero <= 0){                // para restringir la entrada a numero > 0
        console.warn("Debes ingresar un número entero positivo mayor a cero")
    }else {
        while(numero >= 0){         // se repite el ciclo numero + 1 veces
            console.log(numero)
            numero = numero - 1
        }
    }

    console.log("fin🚀")              // esto lo pongo porque en la consola imprime un numero de más
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    // Tu código aquí
    let n = 5

    do {
        console.log("Estoy aprendiendo JavaScript")
        n = n - 1
    }while(n > 0);
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    // Tu código aquí
    let numero = 10

    if(numero <= 0){                            // para restringir la entrada a numero > 0
        console.warn("Debes ingresar un número entero positivo mayor a cero")
    }else {
        for(let i = 1; i <= numero; i++){       // se repite el ciclo 10 veces
            if(i % 2 === 0){                    // solo se imprimen los pares
                console.log(i)
            }
        }
    }
}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    // Tu código aquí
    for(let i = 1; i <= 10; i++){
        console.log(i)
        if(i === 6) {
            break
        }
    }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    // Tu código aquí
    for(let i = 1; i <= 10; i++){
        if(i === 5) {
            continue
        }
        console.log(i)
    }
}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    // Tu código aquí
    let dia = 7

    switch(dia){
        case 1:
            console.log("Es Lunes.");
            break;
        case 2:
            console.log("Es Martes.");
            break;
        case 3:
            console.log("Es Miercoles.");
            break;
        case 4:
            console.log("Es Jueves.");
            break;
        case 5:
            console.log("Es Viernes.");
            break;
        case 6:
            console.log("Es Sabado.");
            break;
        case 7:
            console.log("Es Domingo.");
            break;
        default:
            console.error("Numero Incorrecto");
            break;
    }
}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    // Tu código aquí
    let letra = "a"
    
    switch(letra){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Vocal: " + letra);
            break;
        default:
            console.log("No es una vocal");
            break;
    }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    // Tu código aquí
    let a = 5, b = 6, c = -10
    let todosPositivos = a > 0 && b > 0 && c > 0
    let unoNegativo = a < 0 || b < 0 || c < 0
    let todosNegativos =  a < 0 && b < 0 && c < 0

    if(todosPositivos){
        console.log("Todos positivos")
    } else if(todosNegativos){
        console.log("Todos negativos")
    } else {
        console.log("Al menos uno negativo")
    }    
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};