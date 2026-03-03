import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NodeExplorer from './components/NodeExplorer'; // Importamos el nuevo componente
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        {/* El Sidebar permanece fijo en todas las vistas */}
        <Sidebar />
        
        {/* Contenedor principal con scroll independiente */}
        <div className="flex-1 h-screen overflow-y-auto bg-slate-50/30">
          <Routes>
            {/* Pantalla de inicio con métricas y bienvenida */}
            <Route path="/" element={<Dashboard />} />
            
            {/* Nueva pantalla de exploración visual por secciones */}
            <Route path="/explorer" element={<NodeExplorer />} />
            
            {/* Ruta dinámica: renderiza el detalle de cualquier nodo de data.ts */}
            <Route path="/node/:id" element={<div className="p-10 text-slate-400">Página de detalle en construcción...</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;