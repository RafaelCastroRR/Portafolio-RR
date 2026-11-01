export const skillGroups = [
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile",
    iconKey: "Smartphone",
    badge: "UI / UX & Mobile",
    description: "Desarrollo de interfaces reactivas de alto rendimiento, aplicaciones móviles nativas y sistemas de diseño accesibles.",
    skills: [
      {
        name: "React 19 & Vite",
        tag: "Core Framework",
        level: "Producción",
        levelColor: "emerald",
        detail: "Arquitectura modular, hooks personalizados avanzados, memoización, ciclo de vida y optimización de renderizados concurrentes.",
        pills: ["React 19", "Vite", "Custom Hooks", "SPA Architecture"]
      },
      {
        name: "JavaScript Moderno (ES6+)",
        tag: "Lenguaje",
        level: "Avanzado",
        levelColor: "sky",
        detail: "Programación asíncrona (Promises, async/await), closures, manipulación eficiente del DOM y prototipos nativos.",
        pills: ["ES2024", "Async/Await", "Event Loop", "Modular JS"]
      },
      {
        name: "React Native & Expo",
        tag: "Mobile",
        level: "Producción",
        levelColor: "emerald",
        detail: "Aplicaciones móviles nativas con React Navigation (Bottom Tabs & Stacks), listas dinámicas fluidas y almacenamiento local.",
        pills: ["React Native", "Expo", "Navigation", "AsyncStorage"]
      },
      {
        name: "Tailwind CSS & Design Systems",
        tag: "Estilos & UI",
        level: "Avanzado",
        levelColor: "sky",
        detail: "Maquetación contemporánea con utilidades atómicas, dark mode nativo, micro-animaciones fluidas y accesibilidad WAI-ARIA.",
        pills: ["Tailwind CSS", "Flexbox/Grid", "Responsive", "UI/UX"]
      }
    ]
  },
  {
    id: "backend-architecture",
    title: "Backend & Arquitectura",
    iconKey: "Server",
    badge: "APIs & Servicios",
    description: "Construcción de APIs RESTful escalables, control de sesiones seguro, arquitectura multicapa y lógica de negocio empresarial.",
    skills: [
      {
        name: "Node.js & Express",
        tag: "Backend Runtime",
        level: "Producción",
        levelColor: "emerald",
        detail: "Servidores modulares, middlewares de validación, manejo centralizado de excepciones y arquitecturas limpias desacopladas.",
        pills: ["Node.js", "Express", "Middlewares", "Clean Architecture"]
      },
      {
        name: "Java (POO & Patrón MVC)",
        tag: "Enterprise",
        level: "Avanzado",
        levelColor: "sky",
        detail: "Programación Orientada a Objetos robusta, interfaces de escritorio en JavaFX, conectividad JDBC y separación estricta de capas MVC.",
        pills: ["Java 17+", "JavaFX", "JDBC", "POO", "Patrón MVC"]
      },
      {
        name: "Seguridad, JWT & Autenticación",
        tag: "Seguridad",
        level: "Especialista",
        levelColor: "violet",
        detail: "Protección de rutas sensibles, tokens JWT cifrados, hashing con Bcrypt/Argon2, rate limiting, sanitización de inputs y 2FA.",
        pills: ["JWT", "Bcrypt", "2FA", "Sanitización", "CORS"]
      },
      {
        name: "Arquitectura RESTful & Microservicios",
        tag: "Arquitectura",
        level: "Avanzado",
        levelColor: "sky",
        detail: "Diseño de contratos de API consistentes, códigos de estado HTTP semánticos, paginación, filtros y documentación estructurada.",
        pills: ["RESTful", "Postman", "API Contracts", "JSON Schema"]
      }
    ]
  },
  {
    id: "databases",
    title: "Bases de Datos & Persistencia",
    iconKey: "Database",
    badge: "SQL & NoSQL",
    description: "Modelado de datos relacional y documental, optimización de índices, transacciones ACID y alta disponibilidad.",
    skills: [
      {
        name: "MongoDB & Mongoose",
        tag: "NoSQL",
        level: "Producción",
        levelColor: "emerald",
        detail: "Modelado documental con esquemas estrictos, validaciones avanzadas, índices compuestos y despliegues en MongoDB Atlas.",
        pills: ["MongoDB", "Mongoose", "Atlas", "Aggregations"]
      },
      {
        name: "MySQL & Modelos Relacionales",
        tag: "SQL Relacional",
        level: "Avanzado",
        levelColor: "sky",
        detail: "Diseño de esquemas normalizados, integridad referencial (FK), consultas analíticas complejas, triggers y transacciones ACID.",
        pills: ["MySQL", "Workbench", "ACID", "Stored Procedures"]
      }
    ]
  },
  {
    id: "devops-cloud",
    title: "Infraestructura, DevOps & Redes",
    iconKey: "Terminal",
    badge: "SysAdmin & Cloud",
    description: "Despliegue autónomo, monitoreo continuo, proxies inversos y túneles seguros en servidores Linux propios.",
    skills: [
      {
        name: "Servidores Linux (Ubuntu / CasaOS)",
        tag: "SysAdmin",
        level: "Producción",
        levelColor: "emerald",
        detail: "Administración completa de sistemas operativos Linux, scripting Bash, permisos de usuario seguros, systemd y control de memoria.",
        pills: ["Ubuntu Server", "CasaOS", "SSH", "Bash", "Systemd"]
      },
      {
        name: "Nginx Reverse Proxy",
        tag: "Networking",
        level: "Avanzado",
        levelColor: "sky",
        detail: "Enrutamiento multi-dominio por Host Header, terminación SSL, entrega optimizada de estáticos y headers de seguridad HTTP.",
        pills: ["Nginx", "Reverse Proxy", "Security Headers", "VirtualHosts"]
      },
      {
        name: "Cloudflare Zero Trust & Tunnels",
        tag: "Edge / Cloud",
        level: "Especialista",
        levelColor: "violet",
        detail: "Exposición segura de microservicios mediante túneles cifrados directos al localhost sin necesidad de abrir puertos públicos.",
        pills: ["Cloudflare One", "Zero Trust", "Tunnels", "DNS Automation"]
      },
      {
        name: "PM2 Process Manager",
        tag: "Runtime",
        level: "Producción",
        levelColor: "emerald",
        detail: "Gestión de microservicios en producción, auto-reinicio ante fallos de proceso, persistencia de demonios y trazabilidad de logs.",
        pills: ["PM2", "Process Lifecycle", "Monitoring", "Daemon Persistence"]
      },
      {
        name: "Git & GitHub CI/CD",
        tag: "Control de Versiones",
        level: "Avanzado",
        levelColor: "sky",
        detail: "Gestión de repositorios con llaves SSH (ED25519), ramas de producción, resolución de conflictos y scripts de auto-deploy.",
        pills: ["Git", "GitHub", "SSH Keys", "Autodeploy Scripts"]
      }
    ]
  }
];
