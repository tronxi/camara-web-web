addEventListener('load', inicializarEventos, false);

function inicializarEventos()
{}
var actualizar = setInterval(function ()
{
    actualizarImagen()
}, 100);

function actualizarImagen()
{
    var aleatorio = Math.ceil(Math.random()*100);
    contenedor = document.getElementById("contenedorImagen");
    var src = "php/imagen_camara.png?'"+aleatorio+"'";
    contenedor.innerHTML = "<img src='"+src+"' class='img-thumbnail' alt='error imagen' id='imagen'>";
    console.log(src);
}
