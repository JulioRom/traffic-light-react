# Simulación de semáforo

Este proyecto es una simulación de un semáforo creado con React. Permite a los usuarios interactuar con el semáforo haciendo clic en las luces para encenderlas y apagarlas. Las características adicionales incluyen alternar entre colores y agregar dinámicamente un nuevo color de luz.

## Características

- **Semáforo interactivo**: haz clic en cualquier luz (roja, amarilla, verde) para encenderla y apagar las demás.
- **Botón de alternancia**: un botón que alterna entre los colores de la luz en secuencia.
- **Agregar nueva luz**: un botón para agregar dinámicamente una luz violeta al semáforo.
- **Efectos visuales mejorados**: las luces se iluminan y agrandan levemente cuando están activas, para una mejor visibilidad.

## Instalación

Para ejecutar este proyecto localmente, siga estos pasos:

1. Clone el repositorio:
```bash
git clone <repository-url>
```
2. Navegue hasta el directorio del proyecto:
```bash
cd Traffic-light-simulation
```
3. Instale las dependencias:
```bash
npm install
```
4. Inicie el servidor de desarrollo:
```bash
npm start
```
5. Abra su navegador y navegue hasta:
```
http://localhost:3000
```

## Descripción general del código

### Componente principal: `TrafficLight`

- **Administración de estado**:
- `color`: rastrea el color activo actualmente.
- `colors`: una matriz de colores de luz disponibles (inicialmente rojo, amarillo, verde).
- **Funciones**:
- `toggleColor`: recorre los colores de luz secuencialmente.
- `addPurple`: Agrega una luz violeta al semáforo si aún no existe.
- **Renderizado**:
- Un `div` representa cada luz, con un estilo dinámico para indicar la luz activa.

### Estilo

- El contenedor del semáforo tiene un estilo que se asemeja a un semáforo del mundo real.
- Las luces son circulares y cambian de apariencia (brillo y tamaño) cuando están activas.
- El contenedor se centra en la pantalla mediante CSS flexbox.

### Botones

- **Alternar color**: Cambia de luces.
- **Agregar púrpura**: Agrega una luz violeta de manera dinámica.

## Estructura de archivo

```plaintext
.
├── src
│ ├── index.js # Punto de entrada para la aplicación
│ ├── TrafficLight.js # Componente principal con todas las funciones
│ └── styles.css # Estilos para la aplicación
├── public
│ └── index.html # Plantilla HTML
├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación del proyecto
```

## Mejoras futuras

- **Colores personalizados**: permite a los usuarios agregar cualquier color ingresando un código hexadecimal o seleccionando de un selector de color.
- **Automatización temporizada**: alterna automáticamente las luces a intervalos fijos.
- **Optimización móvil**: mejora el diseño y la interacción táctil para dispositivos móviles.

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Contribución

No dudes en bifurcar el repositorio y enviar solicitudes de incorporación de mejoras o correcciones de errores. ¡Las contribuciones son bienvenidas!

## Autor

- **Desarrollado por JulioRom**  
- **Contacto:** [julioandrescampos@gmail.com](mailto:julioandrescampos@gmail.com)  
- **GitHub:** [https://github.com/JulioRom](https://github.com/JulioRom)

