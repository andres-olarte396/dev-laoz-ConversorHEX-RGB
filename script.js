function convertToRGB() {
  const hex = getInputValue("hexInput");
  const rgb = hexToRgb(hex);
  updateOutput(rgb ? `RGB: ${rgb}` : "Color HEX inválido.", rgb);
  setInputValue("rgbInput", rgb);
  if (rgb) updateSlidersFromRGB(rgb); // Actualiza sliders
}

function convertToHEX() {
  const rgb = getInputValue("rgbInput");
  const hex = rgbToHex(rgb);
  updateOutput(hex ? `HEX: ${hex}` : "Color RGB inválido.", hex);
  setInputValue("hexInput", hex);
  if (hex) updateSlidersFromRGB(rgb); // Actualiza sliders
}

function updateSlidersFromRGB(rgb) {
  const result = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.exec(rgb);
  if (result) {
    const r = parseInt(result[1]);
    const g = parseInt(result[2]);
    const b = parseInt(result[3]);

    document.getElementById("redSlider").value = r;
    document.getElementById("greenSlider").value = g;
    document.getElementById("blueSlider").value = b;

    document.getElementById("redValue").innerHTML = r;
    document.getElementById("greenValue").innerHTML = g;
    document.getElementById("blueValue").innerHTML = b;

    generatePalettes(r, g, b);
  }
}

function updateOutput(text, color) {
  const outputElement = document.getElementById("output");
  outputElement.innerText = text;
  outputElement.style.backgroundColor = color || "transparent";
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function setInputValue(id, value) {
  document.getElementById(id).value = value || "";
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${[result[1], result[2], result[3]].map((v) => parseInt(v, 16)).join(", ")})`
    : null;
}

function rgbToHex(rgb) {
  const result = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.exec(rgb);
  return result
    ? "#" + result.slice(1, 4).map(componentToHex).join("")
    : null;
}

function componentToHex(c) {
  const hex = parseInt(c).toString(16);
  return hex.padStart(2, "0");
}

function updateColor() {
  const r = getInputValue("redSlider");
  const g = getInputValue("greenSlider");
  const b = getInputValue("blueSlider");

  ["red", "green", "blue"].forEach((color) =>
    setInnerText(`${color}Value`, getInputValue(`${color}Slider`))
  );

  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  updateOutput(rgbColor, rgbColor);
  setInputValue("rgbInput", rgbColor);
  setInputValue("hexInput", rgbToHex(rgbColor));

  generatePalettes(parseInt(r), parseInt(g), parseInt(b));
}

function setInnerText(id, text) {
  document.getElementById(id).innerText = text;
}

function generatePalettes(r, g, b) {
  displayPalette(getComplementaryColors(r, g, b), "complementaryPalette");
  displayPalette(getMonochromaticColors(r, g, b), "monochromaticPalette");
  displayPalette(getAnalogousColors(r, g, b), "analogousPalette");
}

function displayPalette(colors, elementId) {
  const paletteDiv = document.getElementById(elementId);
  paletteDiv.innerHTML = "";

  colors.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.className = "color-sample";
    colorDiv.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    colorDiv.innerText = rgbToHex(`rgb(${color.r}, ${color.g}, ${color.b})`);
    paletteDiv.appendChild(colorDiv);
  });
}

function getComplementaryColors(r, g, b) {
  const t = 20;
  let result = [
    getInvertedColor(r - t, g - t, b - t),
    getInvertedColor(r, g, b),
    getInvertedColor(r + t, g + t, b + t)
  ];
  return result;
}

function getMonochromaticColors(r, g, b) {
  const t = 20;
  let result = [
    adjustBrightness(r, g, b, -t),
    { r, g, b },
    adjustBrightness(r, g, b, t)
  ];
  return result;
}

function getAnalogousColors(r, g, b) {
  const t = 65;
  let result = [
    adjustColor(r - t, g - t, b - t),
    { r, g, b },
    adjustColor(r + t, g + t, b + t)
  ];
  return result;
}

function getInvertedColor(r, g, b) {
  return {
    r: 255 - (r % 255), 
    g: 255 - (g % 255), 
    b: 255 - (b % 255)};
}

function adjustBrightness(r, g, b, amount) {
  return {
    r: Math.max(0, r + amount), 
    g: Math.max(0, g + amount), 
    b: Math.max(0, b + amount)};
}

function adjustColor(r, g, b) {
  return {
    r: (r < 0 ? 255 + r : r) % 255,
    g: (g < 0 ? 255 + g : g) % 255,
    b: (b < 0 ? 255 + b : b) % 255};
}

// Event listeners para actualizar sliders al cambiar los inputs
document.getElementById("rgbInput").addEventListener("input", convertToHEX);
document.getElementById("hexInput").addEventListener("input", convertToRGB);
