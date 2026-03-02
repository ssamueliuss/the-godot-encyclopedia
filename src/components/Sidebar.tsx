import { useState } from 'react';

// Subcomponente para las secciones del Sidebar
const SidebarSection = ({ title, iconName, items }: { title: string, iconName: string, items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-all text-slate-700 font-medium group"
      >
        <span className="flex items-center gap-3">
          {/* Carga el icono desde public/icons/ */}
          <img 
            src={`/icons/${iconName}.svg`} 
            alt={title} 
            className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" 
          />
          {title}
        </span>
        <span className={`text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="ml-9 mt-1 space-y-1 border-l border-slate-100">
          {items.map(item => (
            <button 
              key={item} 
              className="w-full text-left p-2 text-sm text-slate-500 hover:text-purple-600 hover:bg-purple-50 rounded-r-md transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-100 p-4 sticky top-0 h-screen overflow-y-auto bg-white">
      {/* Header del Sidebar */}
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-4 h-4 rounded bg-[#4d90c1]"></div>
        <h2 className="font-bold text-lg tracking-tight text-slate-800">
          TGE <span className="text-purple-600 font-extrabold">v1.0</span>
        </h2>
      </div>
      
      {/* Secciones con tus iconos de la carpeta public */}
      <nav className="space-y-1">
        <SidebarSection 
          title="Nodo" 
          iconName="Node" 
          items={["Nodos", "Ejemplos"]} 
        />
        <SidebarSection 
          title="Nodo 2D" 
          iconName="Node2D" 
          items={["Nodos", "Ejemplos"]} 
        />
        <SidebarSection 
          title="Nodo 3D" 
          iconName="Node3D" 
          items={["Nodos", "Ejemplos"]} 
        />
        <SidebarSection 
          title="Control" 
          iconName="Control" 
          items={["Nodos", "Ejemplos"]} 
        />
      </nav>
    </aside>
  );
}