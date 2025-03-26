# Calculadora Python

Este proyecto es una calculadora básica implementada en Python utilizando el framework Flask. La aplicación permite realizar operaciones matemáticas simples a través de una interfaz web.

## Estructura del Proyecto

```
calculadora-python
├── src
│   ├── main.py          # Punto de entrada de la aplicación
│   ├── templates
│   │   └── index.html   # HTML de la calculadora
│   └── static
│       └── styles.css   # Estilos CSS para la calculadora
├── requirements.txt      # Dependencias del proyecto
└── README.md             # Documentación del proyecto
```

## Requisitos

Asegúrate de tener Python 3.x instalado en tu sistema. También necesitarás instalar Flask y otras dependencias listadas en `requirements.txt`.

## Instalación

1. Clona este repositorio o descarga los archivos.
2. Navega al directorio del proyecto.
3. Crea un entorno virtual (opcional pero recomendado):
   ```
   python -m venv venv
   source venv/bin/activate  # En Linux o Mac
   venv\Scripts\activate     # En Windows
   ```
4. Instala las dependencias:
   ```
   pip install -r requirements.txt
   ```

## Ejecución

Para ejecutar la aplicación, utiliza el siguiente comando:

```
python src/main.py
```

Luego, abre tu navegador y ve a `http://127.0.0.1:5000` para acceder a la calculadora.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de hacer un fork y enviar un pull request.