import moment from 'moment'
import 'moment/locale/es'

export const templateEmail = (order) => {
  return `
  <hr>
  <h1>CentralFood Málaga</h1>  
  <h2>
  <h4>Teléfono: 649-71-88-31</h4>
  <a href='https://centralfoodmalaga.com'>www.centralfoodmalaga.com</a>
  <hr>
  <h4>Tome en cuenta que al momento que el repartidor a sido enviado a la dirección introducida y esta es cambiada. Sera cobrado un recargo que dependera de la distancia de la nueva dirección</h4>
  <hr>

  Pedido N°: ${order.id}
</h2>
<p>
  Nombre: ${order.name}
</p>
<p>
  Teléfono: ${order.phone}
</p>
<p>
  Fecha de pedido:
  ${moment(order.createdAt).format('L')} -${' '}
  ${moment(order.createdAt).format('LT')}
</p>
<p>
  Fecha de entrega: ${' '}
  ${order.fechaEntrega}
</p>
<p>
  Hora de entrega: ${' '}
  ${order.horaEntrega}
</p>

<hr>
${order.pedido?.map(
  (product) =>
    `<h4>${product.producto}</h4><p>Precio unitario: ${product.precioUnitario}€</p><p>Cantidad del producto: ${product.cantidadDelProducto}</p><p>Subtotal: ${product.subTotal}€</p>`
)}
<hr>

<p>
  Total por productos: ${' '}
  ${order.totalProductos}€
</p>
<p>
  Costo de envío: ${order.costoEnvio}
  €
</p>
<p>
  Total pagado: ${order.totalCompra}€
</p>
<p>
  Metodo de pago: ${' '}
  ${order.idPago ? 'Tarjeta' : 'Efectivo'}
</p>
    `
}
