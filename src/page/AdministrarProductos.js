const AdministracionProductos = () => {
  var inicio = document.getElementById("inicio");
  var contMain = document.getElementById("cont-main");

  contMain.style.display = "none";

  inicio.addEventListener("click", function() {
    contMain.style.display = "block";
  });
  
  // const liFunciones = document.querySelector('.li-funciones');
  // const ulFunciones = document.querySelector('.ul-funciones');
  // let ulVisible = false;
  
  // liFunciones.addEventListener('mouseover', () => {
  //   ulFunciones.style.visibility = 'visible';
  //   ulFunciones.style.display = 'flex';
  //   ulVisible = true;
  // });
  
  // liFunciones.addEventListener('click', () => {
  //   ulVisible = !ulVisible;
  // });
  
  // document.addEventListener('click', (event) => {
  //   if (!event.target.classList.contains('li-funciones') && ulVisible) {
  //     ulFunciones.style.visibility = 'hidden';
  //     ulVisible = false;
  //   }
  // });
  
    return <main className="main administrar-producto">
    <div className="variedad-producto">
      <div className="col">
        <section className="subtitulo-costos">
          <h3>ALTA VARIEDAD</h3>
        </section>
        <section className="sec-administrar-producto">
          <table>
            <thead>
              <tr>
                <th>Variedad</th>
                <th>Nº de árboles</th>
                <th>Año plantación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manzana</td>
                <td>100</td>
                <td>2018</td>
              </tr>
              <tr>
                <td>Pera</td>
                <td>80</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>Naranja</td>
                <td>120</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Plátano</td>
                <td>150</td>
                <td>2017</td>
              </tr>
              <tr>
                <td>Mango</td>
                <td>60</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Cereza</td>
                <td>90</td>
                <td>2016</td>
              </tr>
              <tr>
                <td>Durazno</td>
                <td>110</td>
                <td>2015</td>
              </tr>
              <tr>
                <td>Uva</td>
                <td>70</td>
                <td>2014</td>
              </tr>
              <tr>
                <td>Fresa</td>
                <td>100</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Piña</td>
                <td>80</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>Melón</td>
                <td>120</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Sandía</td>
                <td>150</td>
                <td>2017</td>
              </tr>
              <tr>
                <td>Limón</td>
                <td>60</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Kiwi</td>
                <td>90</td>
                <td>2016</td>
              </tr>
              <tr>
                <td>Aguacate</td>
                <td>110</td>
                <td>2015</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="sec-boton">
          <button>Imprimir</button>
        </section>
      </div>
      <div className="col">
        <section className="subtitulo-costos">
          <h3>ALTA PRODUCTO</h3>
        </section>
        <section className="sec-administrar-producto">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Stock anterior</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manzana</td>
                <td>500</td>
                <td>10.50</td>
              </tr>
              <tr>
                <td>Pera</td>
                <td>300</td>
                <td>8.75</td>
              </tr>
              <tr>
                <td>Naranja</td>
                <td>400</td>
                <td>7.25</td>
              </tr>
              <tr>
                <td>Plátano</td>
                <td>600</td>
                <td>6.50</td>
              </tr>
              <tr>
                <td>Mango</td>
                <td>200</td>
                <td>15.00</td>
              </tr>
              <tr>
                <td>Cereza</td>
                <td>350</td>
                <td>25.50</td>
              </tr>
              <tr>
                <td>Durazno</td>
                <td>450</td>
                <td>12.75</td>
              </tr>
              <tr>
                <td>Uva</td>
                <td>250</td>
                <td>9.80</td>
              </tr>
              <tr>
                <td>Fresa</td>
                <td>400</td>
                <td>18.25</td>
              </tr>
              <tr>
                <td>Piña</td>
                <td>350</td>
                <td>14.50</td>
              </tr>
              <tr>
                <td>Melón</td>
                <td>550</td>
                <td>10.75</td>
              </tr>
              <tr>
                <td>Sandía</td>
                <td>700</td>
                <td>8.90</td>
              </tr>
              <tr>
                <td>Limón</td>
                <td>150</td>
                <td>5.25</td>
              </tr>
              <tr>
                <td>Kiwi</td>
                <td>250</td>
                <td>13.40</td>
              </tr>
              <tr>
                <td>Aguacate</td>
                <td>450</td>
                <td>17.80</td>
              </tr>
            </tbody>
          </table>          
        </section>
        <section className="sec-boton">
          <button>Imprimir</button>
        </section>
      </div>
    </div>
    <section className="subtitulo-costos">
      <h3>VENTA DE PRODUCTO</h3>
    </section>
    <section className="sec-administrar-producto venta">
      <table>
        <thead>
          <tr>
            <th>VENTA PRODUCTOS</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Año:</th>
            <th>2021</th>
            <th>Total kg:</th>
            <th>0,00 MXN</th>
            <th>Total Ventas:</th>
            <th>0,00 MXN</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Fecha</th>
            <th>Variedad</th>
            <th>Kilos</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Mayorista</th>
            <th>Nº Albarán</th>
            <th>Nº Factura</th>
            <th>Cobrado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/01/2021</td>
            <td>Manzana</td>
            <td>50</td>
            <td>10.50</td>
            <td>525.00</td>
            <td>Mayorista A</td>
            <td>001</td>
            <td>1001</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>02/01/2021</td>
            <td>Pera</td>
            <td>30</td>
            <td>8.75</td>
            <td>262.50</td>
            <td>Mayorista B</td>
            <td>002</td>
            <td>1002</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>03/01/2021</td>
            <td>Naranja</td>
            <td>40</td>
            <td>7.25</td>
            <td>290.00</td>
            <td>Mayorista C</td>
            <td>003</td>
            <td>1003</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>04/01/2021</td>
            <td>Plátano</td>
            <td>60</td>
            <td>6.50</td>
            <td>390.00</td>
            <td>Mayorista A</td>
            <td>004</td>
            <td>1004</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>05/01/2021</td>
            <td>Mango</td>
            <td>20</td>
            <td>15.00</td>
            <td>300.00</td>
            <td>Mayorista B</td>
            <td>005</td>
            <td>1005</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>06/01/2021</td>
            <td>Cereza</td>
            <td>35</td>
            <td>25.50</td>
            <td>892.50</td>
            <td>Mayorista C</td>
            <td>006</td>
            <td>1006</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>07/01/2021</td>
            <td>Durazno</td>
            <td>45</td>
            <td>12.75</td>
            <td>573.75</td>
            <td>Mayorista A</td>
            <td>007</td>
            <td>1007</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>08/01/2021</td>
            <td>Uva</td>
            <td>25</td>
            <td>9.80</td>
            <td>245.00</td>
            <td>Mayorista B</td>
            <td>008</td>
            <td>1008</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>09/01/2021</td>
            <td>Fresa</td>
            <td>40</td>
            <td>18.25</td>
            <td>730.00</td>
            <td>Mayorista C</td>
            <td>009</td>
            <td>1009</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>10/01/2021</td>
            <td>Piña</td>
            <td>35</td>
            <td>14.50</td>
            <td>507.50</td>
            <td>Mayorista A</td>
            <td>010</td>
            <td>1010</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>11/01/2021</td>
            <td>Melón</td>
            <td>55</td>
            <td>10.75</td>
            <td>591.25</td>
            <td>Mayorista B</td>
            <td>011</td>
            <td>1011</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>12/01/2021</td>
            <td>Sandía</td>
            <td>70</td>
            <td>8.90</td>
            <td>623.00</td>
            <td>Mayorista C</td>
            <td>012</td>
            <td>1012</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>13/01/2021</td>
            <td>Limón</td>
            <td>15</td>
            <td>5.25</td>
            <td>78.75</td>
            <td>Mayorista A</td>
            <td>013</td>
            <td>1013</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>14/01/2021</td>
            <td>Kiwi</td>
            <td>25</td>
            <td>13.40</td>
            <td>335.00</td>
            <td>Mayorista B</td>
            <td>014</td>
            <td>1014</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>15/01/2021</td>
            <td>Aguacate</td>
            <td>45</td>
            <td>17.80</td>
            <td>801.00</td>
            <td>Mayorista C</td>
            <td>015</td>
            <td>1015</td>
            <td>Sí</td>
          </tr>
        </tbody>
      </table>        
    </section>
    <section className="sec-boton">
      <button>Imprimir</button>
    </section>
  </main>;
}
export default AdministracionProductos;