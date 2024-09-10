# Mi Proyecto Expo

Este es un proyecto creado con Expo, una herramienta para desarrollar aplicaciones móviles utilizando React Native. Este README contiene instrucciones detalladas sobre cómo emular y ejecutar el proyecto.

## Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Ejecutar la Aplicación](#ejecutar-la-aplicación)
5. [Desarrollo](#desarrollo)
6. [Construcción para Producción](#construcción-para-producción)
7. [Contribuciones](#contribuciones)
8. [Licencia](#licencia)

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (LTS recomendado)
- [Yarn](https://yarnpkg.com/getting-started/install) (opcional, pero recomendado)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (para instalar, ejecuta `npm install -g expo-cli`)

## Instalación

Sigue estos pasos para clonar el repositorio y configurar el entorno de desarrollo:

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/andresfelipe3112/Test-t-cnico-React-Native
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

   o si prefieres usar Yarn:

   ```bash
   yarn install
   ```

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```
.
├── .expo/
├── .expo-shared/
├── node_modules/
├── src/
│   ├── components/
│   ├── context/
│   ├── screens/
│   └── App.js
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```

- `src/`: Contiene todos los archivos de código fuente.
- `src/components/`: Componentes reutilizables de la aplicación.
- `src/context/`: Contexto para el manejo del estado global (ej. tema).
- `src/screens/`: Pantallas de la aplicación.
- `App.js`: Archivo principal de la aplicación.

## Ejecutar la Aplicación

Para ejecutar la aplicación en modo de desarrollo, utiliza uno de los siguientes comandos:

```bash
npm start
```

o

```bash
yarn start
```

Esto abrirá una ventana en tu navegador con el panel de Expo, donde puedes elegir entre las siguientes opciones:

- **Ejecutar en un dispositivo físico**: Escanea el código QR con la aplicación Expo Go disponible en iOS y Android.
- **Ejecutar en un emulador**: Asegúrate de tener un emulador de Android configurado y ejecuta la opción correspondiente en el panel.

## Desarrollo

Si deseas realizar cambios en la aplicación:

1. Abre el archivo correspondiente en `src/`.
2. Realiza tus modificaciones.
3. Guarda los cambios y la aplicación se recargará automáticamente.

## Construcción para Producción

Para crear una versión optimizada para producción, ejecuta:

```bash
expo build:android
```

o

```bash
expo build:ios
```

Esto generará un archivo APK (Android) o IPA (iOS) que puedes distribuir.

## Contribuciones

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
