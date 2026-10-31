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
    liveUrl: "https://novabank.xibalbadev.xyz",
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
    id: "event-manager",
    title: "Administrador de Eventos & Recordatorios",
    subtitle: "Herramienta de productividad y agenda de citas interactiva",
    category: "Frontend",
    featured: true,
    liveUrl: "https://eventos.xibalbadev.xyz",
    githubUrl: "https://github.com/RafaelCastroRR/Proyect-Final-Ada",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Chakra UI", "FullCalendar", "Vite", "JavaScript"],
    shortDesc: "Gestor visual para programar eventos, reuniones y recordatorios importantes con calendario interactivo y filtros avanzados.",
    fullDesc: "Sistema creado para la planificación personal y de equipos. Permite agendar eventos con fechas límite, etiquetas de prioridad, confirmación de asistencia y notificaciones emergentes con FullCalendar y Chakra UI.",
    highlights: [
      "Calendario interactivo con FullCalendar y vista dinámica mensual/semanal",
      "Categorización por colores y nivel de prioridad",
      "Persistencia de datos y gestión de recordatorios",
      "Interfaz limpia y moderna enfocada en minimizar fricción"
    ]
  },
  {
    id: "opinion-blog",
    title: "Blog de Aprendizaje & Opiniones",
    subtitle: "Plataforma de publicaciones técnicas con interacción comunitaria",
    category: "Full Stack",
    featured: true,
    liveUrl: "https://blog.xibalbadev.xyz",
    githubUrl: "https://github.com/RafaelCastroRR/Learning-blog-Front",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "Express", "Chakra UI", "MongoDB Atlas"],
    shortDesc: "Portal para compartir opiniones, tutoriales y artículos técnicos con sistema de comentarios y base de datos distribuida.",
    fullDesc: "Plataforma de contenido colaborativo desarrollada bajo arquitectura MERN donde usuarios pueden publicar opiniones y artículos de interés, interactuar en hilos de comentarios y clasificar temas.",
    highlights: [
      "Arquitectura MERN completa (MongoDB Atlas, Express, React, Node)",
      "Sistema de comentarios dinámicos asociados a publicaciones",
      "API REST con rutas modulares y controladores desacoplados",
      "Diseño responsivo con Chakra UI y animaciones fluidas"
    ]
  }
];
