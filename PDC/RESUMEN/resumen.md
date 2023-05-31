## Fundamentos

Les comparto los fundamentos que aprendí en el curso de PWDC (Programación Web desde Cero) con Egg

Estará desglosado de acuerdo a cada lenguaje, de la siguiente manera, si quieres saltar a algun tema en especifico solo selecciona el indice
- ![Primeros pasos](https://github.com/LoboGuardian/Egg/blob/main/PDC/RESUMEN/resumen.md#primeros-pasos)
- ![HTML](https://github.com/LoboGuardian/Egg/blob/main/PDC/RESUMEN/resumen.md#html)
- ![CSS](https://github.com/LoboGuardian/Egg/blob/main/PDC/RESUMEN/resumen.md#css)
- ![JavaScript (JS)](https://github.com/LoboGuardian/Egg/PDC/RESUMEN/resumen.md#javascript-js)

## Primeros pasos

Para escribir y editar código de programación, normalmente se utilizan editores de código. Los editores de código son herramientas de software diseñadas específicamente para ayudar a los programadores a escribir y editar código de programación de manera más eficiente.

Algunos ejemplos de editores de código populares son Visual Studio Code, Sublime Text, Atom, y Notepad++.




## HTML

Para iniciar y terminar un elemento en `HTML` se utiliza una etiqueta de inicio y una etiqueta de cierre.

La etiqueta de inicio se escribe con el nombre del elemento encerrado entre corchetes angulares (<>) y puede tener atributos opcionales que se indican dentro de la misma etiqueta. Por ejemplo, la etiqueta de inicio para un párrafo es `<p>`.

La etiqueta de cierre se escribe con el nombre del elemento precedido por una barra diagonal (/) y encerrado entre corchetes angulares. Por ejemplo, la etiqueta de cierre para un párrafo es `</p>`.

Por lo tanto, un elemento en HTML se escribe utilizando la etiqueta de inicio, el contenido del elemento y la etiqueta de cierre, como en el siguiente ejemplo:
```
<p>Este es un párrafo de ejemplo.</p>
```

Es importante notar que algunos elementos en HTML no requieren una etiqueta de cierre, como los elementos de imagen, salto de línea, entre otros. En estos casos, la etiqueta de inicio se cierra con un slash justo antes del corchete angular de cierre, como en el siguiente ejemplo:
```
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

**Estructura**

Recordemos que la estructura del `HTML` es de la siguiente manera
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>title</title>
</head>
<body>
    Content
</body>
</html>
```

Donde:
- `<!DOCTYPE html>` se utiliza para especificar que el documento es un archivo HTML5 y ayuda a los navegadores a interpretar correctamente el código HTML.
- `<head>` en un documento HTML tiene el propósito de contener información meta y otros elementos que no se muestran directamente en la página web, pero que son importantes para el funcionamiento de la misma.
    - El título de la página, que se muestra en la pestaña del navegador y en los resultados de búsqueda.
    - Las etiquetas meta, que proporcionan información sobre la página, como el autor, la descripción, las palabras clave, entre otros.
    - Enlaces a archivos de estilo CSS, que se utilizan para dar estilo y formato al contenido de la página.
    - Enlaces a archivos de script JavaScript, que se utilizan para agregar interactividad y dinamismo a la página.
Además, la sección `<head>` también puede contener declaraciones que definen el tipo de documento y la versión de HTML que se está utilizando, como la siguiente línea:

- `body` es una palabra clave que define el estilo del borde, como "solid" (sólido), "dashed" (discontinuo), "dotted" (punteado), entre otros.

**Comentarios**

La forma correcta de agregar una etiqueta de comentario en el código HTML es utilizando la siguiente sintaxis:
```
<!-- Comentario -->
```

Los comentarios en HTML se utilizan para incluir notas o explicaciones en el código que no se mostrarán en la página web. Los comentarios pueden ser útiles para recordar la función de ciertas secciones del código, para indicar cambios que se han realizado o para dejar notas para otros desarrolladores que trabajen en el mismo proyecto.

Para agregar un comentario en HTML, se encierra el texto del comentario entre los caracteres `<!--" al inicio y "-->` al final. Todo lo que se encuentre dentro de estos caracteres se considerará un comentario y no se mostrará en la página web.

## CSS

En `CSS` se utiliza la sintaxis "propiedad: valor;". La propiedad es el nombre de la característica que se desea aplicar y el valor es el valor que se desea asignar a esa propiedad.
Por ejemplo, si se quiere aplicar el color rojo al texto de un elemento HTML, se puede utilizar la propiedad "color" y asignarle el valor "red", de la siguiente manera:
```
<p style="color: red;">Este es un texto en color rojo</p>
```
En este ejemplo, se está aplicando la propiedad "color" al elemento "p" y se le está asignando el valor "red". La propiedad y el valor se separan por dos puntos y se termina la declaración con un punto y coma (;).
Es importante mencionar que también se pueden aplicar propiedades CSS a través de un archivo externo de estilo o mediante un selector de clase o ID en el archivo HTML.

**Bordes**

La propiedad "border" permite establecer el ancho, el estilo y el color del borde de un elemento. La sintaxis para utilizar esta propiedad es la siguiente:
```
border: ancho estilo color;
```
Donde:
- "ancho" es un valor numérico que indica el grosor del borde en píxeles, em o alguna otra unidad de medida.
- "estilo" es una palabra clave que define el estilo del borde, como "solid" (sólido), "dashed" (discontinuo), "dotted" (punteado), entre otros.
- "color" es un valor que define el color del borde, puede ser un nombre de color, un valor RGB, un valor hexadecimal, entre otros.

Por ejemplo, para definir un borde sólido de color rojo con un grosor de 2 píxeles alrededor de un elemento, se podría utilizar la siguiente regla CSS:
```
border: 2px solid red;
```

Es importante mencionar que también se pueden utilizar propiedades separadas para definir el ancho, el estilo y el color del borde, como "border-width", "border-style" y "border-color".

**Media Queries**

Para cambia la dirección de los elementos flexibles se puede almacenar en una clase ".container" a una orientación de columna cuando el ancho de la pantalla es igual o menor a X (determinados) píxeles.

Por lo tanto, cuando la ventana del navegador tiene X píxeles de ancho o menos, todos los elementos dentro de la clase ".container" se mostrarán en una única columna en lugar de en una fila horizontal.

La propiedad "flex-direction" se utiliza para definir la dirección en la que se colocan los elementos flexibles dentro de un contenedor. Al establecer su valor en "column", se indica que los elementos se colocarán en una columna en lugar de en una fila.

Los media queries son una forma de aplicar estilos específicos a una página web en función de las características del dispositivo en el que se está mostrando. En este caso, el media query establece que las reglas de estilo dentro de él solo se aplicarán cuando el ancho de la pantalla sea igual o menor a X píxeles.
Es importante destacar que los media queries sí pueden afectar a las propiedades flexbox, como se demuestra en este ejemplo.


## JavaScript (JS)

JavaScript es un lenguaje de programación de alto nivel que se utiliza para crear y controlar elementos interactivos en una página web, como botones, menús desplegables, formularios y animaciones, entre otros.
A través de JavaScript, se pueden crear eventos que respondan a las acciones del usuario, como hacer clic en un botón o mover el cursor del mouse sobre un elemento, lo que permite agregar interactividad y dinamismo a las páginas web
