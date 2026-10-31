export const projects = [
  {
    id: "quickstay",
    title: "QuickStay",
    subtitle: "Sistema de Gestión Hotelera & Reservas",
    category: "Full Stack",
    featured: true,
    liveUrl: "https://hotel.xibalbadev.xyz",
    githubUrl: "https://github.com/RafaelCastroRR/Hotel-Manager-Frontend",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Chakra UI", "Node.js", "Express", "MongoDB", "Nginx", "Cloudflare"],
    shortDesc: "Plataforma completa de reservas hoteleras en Guatemala con tarifas en Quetzales, gestión multi-administrador por hotel, reservación de eventos y cotización de servicios.",
    fullDesc: "QuickStay es una plataforma web integral diseñada para la industria hotelera en Guatemala. Permite a los usuarios buscar hoteles, consultar disponibilidad de habitaciones con tarifas dinámicas en Quetzales (Q), gestionar reservas calculando noches e impuestos, y cotizar eventos y servicios complementarios. Incluye un panel administrativo con roles diferenciados para administradores globales y gerentes individuales de hotel.",
    highlights: [
      "Frontend interactivo desarrollado en React con Chakra UI",
      "Backend RESTful en Node.js y Express con persistencia en MongoDB Atlas",
      "Panel administrativo con control de acceso por roles (Admin y Gerente)",
      "Sincronización en tiempo real de tarifas y estados de reservación",
      "Despliegue en servidor Linux con Nginx y Cloudflare Zero Trust"
    ]
  },
  {
    id: "novabank",
    title: "Nova Bank",
    subtitle: "Plataforma Bancaria Digital",
    category: "Full Stack",
    featured: true,
    liveUrl: "https://novabank.xibalbadev.xyz",
    githubUrl: "https://github.com/RafaelCastroRR/Nova-Bank",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "2FA"],
    shortDesc: "Aplicación bancaria con autenticación de dos factores (2FA), transferencias inmediatas entre cuentas, conversión de divisas e historial analítico.",
    fullDesc: "Nova Bank es una solución bancaria enfocada en seguridad y experiencia de usuario. Implementa autenticación robusta mediante tokens JWT y verificación en dos pasos (2FA), gestión de cuentas monetarias y de ahorro, transferencias con validación de saldo instantáneo y gráficas analíticas de movimientos.",
    highlights: [
      "Autenticación segura con JWT y segundo factor de verificación (2FA)",
      "Módulo de transferencias con validaciones estrictas de balance",
      "Historial de transacciones con filtros y gráficos interactivos",
      "Diseño contemporáneo construido con React y Tailwind CSS"
    ]
  },
  {
    id: "event-manager",
    title: "Task & Event Manager",
    subtitle: "Administrador de Eventos y Calendario",
    category: "Frontend",
    featured: true,
    liveUrl: "https://eventos.xibalbadev.xyz",
    githubUrl: "https://github.com/RafaelCastroRR/Proyect-Final-Ada",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Chakra UI", "FullCalendar", "Vite", "JavaScript"],
    shortDesc: "Herramienta de productividad personal con calendario dinámico, categorización por colores, prioridades y sistema de recordatorios.",
    fullDesc: "Aplicación interactiva creada para la organización de eventos y tareas. Integra FullCalendar para visualización mensual y semanal, creación rápida de compromisos, filtros por etiquetas (trabajo, personal, reuniones) y almacenamiento local sin pérdida de información.",
    highlights: [
      "Integración completa con FullCalendar para vistas mensual y semanal",
      "Sistema de filtrado dinámico por prioridad y categoría",
      "Gestión de recordatorios con notificaciones visuales",
      "Persistencia de datos en el navegador y arquitectura modular"
    ]
  },
  {
    id: "opinion-blog",
    title: "Dev Learning Blog",
    subtitle: "Blog Técnico y Espacio de Opinión",
    category: "Full Stack",
    featured: true,
    liveUrl: "https://blog.xibalbadev.xyz",
    githubUrl: "https://github.com/RafaelCastroRR/Learning-blog-Front",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    tags: ["Stack MERN", "React", "Node.js", "Express", "MongoDB Atlas", "Chakra UI"],
    shortDesc: "Plataforma de publicaciones académicas y técnicas con arquitectura MERN, hilos de comentarios en vivo y base de datos en la nube.",
    fullDesc: "Blog colaborativo construido con el stack MERN (MongoDB, Express, React, Node.js). Los usuarios pueden explorar publicaciones técnicas clasificadas por asignaturas de ingeniería, redactar nuevos posts y participar en hilos de discusión interactivos.",
    highlights: [
      "Arquitectura MERN completa con API REST desacoplada",
      "Sistema de comentarios relacionados por identificador de post",
      "Conexión a MongoDB Atlas con esquema estructurado en Mongoose",
      "Interfaz adaptable a modo claro y oscuro con Chakra UI"
    ]
  },
  {
    id: "coperex",
    title: "COPEREX Interfer",
    subtitle: "Sistema de Registro de Socios y Stands",
    category: "Backend",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Proyect-COPEREX",
    githubUrl: "https://github.com/RafaelCastroRR/Proyect-COPEREX",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "REST API"],
    shortDesc: "API REST desarrollada para la Corporación de Ferias y Exposiciones (COPEREX) para administrar la asignación de stands y empresas en Interfer.",
    fullDesc: "Servicio backend diseñado para digitalizar el proceso de integración comercial en la feria Interfer. Controla la afiliación de socios, catalogación de pabellones, asignación de stands comerciales y generación de historiales de contratación.",
    highlights: [
      "Autenticación con JWT y control de acceso por roles",
      "Modelado de esquemas en MongoDB con validación estricta",
      "Filtros de búsqueda por sector comercial y tamaño de stand",
      "Manejo centralizado de respuestas y errores HTTP"
    ]
  },
  {
    id: "superkinal",
    title: "SuperKinal POS",
    subtitle: "Sistema Punto de Venta y Control de Stock",
    category: "Desktop & Java",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Super--IN5CV",
    githubUrl: "https://github.com/RafaelCastroRR/Super--IN5CV",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "JavaFX", "MySQL", "JDBC", "Patrón MVC", "JasperReports"],
    shortDesc: "Software de escritorio para supermercados desarrollado bajo patrón MVC con JavaFX, transacciones ACID en MySQL y facturación.",
    fullDesc: "Aplicación de escritorio empresarial para la cadena SuperKinal. Aplica el patrón Modelo-Vista-Controlador (MVC), transacciones con MySQL a través de JDBC, control de existencias en almacén, registro de compras a proveedores, cálculo de impuestos y reportes impresos con JasperReports.",
    highlights: [
      "Patrón de arquitectura MVC con separación limpia de lógica y vistas",
      "Conexión a MySQL con consultas preparadas y control de transacciones",
      "Módulo de caja con cálculo de totales, descuentos y cambio",
      "Reportes ejecutivos e impresión de comprobantes con JasperReports"
    ]
  },
  {
    id: "adoption-system",
    title: "Adoption System",
    subtitle: "Gestión de Rescate y Adopción Animal",
    category: "Full Stack",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/AdoptionSystem",
    githubUrl: "https://github.com/RafaelCastroRR/AdoptionSystem",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "REST API"],
    shortDesc: "Plataforma para refugios de animales con fichas médicas de mascotas, carga de fotos a Cloudinary y seguimiento de solicitudes de adopción.",
    fullDesc: "Herramienta web creada para apoyar a albergues de animales. Permite registrar animales rescatados con su historial de vacunas y esterilización, subir imágenes a Cloudinary, y evaluar formularios de adoptantes para seguimiento del bienestar animal.",
    highlights: [
      "Catálogo de animales con filtros por especie, edad y estado de salud",
      "Integración de Cloudinary para subida y compresión de fotos",
      "Flujo de aprobación para solicitudes de adopción",
      "Arquitectura modular en Node.js y MongoDB"
    ]
  },
  {
    id: "react-native-starter",
    title: "Mobile App Hub",
    subtitle: "Aplicación Móvil con React Native",
    category: "Mobile",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/React-Native-Basic-for-beginners",
    githubUrl: "https://github.com/RafaelCastroRR/React-Native-Basic-for-beginners",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Expo", "JavaScript", "React Navigation", "AsyncStorage"],
    shortDesc: "Aplicación móvil para iOS y Android con pestañas inferiores de navegación, listas dinámicas optimizadas y almacenamiento local.",
    fullDesc: "Desarrollo móvil utilizando React Native y Expo. Implementa navegación nativa con Bottom Tabs y Stack Navigator, renderizado eficiente con FlatList, manipulación de estados asíncronos y persistencia en el dispositivo mediante AsyncStorage.",
    highlights: [
      "Navegación nativa declarativa con React Navigation",
      "Componentes táctiles adaptados a las directrices de iOS y Android",
      "Persistencia de estado en memoria local con AsyncStorage",
      "Estructura modular lista para escalar a entornos de producción"
    ]
  },
  {
    id: "opiniones-social",
    title: "Social Opinions API",
    subtitle: "API de Publicaciones y Hilos de Debate",
    category: "Backend",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Gestor-Opiniones",
    githubUrl: "https://github.com/RafaelCastroRR/Gestor-Opiniones",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express", "MongoDB", "Bcrypt", "JWT"],
    shortDesc: "API REST que reproduce la mecánica de foros y redes sociales con control de propiedad de publicaciones, comentarios y moderación.",
    fullDesc: "Servicio backend enfocado en la interacción de usuarios. Ofrece autenticación con tokens JWT, hashing de contraseñas con Bcrypt, creación de temas de debate, comentarios anidados y reglas de autorización para que solo el autor pueda editar sus aportes.",
    highlights: [
      "Autenticación segura basada en tokens JWT",
      "Control estricto de autoría en operaciones de actualización y borrado",
      "Separación limpia de rutas, controladores y middlewares",
      "Modelado de datos optimizado para consultas de alta concurrencia"
    ]
  },
  {
    id: "biblioteca-javafx",
    title: "Biblioteca JavaFX",
    subtitle: "Software de Control de Préstamos y Libros",
    category: "Desktop & Java",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Repo-Biblioteca-JAVAFX",
    githubUrl: "https://github.com/RafaelCastroRR/Repo-Biblioteca-JAVAFX",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "JavaFX", "POO", "MySQL", "JDBC"],
    shortDesc: "Aplicación de escritorio para la administración de catálogos bibliográficos, control de usuarios y registro de préstamos y multas.",
    fullDesc: "Sistema de escritorio desarrollado en Java con interfaz gráfica en JavaFX. Permite registrar títulos y ejemplares disponibles, llevar el control de socios lectores, calcular penalizaciones por entregas tardías y consultar estadísticas de lectura.",
    highlights: [
      "Programación Orientada a Objetos y patrones de diseño en Java",
      "Interfaz gráfica con formularios validados en JavaFX",
      "Persistencia de datos en MySQL mediante JDBC",
      "Cálculo automatizado de penalizaciones por devolución fuera de fecha"
    ]
  },
  {
    id: "jakarta-ee-products",
    title: "Catálogo Jakarta EE",
    subtitle: "Gestor Web de Productos con Servlets y JSP",
    category: "Desktop & Java",
    featured: false,
    liveUrl: "https://github.com/RafaelCastroRR/Primera-Practica-Jakarta",
    githubUrl: "https://github.com/RafaelCastroRR/Primera-Practica-Jakarta",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "Jakarta EE", "Servlets", "JSP", "Apache Tomcat", "MVC"],
    shortDesc: "Aplicación web corporativa para administración de mercancías desarrollada con la especificación Jakarta EE y desplegada en Tomcat.",
    fullDesc: "Proyecto enfocado en los estándares de desarrollo Java para la web. Emplea Servlets como controladores HTTP, páginas JSP para renderizado dinámico del catálogo de inventario, manejo de sesiones y despliegue en servidor de aplicaciones Apache Tomcat.",
    highlights: [
      "Arquitectura MVC utilizando la especificación oficial de Jakarta EE",
      "Manejo de peticiones HTTP, redirecciones y sesiones con Servlets",
      "Vistas dinámicas con JavaServer Pages (JSP) y JSTL",
      "Despliegue y configuración de servidor Apache Tomcat"
    ]
  }
];
