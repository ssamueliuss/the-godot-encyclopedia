export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto bg-white">

      <div className="p-8 max-w-5xl mx-auto">
        {/* Carrusel Visual */}
        <section className="relative h-64 w-full bg-slate-900 rounded-2xl overflow-hidden mb-12 shadow-lg border-4 border-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4d90c1]/90 to-purple-600/80 flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold">Documentación Godot 4.x</h3>
            <p className="opacity-90 text-sm max-w-md mt-2">Explora los nodos y scripts optimizados para tus proyectos de ingeniería.</p>
          </div>
        </section>

        {/* Info de la Enciclopedia */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-slate-900">Sobre el Proyecto</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Recurso centralizado para el desarrollo en Godot, diseñado para facilitar la consulta rápida de nodos y lógica de programación.
            </p>
            <div className="flex gap-4">
              <div className="bg-slate-50 p-4 rounded-xl flex-1 border border-slate-100">
                <span className="text-2xl font-bold text-[#4d90c1]">150+</span>
                <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Nodos</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex-1 border border-slate-100">
                <span className="text-2xl font-bold text-purple-600">40+</span>
                <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Scripts</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 h-fit">
            <h4 className="font-bold text-purple-900 mb-3 text-sm">Estado</h4>
            <ul className="text-xs space-y-2 text-purple-800/70">
              <li>• Entorno Tauri: <span className="font-bold text-green-600">Listo</span></li>
              <li>• UI React: <span className="font-bold text-green-600">En proceso</span></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}