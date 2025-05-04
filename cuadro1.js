let indiceImagen = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll(".foto");
    const contenedor = document.querySelector(".contenedor-imagenes");
    const portfolio = document.getElementById("portfolio-button");
    // Incrementamos o decrementamos el índice de la imagen actual
    indiceImagen += direccion;

    // Si llegamos al final o al principio, reiniciamos el índice
    if (indiceImagen >= imagenes.length) {
        indiceImagen = 0;
    } else if (indiceImagen < 0) {
        indiceImagen = imagenes.length - 1;
    }

    // Mueve el contenedor de las imágenes para mostrar la imagen correcta
    contenedor.style.transform = `translateX(${-indiceImagen * 100}%)`;
}
// Cambia la imagen automáticamente cada 3 segundos
function iniciarCarruselAutomatico() {
    intervalID = setInterval(() => {
        cambiarImagen(1);
    }, 3000);  // Cambia cada 3 segundos
}

// Pausa el carrusel automático
function pausarCarrusel() {
    clearInterval(intervalID);
}

// Iniciar el carrusel al cargar la página
window.onload = function() {
    iniciarCarruselAutomatico();
}

// Pausar cuando el mouse entra en el contenedor de imágenes
document.querySelector(".contenedor-imagenes").addEventListener("mouseenter", pausarCarrusel);

// Reanudar cuando el mouse sale del contenedor de imágenes
document.querySelector(".contenedor-imagenes").addEventListener("mouseleave", iniciarCarruselAutomatico);