import Head from 'next/head'

export default function Dissent() {
  return (
    <>
      <Head>
        <title>Desistimiento | CentralFoodMalaga</title>
        <meta
          name='description'
          content='Restaurante venezolano, comida internacional con sabor a Venezuela. Seis restaurantes, seis sabores. SushiGuay: restaurante de comida japonesa, GuayWok: restaurante de comida china, Con sabor a casita: restaurante de comida venezolana, Hamburguesería Venezuela: restaurante de comida americana, Pokes Guay> restaurante de comida hawaiana, DonBurrito: restaurante de comida mexicana'
        />
      </Head>
      <div className='legal'>
        <h2>Derecho de desistimiento</h2>
        <p>
          El usuario tiene derecho a cancelar un pedido sin dar ninguna
          explicación. Este derecho es el derecho de desistimiento establecido
          por el art. 102 el Real Decreto Legislativo 1/2007, de 16 de
          noviembre, por el que se aprueba el texto refundido de la Ley General
          para la Defensa de los Consumidores y Usuarios y otras leyes
          complementarias.
        </p>
        <p>
          Para cancelar un pedido se puede guiar por el formulario adjunto
          (modelo de desistimiento) y enviarlo pueden notificarlo por correo
          electrónico dirigiéndose a CENTRALFOOD3.0@GMAIL.COM o por correo
          postal a la dirección CALLE FRANCISCO PEREZ RUEDA 1 LOCAL 7, MáLAGA
          (MALAGA), 29007.
        </p>
        <p>
          Si nos envía un correo electrónico o una comunicación por escrito, por
          favor, incluya los detalles de su pedido para ayudarnos a
          identificarlo.
        </p>
        <p>
          El plazo de desistimiento expirará a los 14 días naturales del día que
          usted o un tercero por usted indicado, distinto del transportista,
          adquirió la posesión material de los bienes o en caso de que los
          productos que componen el pedido se entreguen por separado, a los 14
          días naturales del día que usted o un tercero por usted indicado,
          distinto del transportista, adquirió la posesión material del último
          de los mencionados productos.
        </p>
        <p>
          Una vez ejercido el derecho al desistimiento el usuario deberá remitir
          a la dirección indicada (JENNIFER KATERINE CAMPOS DE AGUILERA / CALLE
          FRANCISCO PEREZ RUEDA 1 LOCAL 7, MáLAGA (MALAGA), 29007) los productos
          entregados asumiendo por tanto los costes de devolución. Por favor,
          tenga en cuenta que si usted decide devolvernos los artículos a portes
          debidos estaremos autorizados a cargarle los gastos en que podamos
          incurrir.
        </p>
        <p>
          El derecho a desistir del contrato será de aplicación exclusivamente a
          aquellos productos que se devuelvan en las mismas condiciones en que
          el cliente los recibió. No se hará ningún reembolso si el producto ha
          sido usado más allá de la mera apertura del mismo, de productos que no
          estén en las mismas condiciones en las que se entregaron o que hayan
          sufrido algún daño, por lo que deberá ser cuidadoso con el/los
          producto/s mientras estén en su posesión. Por favor, devuelva el
          artículo usando o incluyendo todos sus envoltorios originales con
          todas las etiquetas. Rogamos no retiren las etiquetas hasta estar
          seguros de querer quedarse con cada artículo.
        </p>
        <p>
          Tras examinar el artículo le comunicaremos si tiene derecho al
          reembolso de las cantidades abonadas. Si la devolución incluye la
          totalidad de la compra, se ha seguido el procedimiento correcto y los
          productos están nuevos y sin usar, procederemos al reembolso del
          importe total de la compra más los gastos de envío en un plazo de 14
          días desde que recibamos el pedido cancelado.
        </p>
        <p>
          Si la devolución solo incluye una parte del pedido, se ha seguido el
          procedimiento correcto y los productos están nuevos y sin usar, solo
          le reembolsaremos el valor de los productos devueltos, sin los gastos
          de envío.
        </p>
        <br></br>
        <br></br>
        <div className='dissent'>
          <h3>MODELO DE DESISTIMIENTO</h3>
          <p>
            A la atención de JENNIFER KATERINE CAMPOS DE AGUILERA, domicilio
            sito en CALLE FRANCISCO PEREZ RUEDA 1 LOCAL 7, MáLAGA (MALAGA),
            29007 y con correo electrónico CENTRALFOOD3.0@GMAIL.COM y teléfono
            649718831, en adelante JENNIFER KATERINE CAMPOS DE AGUILERA.
          </p>
          <p>
            Por la presente le comunico que desisto de mi contrato de venta del
            producto/productos indicados:
          </p>
          ---------------------------------------------------------------
          <p>(descripción y referencia tal como se indica en el contrato)</p>
          ---------------------------------------------------------------
          <p>Pedido realizado con fecha _________</p>
          <p>Pedido recibido con fecha __________</p>
          <p>Nombre del consumidor: _______________________________</p>
          <p>Dirección del consumidor: ____________________________</p>
          <p>
            Firma del consumidor (solo si el presente formulario se presenta en
            papel)
          </p>
        </div>
      </div>
    </>
  )
}
