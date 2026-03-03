import { Link } from 'react-router-dom';
import { nodesData } from '../data/nodes';

export default function NodeExplorer() {
  // Obtenemos las categorías únicas de tus datos
  const categories = Array.from(new Set(Object.values(nodesData).map(n => n.category)));

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      {/* Header del Explorador */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-2 tracking-tight">
          Explorador de <span className="text-purple-600">Nodos</span>
        </h1>
        <p className="text-slate-500">Navega visualmente por la jerarquía de Godot Engine.</p>
      </header>

      {/* Listado por Categorías */}
      {categories.map(category => (
        <section key={category} className="mb-12">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-2">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
              {category}
            </h2>
            <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[10px] font-bold rounded-md border border-purple-100">
              {Object.values(nodesData).filter(n => n.category === category).length}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(nodesData)
              .filter(([_, node]) => node.category === category)
              .map(([id, node]) => (
                <Link
                  key={id}
                  to={`/node/${id}`}
                  className="group p-5 bg-white border border-slate-100 rounded-2xl hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 mb-4 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-50 transition-all duration-300">
                    <img 
                      src={node.icon} 
                      alt={node.name} 
                      className="w-10 h-10 object-contain shadow-sm" 
                    />
                  </div>
                  <h3 className="font-bold text-slate-700 group-hover:text-purple-600 transition-colors">
                    {node.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {node.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}