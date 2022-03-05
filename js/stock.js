const tabla = document.querySelector('#tabla-control-stock tbody')
const tabla2 = document.querySelector('#tabla2 tbody')
const stockTotal = document.querySelector('.total_existencias')
let total = 0;
let suma = 0;

controlStock();


function controlStock() {
    fetch('../json/productos.json')
        .then(respuesta => respuesta.json())
        .then(productos => {
            productos.forEach(producto => {
                const row = document.createElement('tr');
                row.classList.add('itemMod')
                row.innerHTML += `
                <th scope="row">${producto.id}</th>
                <td class="nombre">${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td class="stock">${producto.stock} u.</td>
                <td class="tabla_productos"><img src=${producto.imagen} alt=""></td>
                <td><input type="number" class="modificarStock"><button type="button" class="btn btn-success" id="btn">Modificar Stock</button></td>`;

                    tabla.appendChild(row);
                    total += producto.stock;

                    stockTotal.innerHTML = `${total} u.`
                                
                    tabla.appendChild(row);

                    //Para modificar stock manual llamo a funcion
                    row.querySelector('.btn').addEventListener('click', cambioStock);

                    //Funcion para modificar stock manualmente
                    function cambioStock(e) {
                                const sumaInput = row.querySelector('.modificarStock')
                                const tr = sumaInput.closest('.itemMod');                               
                                const titulo = tr.querySelector('.nombre').textContent;
                                const stockModif = tr.querySelector('.stock');
                                let sumaInput2 = parseInt(sumaInput.value)   

 
                                if (sumaInput2) {
                                    if (producto.stock_ok || sumaInput2 > 0) {
                                        bandera = producto.stock + sumaInput2;
                                        if (sumaInput2 < 0 && bandera <0 ) {
                                            Swal.fire({
                                                title: 'ATENCION',
                                                text: 'La venta que desea realizar es mayor al stock disponible, el maximo es: '+producto.stock,
                                                icon: 'warning',
                                                confirmButtonText: 'OK'
                                              })
                                        } else {

                                            if (producto.nombre.trim() === titulo) {
                                            let stockActual = parseInt(producto.stock)
                                                suma = stockActual + sumaInput2;
                                                producto.stock = suma;
                                                stockModif.innerHTML = `${producto.stock} u.`;
                                                producto.stock <=0 ? producto.stock_ok = false : producto.stock_ok = true;
                                                total += sumaInput2;
                                                stockTotal.innerHTML = `${total} u.`
                                            }
                                        }
                                    } else {
                                        Swal.fire({
                                          title: 'ATENCION',
                                          text: 'Hay quiebre de stock de '+producto.nombre +', no es posible la venta',
                                          icon: 'error',
                                          confirmButtonText: 'OK'
                                        })
                                      }
                                }


                    }
            }) ;
        })
}


