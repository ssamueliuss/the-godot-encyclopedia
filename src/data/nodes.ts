export interface GodotNode {
  name: string;
  category: "Nodo" | "Nodo 2D" | "Nodo 3D" | "Control";
  description: string;
  icon: string;
  color: string;
  examples: string[];
}

export const nodesData: Record<string, GodotNode> = {
  // --- VISUALES ---
  "sprite-2d": {
    name: "Sprite2D",
    category: "Nodo 2D",
    description: "Nodo que muestra una textura 2D en el espacio bidimensional.",
    icon: "/icons/Sprite2D.svg",
    color: "#8da5f3",
    examples: ["Personaje principal", "Fondos estáticos", "Objetos del mundo"]
  },
  "animated-sprite-2d": {
    name: "AnimatedSprite2D",
    category: "Nodo 2D",
    description: "Similar a Sprite2D pero permite reproducir series de texturas como animaciones.",
    icon: "/icons/AnimatedSprite2D.svg",
    color: "#8da5f3",
    examples: ["Ciclos de caminar", "Explosiones", "Efectos visuales"]
  },
  "polygon-2d": {
    name: "Polygon2D",
    category: "Nodo 2D",
    description: "Dibuja un polígono plano basado en un conjunto de puntos.",
    icon: "/icons/Polygon2D.svg",
    color: "#8da5f3",
    examples: ["Terrenos dinámicos", "Formas geométricas", "Destrucción de mallas"]
  },
  "mesh-instance-2d": {
    name: "MeshInstance2D",
    category: "Nodo 2D",
    description: "Instancia una malla (Mesh) en 2D, útil para deformaciones complejas.",
    icon: "/icons/MeshInstance2D.svg",
    color: "#8da5f3",
    examples: ["Ropa con físicas", "Personajes con esqueletos", "Deformaciones de agua"]
  },

  // --- FÍSICAS ---
  "character-body-2d": {
    name: "CharacterBody2D",
    category: "Nodo 2D",
    description: "Cuerpo especializado para personajes controlados por código con detección de colisiones.",
    icon: "/icons/CharacterBody2D.svg",
    color: "#8da5f3",
    examples: ["Protagonista", "Enemigos con IA", "Plataformas móviles"]
  },
  "rigid-body-2d": {
    name: "RigidBody2D",
    category: "Nodo 2D",
    description: "Cuerpo físico controlado totalmente por el motor de simulación de Godot.",
    icon: "/icons/RigidBody2D.svg",
    color: "#8da5f3",
    examples: ["Cajas empujables", "Proyectiles con gravedad", "Escombros"]
  },
  "static-body-2d": {
    name: "StaticBody2D",
    category: "Nodo 2D",
    description: "Cuerpo físico que no se mueve. Ideal para el suelo y paredes del nivel.",
    icon: "/icons/StaticBody2D.svg",
    color: "#8da5f3",
    examples: ["Suelo", "Paredes", "Plataformas fijas"]
  },
  "area-2d": {
    name: "Area2D",
    category: "Nodo 2D",
    description: "Región del espacio 2D que detecta la entrada y salida de otros cuerpos.",
    icon: "/icons/Area2D.svg",
    color: "#8da5f3",
    examples: ["Checkpoints", "Zonas de daño", "Recogida de monedas"]
  },
  "collision-shape-2d": {
    name: "CollisionShape2D",
    category: "Nodo 2D",
    description: "Define la forma física (círculo, cuadrado, etc.) para un cuerpo o área.",
    icon: "/icons/CollisionShape2D.svg",
    color: "#8da5f3",
    examples: ["Hitbox de personaje", "Límites de nivel"]
  },
  "collision-polygon-2d": {
    name: "CollisionPolygon2D",
    category: "Nodo 2D",
    description: "Define una forma física compleja basada en puntos poligonales.",
    icon: "/icons/CollisionPolygon2D.svg",
    color: "#8da5f3",
    examples: ["Rampas irregulares", "Mapas cóncavos"]
  },

  // --- ESCENARIO Y UTILIDADES ---
  "tile-map-layer": {
    name: "TileMapLayer",
    category: "Nodo 2D",
    description: "Nueva forma de manejar capas de tiles de manera independiente en Godot 4.x.",
    icon: "/icons/TileMapLayer.svg",
    color: "#8da5f3",
    examples: ["Niveles de plataformas", "Mapas RPG top-down"]
  },
  "camera-2d": {
    name: "Camera2D",
    category: "Nodo 2D",
    description: "Nodo que define qué parte de la escena se muestra en pantalla.",
    icon: "/icons/Camera2D.svg",
    color: "#8da5f3",
    examples: ["Seguimiento de jugador", "Zoom en cinemáticas"]
  },
  "canvas-modulate": {
    name: "CanvasModulate",
    category: "Nodo 2D",
    description: "Tinte aplicado a todo el lienzo. Útil para sistemas de día y noche.",
    icon: "/icons/CanvasModulate.svg",
    color: "#8da5f3",
    examples: ["Niveles oscuros", "Cambios de clima", "Atardeceres"]
  },
  "parallax-background": {
    name: "ParallaxBackground",
    category: "Nodo 2D",
    description: "Maneja capas de fondo que se mueven a diferentes velocidades para crear profundidad.",
    icon: "/icons/ParallaxBackground.svg",
    color: "#8da5f3",
    examples: ["Cielos infinitos", "Bosques con profundidad"]
  },
  "parallax-layer": {
    name: "ParallaxLayer",
    category: "Nodo 2D",
    description: "Capa individual dentro de un ParallaxBackground.",
    icon: "/icons/ParallaxLayer.svg",
    color: "#8da5f3",
    examples: ["Nubes lejanas", "Montañas de fondo"]
  },
  "visible-on-screen-notifier-2d": {
    name: "VisibleOnScreenNotifier2D",
    category: "Nodo 2D",
    description: "Detecta cuando el nodo entra o sale de la vista de la cámara.",
    icon: "/icons/VisibleOnScreenNotifier2D.svg",
    color: "#8da5f3",
    examples: ["Desactivar enemigos lejanos", "Eliminar balas fuera de pantalla"]
  },

  // --- INFRAESTRUCTURA ---
  "node-2d": {
    name: "Node2D",
    category: "Nodo 2D",
    description: "Nodo base para todos los objetos 2D. Contiene posición, rotación y escala.",
    icon: "/icons/Node2D.svg",
    color: "#8da5f3",
    examples: ["Contenedor de entidades", "Puntos de spawn"]
  },
  "marker-2d": {
    name: "Marker2D",
    category: "Nodo 2D",
    description: "Un punto de referencia visual en el editor, invisible en el juego.",
    icon: "/icons/Marker2D.svg",
    color: "#8da5f3",
    examples: ["Puntos de salida de balas", "Posiciones de teletransporte"]
  },
  "skeleton-2d": {
    name: "Skeleton2D",
    category: "Nodo 2D",
    description: "Maneja una jerarquía de huesos para animaciones esqueléticas 2D.",
    icon: "/icons/Skeleton2D.svg",
    color: "#8da5f3",
    examples: ["Animación de personajes complejos", "Cut-out animation"]
  }
};