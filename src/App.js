import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./page/Layout";
import Inicio from "./page/Inicio";
import AdministracionCostos from "./page/AdministracionCostos";
import Planes from "./page/Planes";
function App() {
  return (
    <><div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="AdministracionCostos" element={<AdministracionCostos />} />
          <Route path="Inicio" element={<Inicio />} />
          <Route path="Planes" element={<Planes />} />
          <Route path="*" element={<default />} />
        </Route>
      </Routes>
    </div></>
  );
}

export default App;
