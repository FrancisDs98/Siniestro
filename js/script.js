
function calPrecioFinal(){
        //almacenamos la cantidad del producto que compro
    let cantProducto = document.getElementById("cantidadProducto").value;

        //almacenamos el producto que compro
    let producto = document.getElementById("producto").value;

        //realizamos la operacion
    let precioFinal = (cantProducto*producto);
    
    document.getElementById("precioFinal").value = precioFinal;
}