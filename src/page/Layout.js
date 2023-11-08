import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return <><header className='header'>
        <h1>Sistema de gestion de productos</h1>
        <img src="http://pinosanquintin.com.mx/img/logo.png" alt=""></img>
        <nav className='nav'>
            <ul className='ul'>
                <li><Link to="/Inicio">Inicio</Link></li>
                <li><Link to="/AdministracionCostos">Administracion de costos</Link></li>
                <li><Link to="/Planes">Planes</Link></li>
                <li><Link to="/Coordinacion">Coordinacion</Link></li>
                <li><Link to="/AdministracionProductos">Administar productos del almacen</Link></li>
            </ul>
        </nav>
    </header> 
    <Outlet />       
    </>;
        }
export default Layout;