import { useParams } from 'react-router-dom';
import { nodesData } from '../data/nodes';

export default function NodePage() {
  const { nodeId } = useParams();
  const node = nodesData[nodeId as keyof typeof nodesData];

  if (!node) return <div className="p-8">Nodo no encontrado.</div>;

  return (
    <div className="flex-1 bg-white p-8 overflow-y-auto">
      <header className="flex items-center gap-4 mb-8">
        <img src={node.icon} alt="" className="w-12 h-12" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{node.name}</h1>
          <span className="text-xs font-bold px-2 py-1 rounded" style={{ backgroundColor: node.color + '22', color: node.color }}>
            Herencia: Node2D
          </span>
        </div>
      </header>

      <section className="prose prose-slate max-w-none">
        <h2 className="text-xl font-semibold text-purple-600 mb-2 border-b border-purple-100">Descripción</h2>
        <p className="text-slate-600 mb-6">{node.description}</p>

        <h2 className="text-xl font-semibold text-purple-600 mb-2 border-b border-purple-100">Ejemplos de Uso</h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600">
          {node.examples.map(ex => <li key={ex}>{ex}</li>)}
        </ul>
      </section>
    </div>
  );
}