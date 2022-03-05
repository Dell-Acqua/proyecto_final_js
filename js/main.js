const clickBoton = document.querySelectorAll('.boton')
const tbody = document.querySelector('.tbody')
const btnLimpiarCarrito = document.querySelector('.btn-vaciar-carrito')

let carrito = []

clickBoton.forEach(btn => {
    btn.addEventListener('click', agregarItem)
})

function agregarItem(e) {
    const boton = e.target
    const item = boton.closest('.card')
    const itemTitulo = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.img-item').src;


    const nuevoItem = {
        titulo: itemTitulo,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }

    agregarItemCarrito(nuevoItem)
}

function agregarItemCarrito(nuevoItem) {

    Swal.fire({
        title: 'Producto Añadido',
        text: 'Se agrego el producto al carrito correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    

    const inputElemento = tbody.getElementsByClassName('input_elemento')
    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].titulo.trim() === nuevoItem.titulo.trim() ){
            carrito[i].cantidad ++;
            const inputValue = inputElemento[i]
            inputValue.value++;
            compraTotal()
            return null;
        }
    }

    carrito.push(nuevoItem)
    renderCarrito()
}

function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const content = `                    
         <th scope="row"><img src="../img/vineta4.png" alt="logo hoja verde"></th>
        <td class="tabla_productos">
        <img src=${item.img}  alt="">
            <h6 class="titulo">${item.titulo}</h6>
        </td>
        <td class="tabla_precio"><p>${item.precio}</p></td>
        <td class="tabla_cantidad">
            <input type="number" min="1" value=${item.cantidad} class="input_elemento">
            <button class="eliminar btn btn-danger">x</button>
        </td>
      `
      tr.innerHTML = content;
      tbody.append(tr)

      tr.querySelector('.eliminar').addEventListener('click', borrarItemCarrito)
      tr.querySelector('.input_elemento').addEventListener('change', sumaCantidad)
    })
    compraTotal()
}

function compraTotal() {
    let total = 0;
    const carritoTotal = document.querySelector('.carritoTotal')

    carrito.forEach((item) => {
        const precio = parseInt(item.precio.replace("$", ''))
        total = total + precio*item.cantidad
    })
    carritoTotal.innerHTML = `Total $${total}`
    agregarLocalStorage()
}

function borrarItemCarrito(e){
    const botonBorrar = e.target
    const tr = botonBorrar.closest('.itemCarrito')
    const titulo = tr.querySelector('.titulo').textContent
    for(let i=0; i<carrito.length ; i++) {
        if(carrito[i].titulo.trim() === titulo.trim()) {
            carrito.splice(i,1)
        }
    }
    Swal.fire({
        title: 'ATENCION',
        text: 'Se removio el producto del carrito',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
    tr.remove()
    compraTotal()
}

function sumaCantidad(e) {
    const sumaInput = e.target
    const tr = sumaInput.closest('.itemCarrito');
    const titulo = tr.querySelector('.titulo').textContent;
    carrito.forEach(item => {
        if(item.titulo.trim() === titulo) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            compraTotal()
        }
    })

}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage){
        carrito = storage;
        renderCarrito()
    }
}

function agregarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

btnLimpiarCarrito.addEventListener("click", limpiarCarrito);

function limpiarCarrito() {
    Swal.fire({
        title: 'ATENCION',
        text: 'Se vacio el carrito correctamente',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
    carrito = []
    renderCarrito();
    localStorage.clear();
}

