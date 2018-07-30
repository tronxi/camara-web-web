addEventListener('load', inicializarEventos, false);

function inicializarEventos()
{}
var actualizar = setInterval(function ()
{
	actualizar()
}, 100);

function actualizar()
{
    imagen = document.getElementById("imagen");
    imagen.src = "php/imagen_camara.png";
}
