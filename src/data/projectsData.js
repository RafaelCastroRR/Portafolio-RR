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
    tags: ["React", "Chakra UI", "Node.js", "Express", "MongoDB Atlas", "Cloudflare Zero Trust", "Nginx"],
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
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas", "2FA", "JWT", "Charts"],
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
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Chakra UI", "FullCalendar", "Vite", "JavaScript", "LocalStorage"],
    shortDesc: "Gestor visual para programar eventos, reuniones y recordatorios importantes con calendario interactivo y filtros avanzados por prioridad.",
    fullDesc: "Sistema creado para la planificación personal y de equipos. Permite agendar eventos con fechas límite, etiquetas de prioridad, confirmación de asistencia y notificaciones emergentes con FullCalendar y Chakra UI.",
    highlights: [
      "Calendario interactivo con FullCalendar y vista dinámica mensual/semanal",
      "Categorización por colores y nivel de prioridad (trabajo, personal, reuniones)",
      "Persistencia de datos y gestión de recordatorios programados",
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
    shortDesc: "Portal para compartir opiniones, tutoriales y artículos técnicos con sistema de comentarios y base de datos distribuida en la nube.",
    fullDesc: "Plataforma de contenido colaborativo desarrollada bajo arquitectura MERN donde usuarios pueden publicar opiniones y artículos de interés técnico, interactuar en hilos de comentarios y clasificar temas por asignaturas.",
    highlights: [
      "Arquitectura MERN completa (MongoDB Atlas, Express, React, Node)",
      "Sistema de comentarios dinámicos asociados a publicaciones",
      "API REST con rutas modulares y controladores desacoplados",
      "Diseño responsivo con Chakra UI y animaciones fluidas"
    ]
  },
  {
    id: "coperex",
    title: "COPEREX - Plataforma de Gestión de Ferias & Socios",
    subtitle: "API corporativa para administración de empresas y stands en Interfer",
    category: "Backend",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Proyect-COPEREX",
    githubUrl: "https://github.com/RafaelCastroRR/Proyect-COPEREX",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "REST API"],
    shortDesc: "Solución backend para la Corporación de Ferias y Exposiciones (COPEREX) que gestiona la afiliación de nuevos socios y empresas en la feria Interfer.",
    fullDesc: "Sistema backend empresarial desarrollado para optimizar los procesos de contratación e integración comercial de la famosa feria Interfer. Facilita el alta de empresas expositoras, registro de socios estratégicos, asignación de espacios/stands feriales y control de pagos y contratos.",
    highlights: [
      "Control de acceso y autenticación JWT con cifrado de contraseñas",
      "Modelado relacional sobre MongoDB mediante esquemas Mongoose",
      "Filtros de búsqueda avanzada por categoría de empresa y pabellón ferial",
      "Validaciones de negocio y middleware para integridad de datos"
    ]
  },
  {
    id: "superkinal",
    title: "SuperKinal - Sistema POS & Control de Inventario",
    subtitle: "Software empresarial de escritorio para cadena de supermercados",
    category: "Desktop & Java",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/SUPERKINAL-IN5CV",
    githubUrl: "https://github.com/RafaelCastroRR/SUPERKINAL-IN5CV",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "JavaFX", "MySQL", "JDBC", "MVC", "JasperReports"],
    shortDesc: "Punto de venta integral para supermercados con facturación en tiempo real, gestión de proveedores, kardex de productos y emisión de tickets.",
    fullDesc: "Sistema de escritorio robusto desarrollado en Java aplicando arquitectura Modelo-Vista-Controlador (MVC). Administra la cadena logística de SuperKinal: ventas en caja registradora, control de existencias en almacén, promociones por categoría, nómina de cajeros y generación de comprobantes con JasperReports.",
    highlights: [
      "Arquitectura MVC con interfaz gráfica dinámica diseñada en JavaFX",
      "Conexión persistente y transacciones seguras con MySQL mediante JDBC",
      "Módulo de cobranza, cálculo de IVA y emisión de facturas electrónicas",
      "Gestión de empleados, turnos de caja y control de mermas de almacén"
    ]
  },
  {
    id: "adoption-system",
    title: "AdoptionSystem - Red de Adopción & Rescate Animal",
    subtitle: "Plataforma integral para refugios y bienestar animal",
    category: "Full Stack",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/AdoptionSystem",
    githubUrl: "https://github.com/RafaelCastroRR/AdoptionSystem",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "REST API"],
    shortDesc: "Plataforma web para conectar rescatistas con adoptantes responsables, incluyendo historial veterinario y seguimiento de solicitudes.",
    fullDesc: "Sistema concebido para impulsar la adopción de mascotas rescatadas. Cuenta con fichas clínicas completas para cada animal (vacunación, esterilización, temperamento), subida de imágenes a Cloudinary, evaluación de postulantes y seguimiento post-adopción.",
    highlights: [
      "Catálogo dinámico de animales rescatados con filtros por especie y edad",
      "Subida y optimización de fotografías de rescates en Cloudinary",
      "Formularios de solicitud de adopción con estado de aprobación",
      "Arquitectura desacoplada en Node.js y MongoDB Atlas"
    ]
  },
  {
    id: "react-native-starter",
    title: "React Native Mobile Hub - Fundamentos Móviles",
    subtitle: "Aplicación móvil multiplataforma para iOS y Android",
    category: "Mobile",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/React-Native-Basic-for-beginners",
    githubUrl: "https://github.com/RafaelCastroRR/React-Native-Basic-for-beginners",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Expo", "Mobile Dev", "JavaScript", "Hooks", "AsyncStorage"],
    shortDesc: "Guía interactiva y aplicación móvil con navegación por tabs inferiores, gestión de listas de tareas, consumo de APIs y almacenamiento local.",
    fullDesc: "Proyecto desarrollado para dominar el desarrollo móvil con React Native. Incluye navegación nativa con React Navigation (Bottom Tabs & Stacks), componentes interactivos nativos, persistencia con AsyncStorage y manejo de estados asíncronos.",
    highlights: [
      "Navegación nativa fluida con Bottom Tabs y Stack Navigator",
      "Renderizado optimizado de listas con FlatList y animaciones",
      "Persistencia de datos en dispositivo con AsyncStorage",
      "Diseño adaptable a diferentes resoluciones de pantalla iOS y Android"
    ]
  },
  {
    id: "opiniones-social",
    title: "Gestor de Opiniones - Red Social Corporativa",
    subtitle: "API para comunidades de debate y retroalimentación técnica",
    category: "Backend",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Gestor-Opiniones",
    githubUrl: "https://github.com/RafaelCastroRR/Gestor-Opiniones",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express", "MongoDB", "Bcrypt", "JWT", "Security"],
    shortDesc: "API REST que emula la interacción social de debates tipo Facebook con hilos de opiniones, moderación y control de autoría.",
    fullDesc: "Backend para plataformas de opinión donde usuarios registrados pueden crear discusiones, publicar reflexiones y responder a colegas. Implementa seguridad estricta para garantizar que cada usuario únicamente pueda modificar o eliminar sus propias opiniones.",
    highlights: [
      "Autenticación con JWT y cifrado de contraseñas con Bcrypt",
      "Mecanismo de auditoría para historial de comentarios y ediciones",
      "Validaciones de roles y propiedad de publicaciones",
      "Arquitectura modular orientada a escalabilidad horizontal"
    ]
  },
  {
    id: "biblioteca-javafx",
    title: "Biblioteca Central - Gestión de Préstamos",
    subtitle: "Aplicación de escritorio para catalogación bibliográfica",
    category: "Desktop & Java",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Repo-Biblioteca-JAVAFX",
    githubUrl: "https://github.com/RafaelCastroRR/Repo-Biblioteca-JAVAFX",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "JavaFX", "POO", "MySQL", "JDBC", "Desktop"],
    shortDesc: "Sistema de escritorio para el control de inventarios bibliográficos, registro de miembros y administración de préstamos y devoluciones.",
    fullDesc: "Solución en Java desarrollada con Programación Orientada a Objetos y patrones de diseño. Permite catalogar títulos por autor, género e ISBN, controlar el stock disponible de ejemplares y calcular penalizaciones por retraso en devoluciones.",
    highlights: [
      "Modelado de datos relacional en MySQL con integridad referencial",
      "Control exhaustivo de préstamos activos, fechas límite y multas",
      "Diseño de interfaz amigable e intuitivo con JavaFX",
      "Validaciones de formulario y manejo centralizado de excepciones"
    ]
  },
  {
    id: "jakarta-ee-products",
    title: "Gestor de Mercancías - Jakarta EE (Java EE)",
    subtitle: "Aplicación web corporativa con Servlets, JSP y Tomcat",
    category: "Desktop & Java",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Primera-Practica-Jakarta",
    githubUrl: "https://github.com/RafaelCastroRR/Primera-Practica-Jakarta",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "Jakarta EE", "Servlets", "JSP", "Tomcat", "MVC"],
    shortDesc: "Aplicación web corporativa para el control y administración de inventario desarrollada bajo el estándar Jakarta EE desplegada en Tomcat.",
    fullDesc: "Implementación práctica de la tecnología Jakarta EE para la gestión de productos comerciales. Cuenta con arquitectura multicapa, procesamiento de peticiones HTTP con servlets, renderizado dinámico con JSP y persistencia en base de datos.",
    highlights: [
      "Arquitectura MVC tradicional con Servlets controladores y vistas JSP",
      "Gestión de sesiones de usuario y filtros de seguridad HTTP",
      "Despliegue y configuración en contenedor Apache Tomcat",
      "Manejo de formularios, validaciones de negocio y listados dinámicos"
    ]
  }
];
