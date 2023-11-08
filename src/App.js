import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdministracionCostos from "./page/AdministracionCostos";
import Planes from "./page/Planes";
import Coordinacion from "./page/Coordinacion";
import AdministracionProductos from "./page/AdministrarProductos";
import Inicio from './page/Inicio';
import Cuenta from './page/Cuenta';
// import LogicaDelaWeb from './page/LogicaDelaWeb';


function App() {
  return (
    <><div>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="AdministracionCostos" element={<AdministracionCostos />} />
          <Route path="Cuenta" element={<Cuenta />} />
          <Route path="Planes" element={<Planes />} />
          <Route path="Coordinacion" element={<Coordinacion />} />
          <Route path="AdministracionProductos" element={<AdministracionProductos />} />
          <Route path="*" element={<default />} />
        </Route>
      </Routes>
    </div></>    
  );
};
export default App;

