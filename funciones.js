function mostrarFormulario() {
    var modal = document.getElementById("miModal");
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
}

function validarFormulario(event) {
    event.preventDefault();
    var numero = document.getElementById("numero").value;
    var cvv = document.getElementById("cvv").value;
    
    if (/^\d{16}$/.test(numero) && /^\d{3}$/.test(cvv)) {
        procesarPago();
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, introduce un numero correcto.',
            icon: 'error',
            confirmButtonText:'Aceptar'
        })
    }
}

function procesarPago() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
    Swal.fire({
        title: '¡Felicidades!',
        text: 'Gracias por tu compra.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

window.onclick = function(event) {
    var modal = document.getElementById("miModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}