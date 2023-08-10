/* VARIABLES DE REFERENCIA DOM */

// 1. Seleccionar el formulario de inicio de sesión
const iniciarSesion = document.querySelector("#inicio");

// Poner constante global paraa que se pueda usar en todos los ambitos
let usuarioEncontrado = null;


/* EVENTO CREADOR DE VARIABLES */

// 2. Agregar un evento de escucha al envío del formulario, atención al submit
iniciarSesion.addEventListener("submit", function (event) {

    // Prevenir el comportamiento predeterminado del formulario (recarga de la página)

    event.preventDefault();

    // 3. Obtener los valores de usuario y contraseña desde los elementos de entrada
    const usuarioIngresado = event.target.user.value;
    const passIngresado = event.target.pass.value;


/* VERIFICACION EN LA BD */

    // 4. Utilizar el método 'find' para ver si el usuario ingresado esta en BD
    usuarioEncontrado = cuentas.find(usuario => usuario.name === usuarioIngresado && usuario.pass === passIngresado);

    
/* CONDICIOALES */

    // Verificar si se encontró un usuario válido
    if (usuarioEncontrado) {
        // Mostrar un mensaje de éxito y mostrar el formulario de operaciones
        alert("¡Estás dentro!");
        mostrarFormularioOperaciones();
    } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        alert("Contraseña incorrecta, verifica tu contraseña");
    }
});

