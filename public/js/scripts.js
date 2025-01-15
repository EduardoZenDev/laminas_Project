// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón por su id
    const boton = document.getElementById("mi-boton");

    // Agrega un evento de clic al botón
    boton.addEventListener("click", function () {
        // Redirige a la página "hola-mundo"
        window.location.href = "/application/hello-world";
    });
});
