addEventListener('load', inicializarEventos, false);

function inicializarEventos()
{}
var actualizar = setInterval(function ()
{
    actualizarImagen()
    console.log("actualizando");
}, 100);

function actualizarImagen()
{
    var aleatorio = Math.ceil(Math.random()*100);
    contenedor = document.getElementById("contenedorImagen");
    contenedor.innerHTML = "<img src='php/imagen_camara.png?'+aleatorio+'' class='img-thumbnail' alt='error imagen' id='imagen'>";
}
