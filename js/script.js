
function calPrecioFinal(){
        //almacenamos la cantidad del producto que compro
    let cantProducto = document.getElementById("cantidadProducto").value;

        //almacenamos el producto que compro
    let producto = document.getElementById("producto").value;
        //calculamos el descuento
    let categoria = document.getElementById("categoria").value;

    let precioFinal

    //realizamos la operacion






    precioFinal = (cantProducto*producto)-(((cantProducto*producto)*categoria)/100)

    //document.getElementById("precioFinal").value = precioFinal;
    document.getElementById("precioFinal").value = `Total a Pagar: $${precioFinal}`
}