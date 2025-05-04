
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el botón Home
    const homeButton = document.getElementById("home-button");
	//Botones de los cuadros
	const cuadro1 = document.getElementById('cuadro1');
	const cuadro2 = document.getElementById('cuadro2');
	const cuadro3 = document.getElementById('cuadro3');
	const cuadro4 = document.getElementById('cuadro4');
	//Header Pages
	const aboutusbutton = document.getElementById('aboutus-button');

//Funcionalidad de los botones de la barra de arriba (Home y etc)
homeButton.addEventListener('click', () => {
        window.location.href = "index.html"; // Cambia "index.html" a la URL correspondiente
    });
aboutusbutton.addEventListener('click', () => {
        window.location.href = "aboutus.html";
    });
		
//Funcion para abrir los links de las paginas de los cuadros
function abrirPagina(url) {
    window.location.href = url;
}
cuadro2.addEventListener('click', () => {
    abrirPagina("cuadro2.html"); 
});

cuadro1.addEventListener('click', () => {
    abrirPagina("cuadro1.html"); 
});

cuadro3.addEventListener('click', () => {
    abrirPagina("cuadro3.html"); 
});

cuadro4.addEventListener('click', () => {
    abrirPagina("cuadro4.html"); 
});

});