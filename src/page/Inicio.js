const Inicio = () => {
    const $mainInicio = document.querySelector("#cont-main");
    $mainInicio.style.display = 'none';

    return <main className='main' id="cont-main-inicio">
        <section className='sec-funciones-principales'>
          <article className='articulo-funciones'>
            <img src="https://www.agri.mx/wp-content/uploads/2022/09/1.png" alt=""></img>
            <div className='articulo-textos'>
              <p className='articulo-encabezado'>Administar costos</p>
              <p>Aqui puedes puedes calcular el costo de los productos</p>
              <button className='articulo-boton'>Entrar</button>
            </div>
          </article>
          <article className='articulo-funciones'>
            <img src="https://www.agri.mx/wp-content/uploads/2022/09/2.png" alt=""></img>
            <div className='articulo-textos'>
              <p className='articulo-encabezado'>Planes</p>
              <p>Aqui puedes agregar un plan semanal, en el cual se pueda trabajar sobre ella</p>
              <button className='articulo-boton'>Entrar</button>
            </div>
          </article>
          <article className='articulo-funciones'>
            <img src="https://www.agri.mx/wp-content/uploads/2022/09/3.png" alt=""></img>
            <div className='articulo-textos'>
              <p className='articulo-encabezado'>Coordinacion</p>
              <p>Aqui puedes cordinar los pedidos, en donde se envian y en que fechas</p>
              <button className='articulo-boton'>Entrar</button>
            </div>
          </article>
          <article className='articulo-funciones'>
            <img src="https://www.agri.mx/wp-content/uploads/2022/09/4.png" alt=""></img>
            <div className='articulo-textos'>
              <p className='articulo-encabezado'>Administar productos del almacen</p>
              <p>Aqui puedes agregar o eliminar los productos existentes que se encuentran en el almace</p>
              <button className='articulo-boton'>Entrar</button>
            </div>
          </article>
        </section>
      </main>
}
export default Inicio;