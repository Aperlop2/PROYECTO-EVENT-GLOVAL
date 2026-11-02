# 🌍 EventGlobal — Detector de Eventos Naturales en Tiempo Real

> Plataforma web académica de código abierto que monitorea terremotos y condiciones meteorológicas en tiempo real, integrando inteligencia artificial para el análisis contextual de eventos y Firebase para la gestión de usuarios.

[![Angular](https://img.shields.io/badge/Angular-17.3-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%2B%20Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5--turbo-412991?style=flat-square&logo=openai&logoColor=white)](https://openai.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

**Autor:** Ana Cristina Perez Lopez · **Contacto:** anacristinaperezlopez.dev01@gmail.com · **Linkedin** www.linkedin.com/in/ana-cristina-perez-lopez

---

## 📸 Captura de Pantalla

<img width="865" height="467" alt="image" src="https://github.com/user-attachments/assets/66446684-3328-4326-9253-38baaf02a953" />
<img width="867" height="422" alt="image" src="https://github.com/user-attachments/assets/da969fec-b4e9-436c-804f-bc52fe0392b8" />
<img width="870" height="421" alt="image" src="https://github.com/user-attachments/assets/55d2165d-0166-4618-9c81-adda25302b9d" />
<img width="477" height="327" alt="image" src="https://github.com/user-attachments/assets/c407e66f-b2bd-4658-a6a1-f71e4f530cf7" />
<img width="872" height="472" alt="image" src="https://github.com/user-attachments/assets/d78e8e9c-28ce-43aa-a71e-557f1614fbb8" />
<img width="880" height="491" alt="image" src="https://github.com/user-attachments/assets/e919e646-8b11-4e73-b980-d1a15abeae94" />
<img width="886" height="567" alt="image" src="https://github.com/user-attachments/assets/dd7cae6b-fc9b-472f-b4b7-552957bb650d" />

## 📋 Índice

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características Principales](#-características-principales)
- [Arquitectura y Tecnologías](#-arquitectura-y-tecnologías)
- [Estructura del Código](#-estructura-del-código)
- [Integración de APIs](#-integración-apis)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Decisiones Técnicas](#-decisiones-técnicas)
- [Estado del Proyecto y Roadmap](#-estado-del-proyecto-y-roadmap)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)

---

## 🎯 Descripción del Proyecto

**EventGlobal** es una Single Page Application (SPA) desarrollada como proyecto académico de código abierto. Su objetivo es centralizar la información sobre eventos naturales —principalmente actividad sísmica y fenómenos meteorológicos— en un panel de control interactivo, ofreciendo al usuario:

- **Monitoreo en tiempo real** de terremotos mediante la API pública del USGS (U.S. Geological Survey), con foco geográfico inicial en la Ciudad de México y un radio de detección de 500 km.
- **Pronósticos del clima** a través de WeatherAPI (condiciones actuales y pronóstico multidiario).
- **Análisis inteligente de eventos** usando la API de OpenAI (GPT-3.5-turbo) para generar resúmenes y contexto automatizado sobre los sucesos detectados.
- **Visualización geoespacial** con Google Maps y gráficos de series de datos con Chart.js.
- **Gestión de cuentas de usuario** con autenticación segura, verificación de correo y recuperación de contraseña mediante Firebase Authentication.

> 💡 *Este proyecto demuestra competencias en consumo de APIs REST, arquitectura modular en Angular, programación reactiva con RxJS, integración de servicios de IA y buenas prácticas de seguridad (manejo de claves vía `environments`).*

---

## ✨ Características Principales

| Módulo | Descripción | Estado |
|---|---|---|
| 🔐 **Autenticación** | Registro, login, logout, verificación de correo y restablecimiento de contraseña (Firebase Auth) | ✅ |
| 🛡️ **Rutas protegidas** | Guards de Angular (`auth.guard.ts`) para acceso condicional según sesión | ✅ |
| 🌎 **Terremotos en vivo** | Consulta reactiva a la API GeoJSON del USGS con radio configurable | ✅ |
| 🌦️ **Clima** | Condiciones actuales y pronóstico por ubicación (WeatherAPI) | ✅ |
| 🤖 **Análisis con IA** | Generación de descripciones contextuales de eventos vía OpenAI Chat Completions | ✅ |
| 🗺️ **Mapa interactivo** | Geolocalización de eventos con `@angular/google-maps` | ✅ |
| 📊 **Dashboard de perfil** | Submódulos de eventos destacados, historial de eventos y ubicación del usuario | ✅ |
| 👥 **Administración de usuarios** | Listado y gestión de cuentas (vista `user-list`) | ✅ |
| ⚠️ **Manejo de errores** | Páginas personalizadas 404 / 500 | ✅ |

---

## 🏗️ Arquitectura y Tecnologías

### Stack Tecnológico

| Categoría | Tecnología | Versión |
|---|---|---|
| Framework frontend | [Angular](https://angular.io) | 17.3 |
| UI / Componentes | [CoreUI Free](https://coreui.io/angular/) + Angular Material | 5.1 / 17.3 |
| Lenguaje | TypeScript | 5.4 |
| Programación reactiva | RxJS | 7.8 |
| Backend-as-a-Service | Firebase (Auth + Firestore) | 10.12 |
| Mapas | @angular/google-maps | 17.3 |
| Gráficos | Chart.js (@coreui/angular-chartjs) | 4.4 |
| Inteligencia Artificial | OpenAI API (gpt-3.5-turbo) | v1 |
| Pruebas unitarias | Karma + Jasmine | 6.4 / 5.1 |

### Patrón de Diseño

La aplicación sigue la **arquitectura modular estándar de Angular**:

```
Views (componentes de página)
   └──> Services (lógica de negocio y acceso a datos)
            └──> HttpClient / Firebase SDK  ──>  APIs externas (USGS, WeatherAPI, OpenAI)
```

- **Services inyectables** desacoplan el acceso a cada API (`earthquake.service`, `weather.service`, `openai.service`).
- **Guards funcionales** protegen rutas privadas declarativamente.
- **Environments** aíslan las claves de API fuera del código fuente (ver [configuración de entorno](#-configuración-de-entorno)).

---

## 📂 Estructura del Código

```
EventGlobal/
├── src/
│   ├── app/
│   │   ├── environment/          # Config. de claves (solo existe .example — ver abajo)
│   │   ├── guards/               # auth.guard.ts → protección de rutas
│   │   ├── layout/               # DefaultLayout: header, footer, sidebar (CoreUI)
│   │   ├── services/             # Capa de acceso a datos
│   │   │   ├── authenticate.service.ts   # Firebase Auth (registro/login/reset)
│   │   │   ├── earthquake.service.ts     # API USGS (GeoJSON)
│   │   │   ├── weather.service.ts        # API WeatherAPI
│   │   │   ├── openai.service.ts         # API OpenAI (chat completions)
│   │   │   └── user.service.ts           # Perfil / Firestore
│   │   └── views/pages/          # Vistas principales
│   │       ├── inicio/           # Landing / dashboard público
│   │       ├── login/ · register/# Flujo de autenticación
│   │       ├── perfil/           # Panel privado del usuario
│   │       │   ├── eventos-destacados/
│   │       │   ├── historial-eventos/
│   │       │   └── ubicacion/
│   │       ├── user-list/        # Administración de usuarios
│   │       └── page404/ · page500/
│   └── assets/                   # Imágenes y recursos estáticos
├── angular.json · tsconfig.json · karma.conf.js
└── package.json
```

---

## 🔌 Integración APIs

| API | Propósito | Endpoint clave | Autenticación |
|---|---|---|---|
| [USGS Earthquake](https://earthquake.usgs.gov) | Sismos en formato GeoJSON | `/fdsnws/event/1/query` | Pública (sin clave) |
| [WeatherAPI](https://www.weatherapi.com) | Clima actual y pronóstico | `/v1/current.json` · `/v1/forecast.json` | Query param `key` |
| [OpenAI](https://platform.openai.com) | Análisis textual de eventos | `/v1/chat/completions` (gpt-3.5-turbo) | Bearer token |
| [Firebase](https://firebase.google.com) | Auth y base de datos de usuarios | SDK `firebase/auth` · `firestore` | Service config |

---

## 🚀 Instalación y Configuración

### Requisitos previos

- **Node.js** ≥ 18.x y **npm** ≥ 9.x
- **Angular CLI** ≥ 17 (`npm install -g @angular/cli`)
- Cuentas (gratuitas) en: [WeatherAPI](https://www.weatherapi.com), [OpenAI](https://platform.openai.com) y un proyecto de [Firebase](https://console.firebase.google.com)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/[TU_USUARIO]/PROYECTO-EVENT-GLOVAL.git
cd PROYECTO-EVENT-GLOVAL/EventGlobal

# 2. Instalar dependencias
npm install

# 3. Configurar las claves de API (¡importante!)
cp src/app/environment/environment.example.ts src/app/environment/environment.ts
# Edita environment.ts y sustituye 'LLAVE_DE_OPENAI' y 'LLAVE_DE_WEATHERAPI',
# además de agregar tu objeto `firebase` con las credenciales de tu proyecto.

# 4. Levantar el entorno de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

### 🔒 Configuración de entorno

El repositorio **no incluye claves reales**. El archivo `environment.example.ts` documenta las variables necesarias:

```typescript
export const environment = {
  production: false,
  openaiApiKey: 'LLAVE_DE_OPENAI',      // https://platform.openai.com/api-keys
  weatherApiKey: 'LLAVE_DE_WEATHERAPI', // https://www.weatherapi.com/my/
  firebase: { /* firebaseConfig desde Console > Project Settings */ }
};
```

> ⚠️ Nunca comitees tu `environment.ts` con claves reales a un repositorio público. Añádelo a `.gitignore`.

---

## 🧪 Scripts Disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Sirve la app en modo desarrollo con recarga en caliente (`ng serve`) |
| `npm run build` | Compila la app para producción en `dist/` |
| `npm run watch` | Re-compilación continua en modo desarrollo |
| `npm test` | Ejecuta las pruebas unitarias con Karma/Jasmine en Chrome |

---

## 🧠 Decisiones Técnicas

| Decisión | Justificación |
|---|---|
| **Angular + Services inyectables** | Separación clara de responsabilidades; cada API se consume desde un servicio único y testeable. |
| **RxJS (`HttpClient`)** | Manejo reactivo y no bloqueante de respuestas asíncronas múltiples (clima + sismos + IA) sin *callback hell*. |
| **CoreUI Admin Template** | Aceleró el desarrollo del layout (sidebar, cards, widgets) manteniendo un diseño profesional y responsivo. |
| **Firebase Auth sobre backend propio** | Alcance académico: reduce la complejidad operativa mientras se practican flujos reales (verificación de correo, reset de contraseña, guards). |
| **OpenAI para resúmenes de eventos** | Demuestra integración práctica de LLMs en un producto: convierte datos crudos GeoJSON en información comprensible para el usuario. |
| **Claves en `environments`** | Sigue la convención oficial de Angular para segregar configuración por entorno y evitar filtración de secretos. |

### Desafíos resueltos

- **Normalización de datos heterogéneos**: las tres APIs devuelven esquemas distintos; se estandarizaron modelos de evento comunes en los servicios.
- **Composición de llamadas asíncronas encadenadas** (obtener sismo → pedir análisis a la IA) mediante operadores de piping de RxJS.
- **Protección declarativa de rutas privadas** con guards que validan la sesión de Firebase antes de renderizar el perfil.

---

## 📈 Estado del Proyecto y Roadmap

Estado actual: **✅ MVP funcional** (proyecto académico completado; abierto a mejoras continuas).

- [ ] Notificaciones en tiempo real (WebSockets / polling inteligente)
- [ ] Suscripciones por región y umbrales de magnitud personalizados
- [ ] Migración a componentes *standalone* de Angular y signals
- [ ] Cobertura de pruebas unitarias en servicios críticos
- [ ] Despliegue continuo (GitHub Actions → Firebase Hosting)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios:

1. Haz un *fork* del repositorio
2. Crea una rama: `git checkout -b feature/nombre-de-tu-feature`
3. Confirma tus cambios: `git commit -m 'feat: descripción breve'`
4. Envía un *Pull Request*

Para errores o sugerencias, abre un [Issue](https://github.com/[TU_USUARIO]/PROYECTO-EVENT-GLOVAL/issues).

---

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Consulta [`LICENSE`](EventGlobal/LICENSE) para más información.
La plantilla base de UI proviene de [CoreUI Free Angular Admin Template](https://coreui.io/angular/) (© creativeLabs).

---

## 👤 Autor

**Ana Cristina** — Aperlop2
> Proyecto académico de código abierto. Si te resulta útil, considéralo ⭐ — ¡ayuda a que más personas lo descubran!
