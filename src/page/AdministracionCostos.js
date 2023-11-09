const AdministracionCostos = () => {   
  var inicio = document.getElementById("inicio");
  var contMain = document.getElementById("cont-main");

  contMain.style.display = "none";

  inicio.addEventListener("click", function() {
    contMain.style.display = "block";
  });

  

    return <main className='main costos'>
    <section className="subtitulo-costos">
      <h3>Calculo de costos fijo y Costo Variable</h3>
    </section>
    <section className="sec-fijo-variable">
      <table>
        <tr>
          <th>DATOS</th>
          <th>Ingrese los datos de producción</th>
          <th></th>
        </tr>
        <tr>
          <td>Cantidad</td>
          <td>75</td>
          <td>Unidades producidas</td>
        </tr>
        <tr>
          <td>Costo Fijo</td>
          <td>$ 30,00</td>
          <td>$</td>
        </tr>
        <tr>
          <td>Costo Variable</td>
          <td>$ 0,80</td>
          <td>$</td>
        </tr>
        <tr>
          <td>Precio de Venta</td>
          <td>$ 1,20</td>
          <td>$</td>
        </tr>
      </table>  
      
      <table>
        <tr>
          <th>RESULTADOS</th>
          <th></th>
        </tr>
        <tr>
          <td>INGRESO TOTAL</td>
          <td>$90,00</td>
        </tr>
        <tr>
          <td>COSTO VARIABLE TOTAL</td>
          <td>$60,00</td>
        </tr>
        <tr>
          <td>COSTOS TOTALES (CF+CV)</td>
          <td>$90,00</td>
        </tr>
        <tr>
          <td>COSTO MEDIO</td>
          <td>$1,20</td>
        </tr>
      </table>
    </section>
    <section className="subtitulo-costos">
      <h3>CÁLCULO DE COSTOS E INGRESOS PARA DIFERENTES CANTIDADES</h3>
      <p>Ingrese en cada fila las cantidades que quiera simular</p>
    </section>
    <section className="sec-diferentes-cantidades">
      <table>
        <tr>
          <th>CANTIDAD</th>
          <th>COSTOS FIJOS POR UNIDAD</th>
          <th>COSTO VARIABLE</th>
          <th>COSTO TOTAL (CF+CV)</th>
          <th>COSTO MEDIO (CF+CV/CANTIDAD)</th>
          <th>INGRESO TOTAL</th>
        </tr>
        <tr>
          <td>0</td>
          <td></td>
          <td>$ 0,00</td>
          <td>$ 30,00</td>
          <td>$ 0,00</td>
          <td>$ 0,00</td>
        </tr>
        <tr>
          <td>10</td>
          <td>$ 3,00</td>
          <td>$ 8,00</td>
          <td>$ 38,00</td>
          <td>$ 3,80</td>
          <td>$ 12,00</td>
        </tr>
        <tr>
          <td>20</td>
          <td>$ 1,50</td>
          <td>$ 16,00</td>
          <td>$ 46,00</td>
          <td>$ 2,30</td>
          <td>$ 24,00</td>
        </tr>
        <tr>
          <td>30</td>
          <td>$ 1,00</td>
          <td>$ 24,00</td>
          <td>$ 54,00</td>
          <td>$ 1,80</td>
          <td>$ 36,00</td>
        </tr>
        <tr>
          <td>40</td>
          <td>$ 0,75</td>
          <td>$ 32,00</td>
          <td>$ 62,00</td>
          <td>$ 1,55</td>
          <td>$ 48,00</td>
        </tr>
        <tr>
          <td>50</td>
          <td>$ 0,60</td>
          <td>$ 40,00</td>
          <td>$ 70,00</td>
          <td>$ 1,40</td>
          <td>$ 60,00</td>
        </tr>
        <tr>
          <td>60</td>
          <td>$ 0,50</td>
          <td>$ 48,00</td>
          <td>$ 78,00</td>
          <td>$ 1,30</td>
          <td>$ 72,00</td>
        </tr>
        <tr>
          <td>70</td>
          <td>$ 0,43</td>
          <td>$ 56,00</td>
          <td>$ 86,00</td>
          <td>$ 1,23</td>
          <td>$ 84,00</td>
        </tr>
        <tr>
          <td>80</td>
          <td>$ 0,38</td>
          <td>$ 64,00</td>
          <td>$ 94,00</td>
          <td>$ 1,18</td>
          <td>$ 96,00</td>
        </tr>
        <tr>
          <td>90</td>
          <td>$ 0,33</td>
          <td>$ 72,00</td>
          <td>$ 102,00</td>
          <td>$ 1,13</td>
          <td>$ 108,00</td>
        </tr>
        <tr>
          <td>100</td>
          <td>$ 0,30</td>
          <td>$ 80,00</td>
          <td>$ 110,00</td>
          <td>$ 1,10</td>
          <td>$ 120,00</td>
        </tr>
      </table>      
    </section>
    <section className="sec-boton">
      <button>Imprimir</button>
    </section>
  </main>;
}
export default AdministracionCostos;