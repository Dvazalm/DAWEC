## 🤔 Análisis del problema
```
-> Se requiere realizar los siguientes ejercicios:

    ◽ Ejercicio 1: Cambio de Color con Botón

    ◽ Ejercicio 2: Calculadora de Área

    ◽ Ejercicio 3:  Listado Dinámico

    ◽ Ejercicio 4: Hover y Estilo Dinámico

    ◽ Ejercicio 5: Detección de Clics y Generación de XPath


```


## 🤓 Diseño de la solución
Para realizar este apartado de Tarea AVANZADA, lo primero que he hecho es leer el Boletín de Ejercicios y ponerme a hacer correctamente los
componentes.


## 💡 Pruebas

En este apartado voy a implementar todos los apartados anteriores, a hacer los ejercicios al completo y los gifs de cada
prueba.

![Fichero con las actividades en formato HTML](./fotos/Captura1.PNG)


### 🔰 Ejercicio 1 -  Cambio de Color con Botón
-> Objetivo: Familiarizarse con el uso de botones y scripts.

1. Crear una página web que contenga un botón etiquetado "Cambiar color".
2. Al hacer clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.

![Foto del ejercicio 1](./fotos/FotoEjer1.PNG)

En este ejercicio podemos observar como hago el uso de `{Math.floor(Math.random() * 256)}` para seleccionar un color aleatorio dentro del RGB y como uso el `document.*` para editar el **body** del HTML.


### 🔰 Ejercicio 2 - Calculadora de Área
-> Objetivo: Introducción al manejo de eventos y manipulación de elementos HTML.

1. Descripción del Ejercicio: Diseñar una página web con dos campos de entrada (input) para introducir el ancho y el alto de un rectángulo.
2. Acción al Clic del Botón: Al hacer clic en el botón etiquetado "Calcular Área", se calcula el área del rectángulo y se muestra el resultado en un elemento <p> en la página.

![Foto del ejercicio 2](./fotos/FotoEjer2.PNG)

Este ejercicio muestra cómo hago el uso de `document.getElementById()` para acmbiar el contenido del `p` con ID *resultado*.
Tambien podemos ver como es capaz de diferenciar entre un **cuadrado** y un **rectangulo**.




