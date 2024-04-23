// Variables para almacenar los productos y el total
let productos = [];
let total = 0.00;

// Función para agregar un producto
function agregarProducto() {
  const codigoProducto = document.getElementById("codigoProducto").value;
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (codigoProducto && cantidad > 0 && precio > 0) {
    const producto = {
      codigo: codigoProducto,
      cantidad: cantidad,
      precio: precio,
      subtotal: cantidad * precio,
    };

    productos.push(producto);
    actualizarDetalleCompra();
    limpiarFormularioProducto();
  } else {
    alert("Por favor, ingrese todos los datos del producto.");
  }
}

// Función para actualizar el detalle de la compra en la tabla
function actualizarDetalleCompra() {
  const detalleCompra = document.getElementById("detalleCompra");
  detalleCompra.innerHTML = ""; // Limpiar la tabla antes de agregar filas

  productos.forEach((producto) => {
    const fila = document.createElement("tr");
    const celdaCodigo = document.createElement("td");
    const celdaCantidad = document.createElement("td");
    const celdaPrecio = document.createElement("td");
    const celdaSubtotal = document.createElement("td");

    celdaCodigo.textContent = producto.codigo;
    celdaCantidad.textContent = producto.cantidad;
    celdaPrecio.textContent = producto.precio.toFixed(2);
    celdaSubtotal.textContent = producto.subtotal.toFixed(2);

    fila.appendChild(celdaCodigo);
    fila.appendChild(celdaCantidad);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaSubtotal);

    detalleCompra.appendChild(fila);
  });
}

function limpiarFormularioProducto() {
  document.getElementById("codigoProducto").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
}

// Función para calcular el total de la compra
function calcularTotal() {
  total = productos.reduce((acumulador, producto) => acumulador + producto.subtotal, 0);
  document.getElementById("total").textContent = total.toFixed(2);
}

// Función para aplicar descuento
function aplicarDescuento() {
  const descuento = parseFloat(document.getElementById("descuento").value);
  const descuentoAplicado = total * (descuento / 100);
  const totalConDescuento = total - descuentoAplicado;

  document.getElementById("totalConDescuento").textContent = totalConDescuento.toFixed(2);
}

// Función para realizar el pago
function realizarPago() {
  const pagoEfectivo = parseFloat(document.getElementById("pagoEfectivo").value);
  const totalConDescuento = parseFloat(document.getElementById("totalConDescuento").textContent);

  if (pagoEfectivo >= totalConDescuento) {
    const cambio = pagoEfectivo - totalConDescuento;

    document.getElementById("cambio").textContent = cambio.toFixed(2);
    mostrarRecibo();
  } else {
    alert("El pago en efectivo debe ser mayor o igual al total con descuento.");
  }
}

// Función para mostrar el recibo
function mostrarRecibo() {
  const detalleRecibo = document.getElementById("detalleRecibo");
  detalleRecibo.innerHTML = ""; 

  productos.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.cantidad}x ${producto.codigo} - $${producto.precio.toFixed(2)}`;
    detalleRecibo.appendChild(item);
  });

  document.getElementById("totalRecibo").textContent = total.toFixed(2);
  document.getElementById("descuentoRecibo").textContent = (total * (descuento / 100)).toFixed(2);
  document.getElementById("totalConDescuentoRecibo").textContent = document.getElementById("totalConDescuento").textContent;
  document.getElementById("pagoEfectivoRecibo").textContent = document.getElementById("pagoEfectivo").value;

  document.getElementById("recibo").style.display = "block";
}
