/* VARIABLES DE REFERENCIA DOM */

const seleccionarOperacion = document.querySelector("#operaciones");
const info = document.querySelector("#info");


/* FUNCIONES DE CAMBIO DE PANTALLA */

function mostrarFormularioOperaciones() {
    iniciarSesion.style.display = "none";
    seleccionarOperacion.style.display = "block";
}

function exitLog() {
    iniciarSesion.style.display = "block";
    seleccionarOperacion.style.display = "none";
    
}   


/* EVENTO SELECCIONADOR DE OPCIONES */

seleccionarOperacion.addEventListener("click", function (event) {
    event.preventDefault();

    // Aqui van las validaciones antes para no permitir que se saque mas de lo necesario


/* REGLAS DE LIMITES */

    if (usuarioEncontrado.saldo < 10) {
        alert("No puedes tener menos de $10");
        return;
    }

    if (usuarioEncontrado.saldo > 990) {
        alert("No puedes tener más de $990");
        return;
    }

/* OPCIONES */


// Consultar el saldo
    if (event.target.id === "consulta") {
        alert(`Saldo actual: ${usuarioEncontrado.saldo} pesos `);
        info.textContent = `${usuarioEncontrado.name} Tu saldo actual es de: ${usuarioEncontrado.saldo} pesos`;

// Ingresar saldo
    } else if (event.target.id === "ingresar") {
        const montoIngresado = parseFloat(prompt("Ingrese el monto a ingresar:"));
        if (!isNaN(montoIngresado) && montoIngresado > 0) {
            const nuevoSaldo = usuarioEncontrado.saldo + montoIngresado;
            if (nuevoSaldo <= 990) {
                usuarioEncontrado.saldo = nuevoSaldo;
                alert(`Has ingresado $${montoIngresado}, Saldo actual: ${usuarioEncontrado.saldo} pesos`);
                info.textContent = `${usuarioEncontrado.name} Tu saldo actual es de: ${usuarioEncontrado.saldo} pesos`;
            } else {
                alert("No puedes tener más de $990");
            }
        } else {
            alert("Monto inválido");
        }

// Retirar saldo
    } else if (event.target.id === "retirar") {
        const montoRetirar = parseFloat(prompt("Ingrese el monto a retirar:"));
        if (!isNaN(montoRetirar) && montoRetirar > 0 && montoRetirar <= usuarioEncontrado.saldo) {
            const nuevoSaldo = usuarioEncontrado.saldo - montoRetirar;
            if (nuevoSaldo >= 10) {
                usuarioEncontrado.saldo = nuevoSaldo;
                alert(`Has retirado $${montoRetirar}, Saldo actual: ${usuarioEncontrado.saldo} pesos`);
                info.textContent = `${usuarioEncontrado.name} Tu saldo actual es de: ${usuarioEncontrado.saldo} pesos`;
            } else {
                alert("No puedes tener menos de $10");
            }
        } else {
            alert("Monto inválido o saldo insuficiente");
        }
    } 

// Salir
    else if (event.target.id = "salir") {
        exitLog()
        location.reload()
    }
});




