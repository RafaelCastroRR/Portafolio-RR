export const skillGroups = [
  {
    title: "Frontend & Mobile",
    description: "Desarrollo de interfaces reactivas, aplicaciones móviles y sistemas de diseño accesibles.",
    skills: [
      { name: "React 19 & Vite", detail: "Hooks personalizados, ciclo de vida, optimización de renderizados y arquitectura modular." },
      { name: "JavaScript (ES6+)", detail: "Dominio de programación asíncrona (Promises, async/await), closures y manipulación del DOM." },
      { name: "React Native & Expo", detail: "Aplicaciones móviles nativas con React Navigation (Bottom Tabs), listas dinámicas y AsyncStorage." },
      { name: "Tailwind CSS & Chakra UI", detail: "Diseño contemporáneo con utilidades, accesibilidad WAI-ARIA y componentes temáticos." },
      { name: "HTML5 & CSS Semántico", detail: "Estructuras semánticas accesibles, Flexbox, CSS Grid y animaciones fluidas." }
    ]
  },
  {
    title: "Backend & Arquitectura",
    description: "Construcción de APIs RESTful escalables, control de sesiones y lógica de negocio segura.",
    skills: [
      { name: "Node.js & Express", detail: "Servidores modulares, middlewares de seguridad, rutas desacopladas y controladores." },
      { name: "Java (POO & Patrón MVC)", detail: "Programación Orientada a Objetos, interfaces gráficas en JavaFX y arquitectura empresarial." },
      { name: "Autenticación, JWT & 2FA", detail: "Protección de endpoints, hashing con Bcrypt/Argon2 y verificación en dos pasos." },
      { name: "Arquitectura RESTful", detail: "Diseño de endpoints consistentes, códigos de estado HTTP y manejo centralizado de errores." }
    ]
  },
  {
    title: "Bases de Datos",
    description: "Diseño y administración de modelos relacionales y no relacionales para alta concurrencia.",
    skills: [
      { name: "MongoDB & Atlas", detail: "Esquemas estrictos con Mongoose, índices optimizados y bases de datos en la nube." },
      { name: "MySQL & JDBC", detail: "Diseño de modelos relacionales, integridad referencial, consultas complejas y transacciones ACID." }
    ]
  },
  {
    title: "Infraestructura & DevOps",
    description: "Puesta en marcha, monitoreo y aseguramiento de aplicaciones en servidores propios.",
    skills: [
      { name: "Servidores Linux (Ubuntu / CasaOS)", detail: "Administración de sistema operativo, gestión de servicios con systemd y automatizaciones." },
      { name: "Nginx Reverse Proxy", detail: "Balanceo de carga, enrutamiento por host header y entrega de assets estáticos." },
      { name: "Cloudflare Zero Trust", detail: "Túneles cifrados directos al localhost protegiendo servicios sin exponer puertos." },
      { name: "PM2 Process Manager", detail: "Control de microservicios en segundo plano, reinicio automático ante fallos y logs." },
      { name: "Git & GitHub", detail: "Control de versiones, flujos colaborativos de ramas, pull requests y despliegues automáticos." }
    ]
  }
];
