export const projects = [
  {
    id: "quickstay",
    title: "QuickStay - Gestión Hotelera & Reservas",
    subtitle: "Plataforma integral de reservaciones y administración hotelera",
    category: "Full Stack",
    featured: true,
    liveUrl: "https://hotel.xibalbadev.xyz",
    githubUrl: "https://github.com/RafaelCastroRR/Hotel-Manager-Frontend",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Chakra UI", "Node.js", "Express", "MongoDB", "Cloudflare Zero Trust", "Nginx"],
    shortDesc: "Sistema completo de reservas turísticas en Guatemala con tarifas exactas en Quetzales (Q), panel multi-gerente, aprobación de eventos y cotización de servicios adicionales.",
    fullDesc: "QuickStay es una solución de grado de producción desplegada en un servidor Linux con túnel seguro de Cloudflare. Permite a los clientes explorar hoteles emblemáticos de Guatemala, reservar habitaciones calculando noches e impuestos de ley, y personalizar sus estadías con servicios adicionales (tours, gastronomía, spas). Incluye paneles diferenciados para Super Administradores y Gerentes de Hotel con flujos de aprobación de eventos y reportes analíticos.",
    highlights: [
      "Arquitectura distribuida con frontend en React y backend Express sobre MongoDB Atlas",
      "Soporte multi-administrador asignando 2 gerentes independientes por hotel",
      "Sincronización dinámica de precios basada en la habitación más económica",
      "Aprobación de eventos empresariales y cotización de servicios personalizados",
      "Despliegue automatizado con Nginx, PM2 y Cloudflare Zero Trust Tunnel"
    ]
  },
  {
    id: "novabank",
    title: "Nova Bank - Sistema Bancario Digital",
    subtitle: "Plataforma FinTech empresarial para operaciones monetarias",
    category: "Full Stack",
    featured: true,
    liveUrl: "https://novabank.xibalbadev.xyz", // O el subdominio que configure el usuario
    githubUrl: "https://github.com/RafaelCastroRR/Nova-Bank",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "2FA", "JWT", "Charts"],
    shortDesc: "Aplicación bancaria moderna con seguridad 2FA, gestión de cuentas, transferencias inmediatas, cambio de divisas y analíticas de transacciones en tiempo real.",
    fullDesc: "Nova Bank es un sistema bancario full-stack diseñado bajo estrictos estándares de seguridad y usabilidad. Cuenta con autenticación robusta mediante tokens JWT y verificación en dos pasos (2FA), módulo de transferencias entre cuentas bancarias, conversión dinámica de divisas y generación de comprobantes digitales de pago.",
    highlights: [
      "Autenticación segura con JWT y verificación en dos pasos (2FA)",
      "Historial de transacciones con visualización gráfica interactiva",
      "Transferencias entre cuentas con validación de saldo en tiempo real",
      "Panel de administración para verificación de clientes y productos de crédito",
      "Diseño de interfaz ultra-moderno con Tailwind CSS y componentes accesibles"
    ]
  },
  {
    id: "anime-finder",
    title: "Buscador de Anime Interactivo",
    subtitle: "Catálogo y explorador de series con consumo de API REST",
    category: "Frontend",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR",
    githubUrl: "https://github.com/RafaelCastroRR",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
    shortDesc: "Buscador ágil de series y películas anime con filtros en tiempo real, sinopsis detalladas, rankings y modo oscuro.",
    fullDesc: "Aplicación frontend desarrollada para explorar miles de títulos de anime conectándose a APIs públicas. Incluye debouncing en el input de búsqueda, filtros por categoría y año, y modal con trailers y puntuaciones comunitarias.",
    highlights: [
      "Búsqueda instantánea con debouncing para reducir peticiones a la API",
      "Filtros avanzados por género, estado de emisión y popularidad",
      "Diseño responsivo optimizado para dispositivos móviles",
      "Manejo elegante de estados de carga (skeletons) y errores"
    ]
  },
  {
    id: "event-manager",
    title: "Administrador de Eventos & Recordatorios",
    subtitle: "Herramienta de productividad y agenda de citas",
    category: "Frontend",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR",
    githubUrl: "https://github.com/RafaelCastroRR",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "JavaScript", "LocalStorage", "Chakra UI"],
    shortDesc: "Gestor visual para programar eventos, reuniones y recordatorios importantes con calendario interactivo.",
    fullDesc: "Sistema creado para la planificación personal y de equipos. Permite agendar eventos con fechas límite, etiquetas de prioridad, confirmación de asistencia y notificaciones emergentes.",
    highlights: [
      "Calendario interactivo con vista mensual y semanal",
      "Categorización por colores y nivel de prioridad",
      "Persistencia de datos y exportación de actividades",
      "Interfaz limpia enfocada en minimizar fricción"
    ]
  },
  {
    id: "opinion-blog",
    title: "Blog de Opiniones & Comunidad Tech",
    subtitle: "Plataforma editorial con interacción comunitaria",
    category: "Full Stack",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR",
    githubUrl: "https://github.com/RafaelCastroRR",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "Express", "Chakra UI", "MongoDB"],
    shortDesc: "Portal para compartir opiniones, tutoriales y debates técnicos con sistema de comentarios y votaciones.",
    fullDesc: "Plataforma de contenido colaborativo donde desarrolladores pueden publicar artículos de interés, recibir feedback constructivo y debatir en hilos de conversación.",
    highlights: [
      "Editor de artículos con soporte de formato enriquecido",
      "Hilos de comentarios anidados y reacciones en tiempo real",
      "Módulo de búsqueda por etiquetas tecnológicas",
      "Control de roles para moderación de contenido"
    ]
  }
];
