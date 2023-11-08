import { Outlet, Link } from "react-router-dom";

const htmlelementos = <><header className='header'>
    <h1>Sistema de gestion de productos</h1>
    <img src="http://pinosanquintin.com.mx/img/logo.png" alt=""></img>
    <nav className='nav'>
        <ul className='ul'>
            <li id="inicio"><Link to="/Inicio">Inicio</Link></li>
            <li><Link to="/Cuenta">Cuenta</Link></li>           
            <li><Link to="/Sesion">Sesion</Link></li>
        </ul>
    </nav>
</header><main className='main' id="cont-main"><section className='sec-funciones-principales'>
    <article className='articulo-funciones'>
        <img src="https://www.agri.mx/wp-content/uploads/2022/09/1.png" alt=""></img>
        <div className='articulo-textos'>
            <p className='articulo-encabezado'>Administar costos</p>
            <p>Aqui puedes puedes calcular el costo de los productos</p>
            <Link to="/AdministracionCostos">Administracion de costos</Link>
        </div>
    </article>
    <article className='articulo-funciones'>
        <img src="https://www.agri.mx/wp-content/uploads/2022/09/2.png" alt=""></img>
        <div className='articulo-textos'>
            <p className='articulo-encabezado'>Planes</p>
            <p>Aqui puedes agregar un plan semanal, en el cual se pueda trabajar sobre ella</p>
            <Link to="/Planes">Planes</Link>
        </div>
    </article>
    <article className='articulo-funciones'>
        <img src="https://www.agri.mx/wp-content/uploads/2022/09/3.png" alt=""></img>
        <div className='articulo-textos'>
            <p className='articulo-encabezado'>Coordinacion</p>
            <p>Aqui puedes cordinar los pedidos, en donde se envian y en que fechas</p>
            <Link to="/Coordinacion">Coordinacion</Link>
        </div>
    </article>
    <article className='articulo-funciones'>
        <img src="https://www.agri.mx/wp-content/uploads/2022/09/4.png" alt=""></img>
        <div className='articulo-textos'>
            <p className='articulo-encabezado'>Administar productos del almacen</p>
            <p>Aqui puedes agregar o eliminar los productos existentes que se encuentran en el almace</p>
            <Link to="/AdministracionProductos">Administar productos del almacen</Link>
        </div>
    </article>
</section></main><Outlet /></>;



const Inicio = () => {
    return htmlelementos;}
export default Inicio;