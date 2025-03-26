<?php
################################
# OBJETIVO: CALCULADORA CON PHP Y HTML
# AUTOR: CARLOS ENRIQUE MICHEL FIGUEROA
# FECHA: 26/03/2025
# VERSION: 1.0
################################

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    function sacarResultado($operacion) {
        try {
            // Evaluar la operación usando eval (manejar cuidadosamente)
            eval("\$resultado = " . $operacion . ";");
            return $resultado;
        } catch (Exception $e) {
            return "Error en la operación";
        }
    }

    if (isset($_POST["entrada"])) {
        $entrada = $_POST["entrada"];
        $resultado = sacarResultado($entrada);
        echo json_encode(["resultado" => $resultado]);
    }
}

?>