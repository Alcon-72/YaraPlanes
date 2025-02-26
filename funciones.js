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
    }
    else {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, Completa la información.',
            icon: 'error',
            confirmButtonText:'Aceptar'
        })
    }
}

document.getElementById('boton').addEventListener('click', function() {
    window.location.href = 'https://alcon-72.github.io/Progresi-n-Generaci-n/';
});

function procesarPago() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
    
    if (/^\d{16}$/.test(numero) && /^\d{3}$/.test(cvv)) {
        procesarPago();
    }
    else {
        Swal.fire({
            title: '¡Felicidades!',
            text: 'Gracias por tu compra.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }
}
