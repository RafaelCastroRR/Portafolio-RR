export const skillCategories = [
  {
    category: "Frontend",
    description: "Creación de interfaces fluidas, responsivas y accesibles con arquitecturas modernas de componentes.",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, desc: "Lenguaje principal, programación asíncrona, closures y manipulación del DOM." },
      { name: "React.js", level: 90, desc: "Custom hooks, gestión de estado, renderizado optimizado y modularidad." },
      { name: "React Native", level: 85, desc: "Desarrollo de aplicaciones móviles híbridas con componentes reutilizables." },
      { name: "Tailwind CSS", level: 92, desc: "Diseño moderno con utilidades, themes personalizados y glassmorphism." },
      { name: "Chakra UI", level: 88, desc: "Sistemas de diseño basados en componentes accesibles y temado flexible." },
      { name: "HTML5 & CSS3 Semántico", level: 95, desc: "Buenas prácticas SEO, Flexbox, Grid Layout y animaciones fluidas." }
    ]
  },
  {
    category: "Backend & Bases de Datos",
    description: "Construcción de servidores robustos, APIs RESTful seguras y modelado de datos escalable.",
    skills: [
      { name: "Node.js & Express", level: 85, desc: "Desarrollo de APIs REST, middlewares, validaciones y arquitectura MVC." },
      { name: "MongoDB & Mongoose", level: 80, desc: "Bases de datos NoSQL, esquemas estrictos, agregaciones e índices." },
      { name: "MySQL", level: 75, desc: "Diseño relacional, consultas SQL, joins y claves foráneas." },
      { name: "Autenticación & JWT", level: 88, desc: "Cifrado con Argon2/Bcrypt, tokens de sesión y seguridad 2FA." }
    ]
  },
  {
    category: "Herramientas & DevOps",
    description: "Flujos de trabajo colaborativos, control de versiones e infraestructura de despliegue continuo.",
    skills: [
      { name: "Git & GitHub", level: 90, desc: "Ramas, pull requests, resolución de conflictos y versionado limpio." },
      { name: "Linux / CasaOS", level: 82, desc: "Administración de servidores, systemd, permisos y bash scripts." },
      { name: "Nginx & Reverse Proxy", level: 80, desc: "Enrutamiento de puertos, buffers y entrega de assets estáticos." },
      { name: "Cloudflare Zero Trust", level: 85, desc: "Túneles cifrados directos al localhost sin apertura de puertos inseguros." },
      { name: "PM2 Process Manager", level: 85, desc: "Monitoreo de procesos en segundo plano, reinicios automáticos y logs." }
    ]
  }
];
