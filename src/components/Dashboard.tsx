import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="p-8 max-w-5xl mx-auto">
        {/* Carrusel Visual */}
        <section className="relative h-64 w-full bg-slate-900 rounded-2xl overflow-hidden mb-12 shadow-lg border-4 border-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4d90c1]/90 to-purple-600/80 flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold">Documentación Godot 4.x</h3>
            <p className="opacity-90 text-sm max-w-md mt-2">
              Explora los nodos y scripts optimizados para tus proyectos de ingeniería.
            </p>
          </div>
        </section>

        {/* Info de la Enciclopedia */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-slate-900">
              The Godot Encyclopedia
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Bienvenido a tu enciclopedia personal de Godot, diseñada para ingenieros como tú. 
              Aquí encontrarás una colección cuidadosamente curada de nodos y scripts esenciales para tus proyectos.
            </p>
            
            <div className="flex gap-4">
              {/* Tarjeta de Nodoss - Ahora es un Link al Explorer */}
              <Link 
                to="/explorer" 
                className="bg-slate-50 p-4 rounded-xl flex-1 border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all group"
              >
                <span className="text-2xl font-bold text-[#4d90c1] group-hover:text-purple-600 transition-colors">
                  150+
                </span>
                <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Nodos</p>
              </Link>

              {/* Tarjeta de Scripts (Preparada para el futuro) */}
              <div className="bg-slate-50 p-4 rounded-xl flex-1 border border-slate-100 opacity-60">
                <span className="text-2xl font-bold text-purple-600">40+</span>
                <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Scripts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}