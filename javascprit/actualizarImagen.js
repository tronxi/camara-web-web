addEventListener('load', inicializarEventos, false);

function inicializarEventos()
{}
var actualizar = setInterval(function ()
{
    actualizarImagen()
}, 1000);

function actualizarImagen()
{
    var aleatorio = Math.ceil(Math.random()*100000);
    contenedor = document.getElementById("imagen");
    var src = "php/imagen_camara.png?'"+aleatorio+"'";
    imagen.src = src;
    console.log(src);
}
