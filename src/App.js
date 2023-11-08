import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdministracionCostos from "./page/AdministracionCostos";
import Planes from "./page/Planes";
import Coordinacion from "./page/Coordinacion";
import AdministracionProductos from "./page/AdministrarProductos";
import Sesion  from './page/Sesion';
import Inicio from './page/Inicio';
import Cuenta from './page/Cuenta';
import Ingresar from './page/Ingresar';



function App() {
  return (
    <><div>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="AdministracionCostos" element={<AdministracionCostos />} />
          <Route path="Cuenta" element={<Cuenta />} />
          <Route path="Ingresar" element={<Ingresar />} />
          <Route path="Planes" element={<Planes />} />
          <Route path="Sesion" element={<Sesion />} />
          <Route path="Coordinacion" element={<Coordinacion />} />
          <Route path="AdministracionProductos" element={<AdministracionProductos />} />
          <Route path="*" element={<default />} />
        </Route>
      </Routes>
    </div></>    
  );
};
export default App;

