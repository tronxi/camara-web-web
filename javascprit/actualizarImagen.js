addEventListener('load', inicializarEventos, false);

function inicializarEventos()
{}
var actualizar = setInterval(function ()
{
	actualizarImagen()
}, 100);

function actualizarImagen()
{
    imagen = document.getElementById("imagen");
    imagen.src = "php/imagen_camara.png";
}
