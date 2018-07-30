
<?php
    isset($_POST["imagen"]) || exit();
    $bytes = file_put_contents("imagen_camara.png", base64_decode($_POST["imagen"]));
    echo json_encode($bytes);
?>