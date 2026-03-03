import { useState } from 'react';
import { Link } from 'react-router-dom';
// Asegúrate de que la ruta sea correcta según tu estructura de carpetas
import { nodesData } from '../data/nodes'; 

// --- COMPONENTES AUXILIARES ---

/**
 * Subsección colapsable para categorías específicas (Nodo 2D, 3D, etc.)
 * Filtra automáticamente los datos de nodesData por la propiedad 'category'.
 */
const SubSection = ({ 
  title, 
  iconName, 
  data, 
  baseRoute 
}: { 
  title: string, 
  iconName: string, 
  data: any, 
  baseRoute: string 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Extraemos las llaves (ids) de los nodos que coinciden con la categoría actual
  const items = Object.keys(data).filter(key => data[key].category === title);

  return (
    <div className="mb-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 rounded-md hover:bg-slate-50 transition-all text-slate-600 text-sm group"
      >
        <span className="flex items-center gap-2">
          {/* Icono de la Categoría (ej: Node2D.svg) */}
          <img 
            src={`/icons/${iconName}.svg`} 
            alt="" 
            className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
          />
          {title}
        </span>
        <span className={`text-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="ml-6 mt-1 space-y-1 border-l-2 border-purple-50">
          {items.length > 0 ? (
            items.map(key => (
              <Link 
                key={key}
                to={`/${baseRoute}/${key}`}
                className="flex items-center gap-2 w-full text-left pl-4 py-1 text-xs text-slate-400 hover:text-purple-600 hover:bg-purple-50/50 transition-all rounded-r-md group/item"
              >
                {/* Icono individual del Nodo (ej: Sprite2D.svg) */}
                <img 
                  src={data[key].icon} 
                  alt="" 
                  className="w-3.5 h-3.5 object-contain opacity-60 group-hover/item:opacity-100 transition-opacity" 
                />
                {data[key].name}
              </Link>
            ))
          ) : (
            <span className="block pl-4 py-1 text-[10px] text-slate-300 italic">
              Sin nodos aún
            </span>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Sección principal del menú (Nodos, Programación, Recursos)
 */
const MainSection = ({ 
  title, 
  children, 
  defaultOpen = false 
}: { 
  title: string, 
  children: React.ReactNode, 
  defaultOpen?: boolean 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-2 py-2 mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors"
      >
        {title}
        <span className="text-lg leading-none">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">{children}</div>}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-100 p-4 sticky top-0 h-screen overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-slate-100">
      
      {/* Header con Branding */}
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-4 h-4 rounded bg-[#4d90c1]"></div>
        <h2 className="font-bold text-lg tracking-tight text-slate-800">
          TGE <span className="text-purple-600 font-extrabold">v1.0</span>
        </h2>
      </div>
      
      <nav>
        {/* Link a Inicio */}
        <Link 
          to="/" 
          className="flex items-center gap-3 w-full p-3 mb-6 rounded-xl text-slate-700 font-medium hover:bg-purple-50 hover:text-purple-700 transition-all border border-transparent hover:border-purple-100 group"
        >
        
          Inicio
        </Link>

        {/* Sección Dinámica de Nodos */}
        <MainSection title="Nodos" defaultOpen={true}>
          <SubSection title="Nodo" iconName="Node" data={nodesData} baseRoute="node" />
          <SubSection title="Nodo 2D" iconName="Node2D" data={nodesData} baseRoute="node" />
          <SubSection title="Nodo 3D" iconName="Node3D" data={nodesData} baseRoute="node" />
          <SubSection title="Control" iconName="Control" data={nodesData} baseRoute="node" />
        </MainSection>

        {/* Otras Secciones */}
        <MainSection title="Programación">
          <div className="px-3 py-2 text-[10px] text-slate-400 bg-slate-50 rounded-lg italic">
            Configurando scripts de GDScript...
          </div>
        </MainSection>

        <MainSection title="Recursos">
          <div className="px-3 py-2 text-[10px] text-slate-400 bg-slate-50 rounded-lg italic">
            Preparando guías de arquitectura...
          </div>
        </MainSection>
      </nav>
    </aside>
  );
}