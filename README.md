# Conversor de Colores HEX ↔ RGB/HSLA con Generación de Paletas

Este proyecto es una herramienta interactiva que permite convertir colores entre los formatos HEX y RGB/HSLA, además de generar paletas de colores dinámicas (complementarios, monocromáticos y análogos) basadas en un color seleccionado. Ideal para diseñadores web y desarrolladores que trabajan con CSS.

## Características

- **Conversión entre HEX y RGB**: Ingresa un color en formato HEX o RGB y obtén la conversión automática entre ambos formatos.
- **Generación de Paletas de Colores**:
  - **Paleta de colores complementarios**: Se generan 6 colores que complementan al color seleccionado.
  - **Paleta de colores monocromáticos**: Se generan 6 variaciones del color seleccionado, ajustando su brillo.
  - **Paleta de colores análogos**: Se generan 6 colores análogos al color base.
- **Controles deslizantes RGB**: Ajusta los valores de Rojo, Verde y Azul (RGB) mediante sliders para generar nuevos colores de forma interactiva.
- **Vista previa de color**: Observa el color generado en tiempo real mientras ajustas los controles deslizantes.

## Uso

### Conversión de Colores

1. **Conversión de HEX a RGB**:
   - Ingresa un valor en formato HEX (por ejemplo, `#ff5733`) en el campo correspondiente y presiona el botón "Convertir a RGB".
   - El resultado será mostrado en formato `rgb(r, g, b)`.

2. **Conversión de RGB a HEX**:
   - Ingresa un valor en formato RGB (por ejemplo, `rgb(255, 87, 51)`) y presiona el botón "Convertir a HEX".
   - El resultado será mostrado en formato HEX.

### Generación de Colores Dinámicos

1. **Uso de los controles deslizantes RGB**:
   - Ajusta los valores de Rojo (R), Verde (G) y Azul (B) con los sliders para generar un nuevo color.
   - El color generado se mostrará en la vista previa y su valor RGB aparecerá en la sección de resultados.

2. **Generación automática de paletas**:
   - Basado en el color generado con los sliders, se crean tres tipos de paletas:
     - **Complementaria**: Muestra 6 colores que son complementarios al color seleccionado.
     - **Monocromática**: Muestra 6 tonos basados en variaciones de brillo del color seleccionado.
     - **Análoga**: Muestra 6 colores análogos al color seleccionado, ajustando ligeramente los valores RGB.

## Requisitos del Proyecto

Este proyecto es una aplicación web simple basada en HTML, CSS y JavaScript. Solo necesitas un navegador web para ejecutarla.

## Instrucciones de Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/conversor-colores.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd conversor-colores
    ```

3. Abre el archivo `index.html` en tu navegador favorito.

    ```bash
    open index.html
    ```

## Capturas de Pantalla

### Conversor de Colores

![Conversión de colores](ruta/a/la/captura1.png)

### Controles Deslizantes RGB

![Controles RGB](ruta/a/la/captura2.png)

### Paletas de Colores

![Paletas de colores](ruta/a/la/captura3.png)

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar esta herramienta o agregar nuevas funcionalidades, no dudes en hacer un fork de este repositorio y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
