document.getElementById('form-login').addEventListener("submit", (e)=> {
    e.preventDefault();

    let usuario = document.getElementById('username');
    let contrasena = document.getElementById('exampleInputPassword1');

    if (usuario.value === 'azittro' && contrasena.value === 'lola2022') {
        window.location.href = "../pages/staff.html";
    } else {
        console.log(usuario.value)
        console.log(contrasena.value)
        Swal.fire({
            title: 'ERROR',
            text: 'El usuario ingresado no es correcto, por favor intente nuevamente',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
})