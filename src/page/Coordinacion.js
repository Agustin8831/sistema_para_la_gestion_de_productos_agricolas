import '../App.css';
const Coordinacion = () => {
    const $mainInicio = document.querySelector("#cont-main");
    $mainInicio.style.display = 'none';
    
    return <main className='main coordinacion'>
    <section className="subtitulo-coordinacion">
      <h3>COORDINACION DE PEDIDOS</h3>
    </section>
    <section className="sec-coordinacion">
      <table>
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Tipo de Producto</th>
            <th>Peso (ton)</th>
            <th>Dirección</th>
            <th>Mercado</th>
            <th>Teléfono</th>
            <th>Urgencia</th>
            <th>Costo (USD)</th>
            <th>Fecha de entrega</th>
            <th>Estado del pedido</th>
            <th>Método de pago</th>
            <th>Notas adicionales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Manzanas, Peras</td>
            <td>5</td>
            <td>123 Calle A</td>
            <td>New York</td>
            <td>+1 (123) 456-7890</td>
            <td>Normal</td>
            <td>$10000</td>
            <td>@October 15, 2022</td>
            <td>En proceso</td>
            <td>Transferencia bancaria</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Plátanos, Mangos</td>
            <td>3</td>
            <td>456 Calle B</td>
            <td>California</td>
            <td>+1 (098) 765-4321</td>
            <td>Urgente</td>
            <td>$7000</td>
            <td>@October 18, 2022</td>
            <td>Completado</td>
            <td>Transferencia bancaria</td>
            <td>-</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Fresas, Uvas</td>
            <td>2</td>
            <td>789 Calle C</td>
            <td>Ohio</td>
            <td>+1 (567) 890-1234</td>
            <td>Normal</td>
            <td>$8000</td>
            <td>@October 20, 2022</td>
            <td>En proceso</td>
            <td>Transferencia bancaria</td>
            <td>-</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Piñas, Sandías</td>
            <td>4</td>
            <td>321 Calle D</td>
            <td>New York</td>
            <td>+1 (432) 109-8765</td>
            <td>Urgente</td>
            <td>$20000</td>
            <td>@October 22, 2022</td>
            <td>Completado</td>
            <td>Efectivo</td>
            <td>-</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Naranjas, Limones</td>
            <td>1.5</td>
            <td>654 Calle E</td>
            <td>California</td>
            <td>+1 (901) 234-5678</td>
            <td>Normal</td>
            <td>$12000</td>
            <td>@October 25, 2022</td>
            <td>En proceso</td>
            <td>Transferencia bancaria</td>
            <td>-</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Manzanas, Plátanos</td>
            <td>2.5</td>
            <td>987 Calle F</td>
            <td>Ohio</td>
            <td>+1 (345) 678-9012</td>
            <td>Urgente</td>
            <td>$25000</td>
            <td>@October 28, 2022</td>
            <td>Completado</td>
            <td>Transferencia bancaria</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Peras, Fresas</td>
            <td>3</td>
            <td>789 Calle G</td>
            <td>New York</td>
            <td>+1 (678) 901-2345</td>
            <td>Normal</td>
            <td>$20000</td>
            <td>@October 30, 2022</td>
            <td>En proceso</td>
            <td>Transferencia bancaria</td>
            <td>-</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Uvas, Limones</td>
            <td>2</td>
            <td>123 Calle H</td>
            <td>California</td>
            <td>+1 (012) 345-6789</td>
            <td>Urgente</td>
            <td>$5000</td>
            <td>@November 2, 2022</td>
            <td>Completado</td>
            <td>Efectivo</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Sandías, Piñas</td>
            <td>4.5</td>
            <td>456 Calle I</td>
            <td>Ohio</td>
            <td>+1 (901) 234-5678</td>
            <td>Normal</td>
            <td>$11000</td>
            <td>@November 5, 2022</td>
            <td>En proceso</td>
            <td>Transferencia bancaria</td>
            <td>-</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Mangos, Naranjas</td>
            <td>3.5</td>
            <td>321 Calle J</td>
            <td>New York</td>
            <td>+1 (234) 567-8901</td>
            <td>Urgente</td>
            <td>$6000</td>
            <td>@November 8, 2022</td>
            <td>Completado</td>
            <td>Transferencia bancaria</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>             
    </section>
    <section className="sec-boton">
      <button>Imprimir</button>
    </section>
  </main>;
}
export default Coordinacion;