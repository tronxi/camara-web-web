addEventListener('load', inicializarEventos, false);

function inicializarEventos()
{}
var actualizar = setInterval(function ()
{
    actualizarImagen()
}, 1500);

function actualizarImagen()
{
    var aleatorio = Math.ceil(Math.random()*100000);
    contenedor = document.getElementById("imagen");
    var src = "php/imagen_camara.png?'"+aleatorio+"'";
    imagen.src = src;
    imagen.width = screen.width;
    //imagen.height = 480;
    console.log(src);
}
