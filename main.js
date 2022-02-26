//OBJETOS
let lechuga = {item_id: 1, producto: "Lechuga", precio_lechuga: 350, stock_lechuga: 150, stock_ok_lechuga:true}
let rucula = {item_id: 2, producto: "Rucula", precio_rucula: 450, stock_rucula: 180, stock_ok_rucula:true}
let albahaca = {item_id: 3, producto: "Albahaca", precio_albahaca: 150, stock_albahaca: 40, stock_ok_albahaca:true}
let tomate = {item_id: 4, producto: "Tomate", precio_tomate: 550, stock_tomate: 80, stock_ok_tomate:true}

//DESESTRUCTURACION Y ALIAS
let {stock_lechuga : stockLechugas, stock_ok_lechuga: stockOKLechuga} = lechuga
let {stock_rucula : stockRuculas, stock_ok_rucula: stockOKRucula} = rucula
let {stock_albahaca: stockAlbahacas, stock_ok_albahaca: stockOKAlbahaca} = albahaca
let {stock_tomate: stockTomates, stock_ok_tomate: stockOKTomate} = tomate

//LOCALSTORAGE
let lechugas = localStorage.setItem('lechuga' , stockLechugas);
let ruculas = localStorage.setItem('rucula' , stockRuculas);
let albahacas = localStorage.setItem('albahaca' , stockAlbahacas);
let tomates = localStorage.setItem('tomate' , stockTomates);

let stockDeLechugas = localStorage.getItem('lechuga');
let stockDeRuculas = localStorage.getItem('rucula');
let stockDeAlbahacas = localStorage.getItem('albahaca');
let stockDeTomates = localStorage.getItem('tomate');

//MANEJO DEL DOM
let mostrarStockLechugas = document.getElementById("stockLechugas");
let mostrarStockRuculas = document.getElementById("stockRuculas");
let mostrarStockAlbahacas = document.getElementById("stockAlbahacas");
let mostrarStockTomates = document.getElementById("stockTomates");

mostrarStockLechugas.innerText = stockDeLechugas;
mostrarStockRuculas.innerText = stockDeRuculas;
mostrarStockAlbahacas.innerText = stockDeAlbahacas;
mostrarStockTomates.innerText = stockDeTomates;


let botonLechugas = document.getElementById("btnLechugas");
let botonRuculas = document.getElementById("btnRuculas");
let botonAlbahacas = document.getElementById("btnAlbahacas");
let botonTomates = document.getElementById("btnTomates");
let botonLimpiarStock = document.getElementById("btnLimpiarStock");



//EVENTOS DE LOS BOTONES
botonLechugas.addEventListener("click", modificarStockLechugas);
botonRuculas.addEventListener("click", modificarStockRuculas);
botonAlbahacas.addEventListener("click", modificarStockAlbahacas);
botonTomates.addEventListener("click", modificarStockTomates);
botonLimpiarStock.addEventListener("click", limpiarStock);


