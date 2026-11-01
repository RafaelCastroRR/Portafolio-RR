# ⚡ Portafolio de Ingeniería de Software – Rafael Castro

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo_en_Vivo-portafolio.xibalbadev.xyz-0ea5e9?style=for-the-badge&logo=googlechrome&logoColor=white)](https://portafolio.xibalbadev.xyz)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare_Zero_Trust-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://www.cloudflare.com/)

<p align="center">
  <b>Portafolio personal de desarrollo web full stack e infraestructura self-hosted. Diseñado con una estética luxury dark inspirada en plataformas como Linear y Vercel, optimizado para alto rendimiento y accesibilidad.</b>
</p>

</div>

---

## 📌 Descripción del Proyecto

Este proyecto es la plataforma web principal que expone mis proyectos de software, experiencia técnica, stack tecnológico y vías directas de contacto. Está construido con las tecnologías web más modernas (React 19, Vite, Tailwind CSS v4) y auto-alojado en un servidor propio con Linux, enrutado mediante Nginx y protegido de extremo a extremo por túneles cifrados de Cloudflare Zero Trust.

---

## ✨ Características Principales

- **Diseño Luxury Dark:** Paleta de colores minimalista y elegante en tonos oscuros con acentos en cyan/sky, tipografía Geist Mono y Plus Jakarta Sans.
- **Showcase de Proyectos:** Tarjetas interactivas con filtros por categoría (Full Stack, Backend, Java, Móvil), badges dinámicos de estado en producción y enlaces directos a demos y código.
- **Stack Tecnológico Detallado:** Vista modular de habilidades con niveles de dominio (`Producción`, `Avanzado`, `Especialista`), tags de categoría y píldoras tecnológicas.
- **Modal de CV Integrado:** Visualizador interactivo de hoja de vida con opción de descarga directa en PDF y resumen curricular.
- **Formulario de Contacto Seguro:** Validación estricta en el cliente, sanitización contra inyecciones CRLF, límites de longitud y enlaces directos a WhatsApp Business y correo electrónico.
- **Seguridad HTTP:** Servido con encabezados estrictos (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `X-XSS-Protection`, `Referrer-Policy: strict-origin-when-cross-origin`).

---

## 🛠️ Tecnologías

- **Librería UI:** [React 19](https://react.dev/)
- **Empaquetador & Dev Server:** [Vite 8](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Linter & Calidad de Código:** [Oxlint](https://oxc.rs/)
- **Infraestructura:** Ubuntu Server, Nginx Reverse Proxy, PM2 Process Manager, Cloudflare Tunnels

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- Node.js (v18 o superior)
- npm o pnpm

### 1. Clonar el repositorio
```bash
git clone git@github.com:RafaelCastroRR/Portafolio-RR.git
cd Portafolio-RR
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados para distribución se generarán en la carpeta `dist/`.

---

## 🌐 Despliegue en Producción

La versión en vivo está desplegada en:
👉 **[https://portafolio.xibalbadev.xyz](https://portafolio.xibalbadev.xyz)**

---

## 📬 Contacto

- **Desarrollador:** Rafael Castro
- **Correo:** [rafaelcastro0605@gmail.com](mailto:rafaelcastro0605@gmail.com)
- **WhatsApp:** [+502 3632 3559](https://wa.me/50236323559)
- **GitHub:** [@RafaelCastroRR](https://github.com/RafaelCastroRR)
