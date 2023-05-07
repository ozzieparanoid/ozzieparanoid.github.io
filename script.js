const pixelGrid = document.getElementById("pixel-grid");
const colorPicker = document.getElementById("color-picker");

let currentColor = "#ffffff";

// Crea los 100K píxeles
for (let i = 0; i < 100000; i++) {
  const pixel = document.createElement("button");
  pixel.className = "pixel";
  pixel.addEventListener("click", function() {
    this.style.backgroundColor = currentColor;
  });
  pixelGrid.appendChild(pixel);
}

// Cambia el color actual
function setColor(color) {
  currentColor = color;
}
