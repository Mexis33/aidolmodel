// Rotación de imágenes en "Después"
const rotatingImage = document.getElementById("rotating-image");
const images = ["prenda-despues1.jpg", "prenda-despues2.jpg", "prenda-despues3.jpg"]; // Nombres de las imágenes
let currentIndex = 0;

function rotateImages() {
  currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice
  rotatingImage.src = images[currentIndex]; // Cambia la fuente de la imagen
}

// Cambiar imagen cada 3 segundos
setInterval(rotateImages, 3000);

