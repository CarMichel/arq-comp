// Función para manejar los números
function botones_numeros(numero) {
    let entrada = document.getElementById("entrada");
    entrada.value += numero; // Concatenar el número en la entrada
}

// Función para manejar los signos de operación
function botones_operaciones(signo) {
    let entrada = document.getElementById("entrada");
    entrada.value += signo; // Concatenar el signo en la entrada
}

// Función para borrar un carácter
function borrar_caracter() {
    let entrada = document.getElementById("entrada");
    entrada.value = entrada.value.slice(0, -1); // Eliminar el último carácter
}

// Función para limpiar la pantalla
function limpiar_pantalla() {
    document.getElementById("entrada").value = ""; // Vaciar la entrada
    document.getElementById("resultado").value = ""; // Vaciar el resultado
}

// Función para validar la entrada
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

// Función para calcular el resultado
function sacarResultado() {
    if (validar_entrada()) {
        let operacion = document.getElementById("entrada").value;
        let resultado = eval(operacion); // Realizar el cálculo
        document.getElementById("resultado").value = resultado; // Mostrar el resultado
    }
}