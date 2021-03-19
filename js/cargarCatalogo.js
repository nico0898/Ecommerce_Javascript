//CREO LAS VARIABLES

let catalogo = $("#catalogo")
let productos = []
let producto = ""
let carrito = []
let cantidadItems = $("#cantidadItems")
let jsonProductos = []
let encabezado = $(".navbar")


//FUNCIÓN PARA ARMAR EL CATÁLOGO EN EL DOCUMENTO HTML. RECORRO EL JSON DE LOS OBJETOS/PRODUCTOS
// Y CREO EL CÓDIGO HTML Q SE GUARDA EN UNA VARIABLE, QUE LUEGO FORMA UN ARRAY. Y SE CARGA EN EL BODY DEL HTML CUANDO CARGA LA PÁGINA
//EN EL TAG BUTTON LLAMO LA FUNCIÓN AGREGO PRODUCTOS CON PARÁMETRO EL ID DEL PRODUCTO
function armarCatalogo() {
  $.ajax({
    url: "js/productos.json",
    dataType: "json",
    success: function (response) {
      jsonProductos = response
      jsonProductos.forEach((item) => {
        producto = `<div class="col-md-4">
                      <div class="card mb-4 shadow-sm" >
                        <img src=${item.img} alt="" class="card-img-top">
                        <hr/>
                        <div class="card-body">
                          <p class="card-text text-center"><strong>${item.nombre.toUpperCase()}</strong></p>
                          <p class="card-text text-center font-weight-bold">$ ${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                          <div class="d-flex justify-content-center align-items-center">
                            <button type="button" class="btn btn-sm btn-outline-secondary" id= ${item.id} onclick="agregoProductos2(${item.id})">Agregar</button>
                          </div>
                        </div>
                      </div>
                    </div>`
        productos.push(producto)
      })
      catalogo.html(productos)
    }
  })
}

//FUNCIÓN CARRITO INICIAL
//Se fija si en el local storage ya existe un carrito cargado y lo levanta en la variable carrito para mostrarlo en la carga inicial.

function carritoInicial() {
  if (localStorage.carritoCargado != undefined && localStorage.length > 0) {
    carrito = JSON.parse(localStorage.carritoCargado);
    contarItemsCarrito();
  }
}

//CONTAR CANTIDAD DE ITEMS CARRITO.
//Cuenta los ítems del array carrito y luego pone ese número al lado del ícono del carrito.

function contarItemsCarrito() {
  cantidadItems.text(carrito.length)
}
  

//FUNCIÓN DE CARGA DEL CATÁLOGO Y DEL CARRITO INICIAL ALMACENADO EN LOCAL STORAGE
$(document).ready(function () {
  carritoInicial()
  armarCatalogo()
  encabezado.show(2000, function () {
      catalogo.slideDown(3000)
  })
})

