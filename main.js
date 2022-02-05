            //DECLARO EL ARRAY CON PRODUCTOS            
            let productos = [{
                producto: "LECHUGA",
                precio: 100,
                stock: 150
            }, {
                producto: "RUCULA",
                precio: 150,
                stock: 200
            }];
            
            //DECLARO VARIABLES CON EL INGRESO DEL USUARIO Y ARMO FUNCION PARA CALCULAR STOCK
            

            let ingresoProducto = prompt("Ingrese el producto a modificar stock: \nLECHUGA o RUCULA \nO escriba SALIR");
            while (ingresoProducto != "SALIR") {
            
            if (ingresoProducto == "LECHUGA" || ingresoProducto == "RUCULA") { 
            let ingresoStock = prompt("Ingrese las nuevas unidades a agregar o eliminar",0);
            let ingresoParseado = parseInt(ingresoStock);
                   

            productos.map(function(dato){
              if(dato.producto == ingresoProducto){
                  dato.stock = dato.stock + ingresoParseado;
              }
              
              return dato; 
            });
            
            console.log("El stock de los productos es:");
            console.log(productos);
        }
        else {
            alert("El producto "+ingresoProducto+" no existe en el stock. \nPor favor vuelva a intentarlo");
            
        }
        ingresoProducto = prompt("Ingrese el producto a modificar stock: \nLECHUGA o RUCULA");
    }