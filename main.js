let stockLechugas = 150;
let stockRuculas = 180;
let stockAlbahacas = 40;
let stockTomates = 80;

let lechugas = localStorage.setItem('lechuga' , stockLechugas);
let ruculas = localStorage.setItem('rucula' , stockRuculas);
let albahacas = localStorage.setItem('albahaca' , stockAlbahacas);
let tomates = localStorage.setItem('tomate' , stockTomates);

let stockDeLechugas = localStorage.getItem('lechuga');
let stockDeRuculas = localStorage.getItem('rucula');
let stockDeAlbahacas = localStorage.getItem('albahaca');
let stockDeTomates = localStorage.getItem('tomate');


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
    if (inputValue){
        stockLechugas += inputValue;
        lechugas = localStorage.setItem('lechuga' , stockLechugas);
        stockDeLechugas = localStorage.getItem('lechuga');
        mostrarStockLechugas.innerText = stockLechugas; 
    }
  }

function modificarStockRuculas () {
    let inputValue = parseInt(document.getElementById("modificarStockRuculas").value);
    if (inputValue){
       stockRuculas += inputValue;
       ruculas = localStorage.setItem('rucula' , stockRuculas);
       stockDeRuculas = localStorage.getItem('rucula');
       mostrarStockRuculas.innerText = stockRuculas;
    }
  }

function modificarStockAlbahacas () {
    let inputValue = parseInt(document.getElementById("modificarStockAlbahacas").value);
    if (inputValue){
        stockAlbahacas += inputValue;
        albahacas = localStorage.setItem('albahaca' , stockAlbahacas);
        stockDeAlbahacas = localStorage.getItem('albahaca');
        mostrarStockAlbahacas.innerText = stockAlbahacas;
    }
  }

function modificarStockTomates () {
    let inputValue = parseInt(document.getElementById("modificarStockTomates").value);
    if (inputValue){ 
        stockTomates += inputValue;
        tomates = localStorage.setItem('tomate' , stockTomates);
        stockDeTomates = localStorage.getItem('tomate');
        mostrarStockTomates.innerText = stockTomates;
    } 
  }

function limpiarStock () {
  stockLechugas = 0;
  stockRuculas = 0;
  stockAlbahacas = 0;
  stockTomates = 0;
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