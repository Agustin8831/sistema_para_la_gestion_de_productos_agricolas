const Cuenta = () => {   
  
    var inicio = document.getElementById("inicio");
    var contMain = document.getElementById("cont-main");
  
    contMain.style.display = "none";
  
    inicio.addEventListener("click", function() {
      contMain.style.display = "block";
    });
  
      return <main className='main cuenta'>
      <section className="subtitulo-cuenta">
        <h3>Mi Cuenta</h3>
      </section>
      <section className="sec-cuenta">
        <table>
            <tr>
                <th>Cuenta de Usuario</th>
                <th>Datos</th>
            </tr>
            <tr>
                <td>Nombre</td>
                <td>Juan Pérez</td>
            </tr>
            <tr>
                <td>Correo Electrónico</td>
                <td><a href="mailto:juanperez@example.com">juanperez@example.com</a></td>
            </tr>
            <tr>
                <td>Contraseña</td>
                <td>********</td>
            </tr>
            <tr>
                <td>Número de Teléfono</td>
                <td>+34 123456789</td>
            </tr>
            <tr>
                <td>Domicilio</td>
                <td>Calle Principal 123</td>
            </tr>
        </table>

      </section>
    </main>;
  }
  export default Cuenta;