# ConversaBot - Chatbot con OpenAI API

ConversaBot es un chatbot simple construido con la OpenAI API, Next.js, Shadcn y Tailwind CSS. Este proyecto es una excelente introducción a la creación de aplicaciones basadas en inteligencia artificial y la implementación de una interfaz de usuario moderna.

## Tecnologías utilizadas

- **OpenAI API**: Para generar respuestas inteligentes y realistas.
- **Next.js**: Framework de React para construir aplicaciones web.
- **Shadcn**: Librería de componentes de React.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y responsivos.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js (v14 o superior)
- NPM o Yarn
- Una cuenta en [OpenAI](https://platform.openai.com/docs/quickstart) y una clave API

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/CodeWithChaza/conversa_bot.git
   cd conversabot
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm install
   # o si usas Yarn
   yarn install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto y agrega tu clave de la API de OpenAI:
   ```bash
   OPENAI_API_KEY=tu_clave_api
   ```

4. Configura los estilos de Tailwind en `tailwind.config.js` y asegúrate de que Shadcn esté integrado con tu proyecto Next.js.

## Uso

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o si usas Yarn
   yarn dev
   ```

2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el proyecto en acción.

## Características

- **Interfaz intuitiva**: La interfaz está diseñada con Tailwind CSS y Shadcn, ofreciendo un diseño limpio y responsivo.
- **Respuestas AI**: Integra la OpenAI API para proporcionar respuestas de chatbot en tiempo real.
- **Configurabilidad**: Puedes modificar el prompt del chatbot para ajustar su comportamiento.

## Contribuciones

Si quieres contribuir a este proyecto, por favor, realiza un fork del repositorio y abre un pull request con tus mejoras.

## Licencia

Este proyecto se distribuye bajo la licencia MIT.

---

¡Espero que te sea útil! Puedes personalizar este README según las necesidades de tu proyecto y añadir cualquier sección adicional que consideres importante, como ejemplos de uso o notas sobre la configuración del entorno de producción.