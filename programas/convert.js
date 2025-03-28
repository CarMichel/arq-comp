/****************************************************************
OBJETIVO: Crear un conversor de números con HTML y JavaScript
AUTOR: Carlos Enrique Michel Figueroa
VERSIÓN: 1.0.0
FECHA DE CREACIÓN: 27/03/2025
******************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector(".header h1");
    titulo.textContent += "1.0.0";
});
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector(".footer h2");
    titulo.textContent += " Arq. Carlos Enrique Michel Figueroa";
});

function limpiar_pantalla() {
    document.getElementById("num_principal").value = "";
    document.getElementById("base1").value = "2"; 
    document.getElementById("base2").value = "2"; 
    document.getElementById("resultado").value = "";
}

function validar_entrada(num) {
    // Expresión regular para detectar caracteres no válidos
    const regex = /^[0-9A-Fa-f]+$/; // Para números y letras válidas en bases hasta 16
    return regex.test(num);
}

function sacarResultado() {
    const numero = document.getElementById("num_principal").value.trim();
    const base1 = parseInt(document.getElementById("base1").value);
    const base2 = parseInt(document.getElementById("base2").value);
    const resultadoField = document.getElementById("resultado");

    // Validar entrada
    if (!validar_entrada(numero)) {
        resultadoField.value = "Error: No se permiten caracteres";
        return;
    }

    try {
        // Convertir el número de la base1 a base10
        const numeroEnBase10 = parseInt(numero, base1);
        if (isNaN(numeroEnBase10)) {
            throw new Error("Número inválido en la base inicial.");
        }

        // Convertir el número de base10 a base2
        const numeroEnBase2 = numeroEnBase10.toString(base2);

        // Mostrar el resultado
        resultadoField.value = numeroEnBase2.toUpperCase(); // Convertir a mayúsculas para bases hexadecimales
    } catch (error) {
        resultadoField.value = `Error: ${error.message}`;
    }
}