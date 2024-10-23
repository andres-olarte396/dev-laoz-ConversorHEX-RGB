function convertToRGB() {
    const hex = document.getElementById("hexInput").value;
    const rgb = hexToRgb(hex);
    if (rgb) {
        document.getElementById("output").innerText = "RGB: " + rgb;
    } else {
        document.getElementById("output").innerText = "Color HEX inválido.";
    }
}

function convertToHEX() {
    const rgb = document.getElementById("rgbInput").value;
    const hex = rgbToHex(rgb);
    if (hex) {
        document.getElementById("output").innerText = "HEX: " + hex;
    } else {
        document.getElementById("output").innerText = "Color RGB inválido.";
    }
}

function hexToRgb(hex) {
    const validHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const result = validHex.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

function rgbToHex(rgb) {
    const validRgb = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
    const result = validRgb.exec(rgb);
    return result ? "#" + componentToHex(result[1]) + componentToHex(result[2]) + componentToHex(result[3]) : null;
}

function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function updateColor() {
    const r = document.getElementById("redSlider").value;
    const g = document.getElementById("greenSlider").value;
    const b = document.getElementById("blueSlider").value;

    // Actualiza el valor de cada etiqueta
    document.getElementById("redValue").innerText = r;
    document.getElementById("greenValue").innerText = g;
    document.getElementById("blueValue").innerText = b;

    // Cambia el fondo del área de previsualización
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById("colorPreview").style.backgroundColor = rgbColor;
    document.getElementById("output").innerText = rgbColor;

    // Generar las paletas
    generatePalettes(r, g, b);
}

// Funciones para generar las paletas de colores
function generatePalettes(r, g, b) {
    const complementary = getComplementaryColors(r, g, b);
    const monochromatic = getMonochromaticColors(r, g, b);
    const analogous = getAnalogousColors(r, g, b);

    displayPalette(complementary, "complementaryPalette");
    displayPalette(monochromatic, "monochromaticPalette");
    displayPalette(analogous, "analogousPalette");
}

function displayPalette(colors, elementId) {
    const paletteDiv = document.getElementById(elementId);
    paletteDiv.innerHTML = "";  // Limpiar la paleta actual

    colors.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.className = "color-sample";
        colorDiv.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
        paletteDiv.appendChild(colorDiv);
    });
}

// Obtener 6 colores complementarios
function getComplementaryColors(r, g, b) {
    const colors = [];
    for (let i = 0; i < 6; i++) {
        colors.push({ r: (255 - r + i * 20) % 256, g: (255 - g + i * 20) % 256, b: (255 - b + i * 20) % 256 });
    }
    return colors;
}

// Obtener 6 colores monocromáticos (ajustando el brillo)
function getMonochromaticColors(r, g, b) {
    const colors = [];
    for (let i = 0; i < 6; i++) {
        colors.push({
            r: Math.min(255, r + i * 20),
            g: Math.min(255, g + i * 20),
            b: Math.min(255, b + i * 20)
        });
    }
    return colors;
}

// Obtener 6 colores análogos
function getAnalogousColors(r, g, b) {
    const colors = [];
    for (let i = 0; i < 6; i++) {
        colors.push({
            r: (r + i * 20) % 256,
            g: (g + i * 20) % 256,
            b: (b + i * 20) % 256
        });
    }
    return colors;
}