//FUNCIONES
function modificarStockLechugas (){
    let inputValue = parseInt(document.getElementById("modificarStockLechugas").value);
    if (inputValue) {
    if (stockOKLechuga || inputValue > 0){
      bandera = stockLechugas + inputValue
      if (inputValue < 0 && bandera < 0) {
        Swal.fire({
          title: 'ATENCION',
          text: 'La venta que desea realizar es mayor al stock disponible, el maximo es: '+stockLechugas,
          icon: 'warning',
          confirmButtonText: 'OK'
        })
      } else {
        stockLechugas += inputValue;
        lechugas = localStorage.setItem('lechuga' , stockLechugas);
        stockDeLechugas = localStorage.getItem('lechuga');
        mostrarStockLechugas.innerText = stockLechugas;
        stockLechugas<=0 ? stockOKLechuga = false : stockOKLechuga = true
      }
    } else {
      Swal.fire({
        title: 'ATENCION',
        text: 'Hay quiebre de stock de Lechugas, no es posible la venta',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }
}

function modificarStockRuculas () {
    let inputValue = parseInt(document.getElementById("modificarStockRuculas").value);
    if (inputValue) {
      if (stockOKRucula || inputValue > 0){
        bandera = stockRuculas + inputValue
        if (inputValue < 0 && bandera < 0) {
          Swal.fire({
            title: 'ATENCION',
            text: 'La venta que desea realizar es mayor al stock disponible, el maximo es: '+stockRuculas,
            icon: 'warning',
            confirmButtonText: 'OK'
          })
        } else {
          stockRuculas += inputValue;
          ruculas = localStorage.setItem('rucula' , stockRuculas);
          stockDeRuculas = localStorage.getItem('rucula');
          mostrarStockRuculas.innerText = stockRuculas;
          stockRuculas<=0 ? stockOKRucula = false : stockOKRucula = true
        }
      } else {
        Swal.fire({
          title: 'ATENCION',
          text: 'Hay quiebre de stock de Ruculas, no es posible la venta',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }

function modificarStockAlbahacas () {
    let inputValue = parseInt(document.getElementById("modificarStockAlbahacas").value);
    if (inputValue) {
      if (stockOKAlbahaca || inputValue > 0){
        bandera = stockAlbahacas + inputValue
        if (inputValue < 0 && bandera < 0) {
          Swal.fire({
            title: 'ATENCION',
            text: 'La venta que desea realizar es mayor al stock disponible, el maximo es: '+stockAlbahacas,
            icon: 'warning',
            confirmButtonText: 'OK'
          })
        } else {
          stockAlbahacas += inputValue;
          albahacas = localStorage.setItem('albahaca' , stockAlbahacas);
          stockDeAlbahacas = localStorage.getItem('albahaca');
          mostrarStockAlbahacas.innerText = stockAlbahacas;
          stockAlbahacas<=0 ? stockOKAlbahaca = false : stockOKAlbahaca = true
        }
      } else {
        Swal.fire({
          title: 'ATENCION',
          text: 'Hay quiebre de stock de Albahacas, no es posible la venta',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }

function modificarStockTomates () {
    let inputValue = parseInt(document.getElementById("modificarStockTomates").value);
    if (inputValue) {
      if (stockOKTomate || inputValue > 0){
        bandera = stockTomates + inputValue
        if (inputValue < 0 && bandera < 0) {
          Swal.fire({
            title: 'ATENCION',
            text: 'La venta que desea realizar es mayor al stock disponible, el maximo es: '+stockTomates,
            icon: 'warning',
            confirmButtonText: 'OK'
          })
        } else {
          stockTomates += inputValue;
          tomates = localStorage.setItem('tomate' , stockTomates);
          stockDeTomates = localStorage.getItem('tomate');
          mostrarStockTomates.innerText = stockTomates;
          stockTomates<=0 ? stockOKTomate = false : stockOKTomate = true
        }
      } else {
        Swal.fire({
          title: 'ATENCION',
          text: 'Hay quiebre de stock de Tomates, no es posible la venta',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }

function limpiarStock () {
  stockLechugas = 0;
  stockRuculas = 0;
  stockAlbahacas = 0;
  stockTomates = 0;
  stockOKLechuga = false;
  stockOKRucula = false;
  stockOKAlbahaca = false;
  stockOKTomate = false;
  stockDeLechugas = localStorage.getItem('lechuga');
  mostrarStockLechugas.innerText = stockLechugas; 
  stockDeRuculas = localStorage.getItem('rucula');
  mostrarStockRuculas.innerText = stockRuculas;
  stockDeAlbahacas = localStorage.getItem('albahaca');
  mostrarStockAlbahacas.innerText = stockAlbahacas;
  stockDeTomates = localStorage.getItem('tomate');
  mostrarStockTomates.innerText = stockTomates;
  localStorage.clear();
}


//Paso a JSON y muestro por consola los distintos stocks iniciales
let lechugasEnJSON = JSON.stringify(stockDeLechugas);
let ruculasEnJSON = JSON.stringify(stockDeRuculas);
let albahacasEnJSON = JSON.stringify(stockDeAlbahacas);
let tomatesEnJSON = JSON.stringify(stockDeTomates);


console.log("El stock inicial de Lechugas es: " +lechugasEnJSON);
console.log("El stock inicial de Ruculas es: " +ruculasEnJSON);
console.log("El stock inicial de Albahacas es: " +albahacasEnJSON);
console.log("El stock inicial de Tomates es: " +tomatesEnJSON);