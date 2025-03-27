/****************************************************************
OBJETIVO: Crear una calculadora básica con HTML y JavaScript
AUTOR: Carlos Enrique Michel Figueroa
VERSIÓN: 1.0
FECHA DE CREACIÓN: 26/03/2025
******************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector(".calculator-container h1");
    titulo.textContent += " Version 1.0";
});

/********************FUNCION BOTONES ********************/
function botones_numeros(numero) {
    let entrada = document.getElementById("entrada");
    entrada.value += numero; // Concatenar el número en la entrada
}

function botones_operaciones(signo) {
    let entrada = document.getElementById("entrada");
    entrada.value += signo; // Concatenar el signo en la entrada
}

/********************FUNCION BORRADORES *****************/
function borrar_caracter() {
    let entrada = document.getElementById("entrada");
    entrada.value = entrada.value.slice(0, -1); // Eliminar el último carácter
}

function limpiar_pantalla() {
    document.getElementById("entrada").value = ""; // Vaciar la entrada
    document.getElementById("resultado").value = ""; // Vaciar el resultado
}

/********************FUNCIONES DE VALIDACION Y CALCULO *****************/
function validar_entrada() {
    try {
        let operacion = document.getElementById("entrada").value;
        eval(operacion); // Validar si la operación es válida
        return true;
    } catch (e) {
        document.getElementById("resultado").value = "Error en la operacion";
        return false;
    }
}

function sacarResultado() {
    if (validar_entrada()) {
        let operacion = document.getElementById("entrada").value;
        let resultado = eval(operacion); // Realizar el cálculo
        document.getElementById("resultado").value = resultado; // Mostrar el resultado
    }
}