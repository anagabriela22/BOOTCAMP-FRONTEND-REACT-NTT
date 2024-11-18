# JavaScript Market App

## Descripción del proyecto (Rama `feature/javascript`)

Este proyecto es una aplicación creada con Vanilla JavaScript y Vite. La funcionalidad principal incluye:

- **Carga dinámica de productos** desde la API [DummyJSON](https://dummyjson.com/docs/products#products-all).
- **Búsqueda en tiempo real**: Filtra productos mientras el usuario escribe.
- **Filtro por categorías**: Muestra productos según la categoría seleccionada.
- **Carrito dinamico**: Incrementa el contador en el menú superior al agregar productos.
- **Diseño responsivo**: Adaptado a diferentes dispositivos (Mobil, Tablet y Pc).

La rama `feature/javascript` contiene estas implementaciones.

## Instalación y ejecución local

1. **Clona el repositorio**:
   git clone <https://github.com/anagabriela22/BOOTCAMP-FRONTEND-REACT-NTT>

2. **Cambia a la rama correspondiente**:
git checkout feature/javascript

3. **Instala las dependencias**:
npm install

4. **Inicia el servidor de desarrollo**:
npm run dev

## Arquitectura de carpetas

src/
├── assets/
│   └── estilos.css       # Estilos de la aplicación
├── js/
│   ├── FiltrarPorBusqueda.js      # Filtrado dinámico en la barra de búsqueda
│   ├── FiltrarPorCategoria.js     # Filtrado por categorías
│   ├── IncrementarContador.js     # Incrementa el contador del carrito
│   ├── MostrarCategorias.js       # Carga dinámica de categorías
│   ├── MostrarProductos.js        # Carga dinámica de productos
│   ├── ResponseDesign.js          # Funciones de diseño responsivo
│   └── ScrollSmooth.js            # Animaciones de scroll
├── services/
│   ├── Categorias.js              # Consumo de la API de categorías
│   └── Productos.js               # Consumo de la API de productos
├── index.html                     # Archivo principal HTML
├── main.js                        # Punto de entrada de la aplicación
