# JavaScript Market App

## Descripción del proyecto (Rama `feature/typescript`)

Este proyecto es una aplicación creada con Vanilla Typescript y Vite. La funcionalidad principal incluye:

- **Carga dinámica de productos** desde la API [DummyJSON](https://dummyjson.com/docs/products#products-all).
- **Búsqueda en tiempo real**: Filtra productos mientras el usuario escribe.
- **Filtro por categorías**: Muestra productos según la categoría seleccionada.
- **Carrito dinamico**: Incrementa el contador en el menú superior al agregar productos.
- **Diseño responsivo**: Adaptado a diferentes dispositivos (Mobil, Tablet y Pc).

La rama `feature/typescript` contiene estas implementaciones.

## Instalación y ejecución local

1. **Clona el repositorio**:
   git clone <https://github.com/anagabriela22/BOOTCAMP-FRONTEND-REACT-NTT>

2. **Cambia a la rama correspondiente**:
git checkout feature/typescript

3. **Instala las dependencias**:
npm install

4. **Inicia el servidor de desarrollo**:
npm run dev

## Arquitectura de carpetas

src/
├── assets/
│   └── estilos.css       # Estilos de la aplicación
├── js/
│   ├── FiltrarPorBusqueda.ts      # Filtrado dinámico en la barra de búsqueda
│   ├── FiltrarPorCategoria.ts     # Filtrado por categorías
│   ├── IncrementarContador.ts     # Incrementa el contador del carrito
│   ├── MostrarCategorias.ts       # Carga dinámica de categorías
│   ├── MostrarProductos.ts        # Carga dinámica de productos
│   ├── ResponseDesign.ts          # Funciones de diseño responsivo
│   └── ScrollSmooth.ts            # Animaciones de scroll
├── mappers/
│   ├── Producto.mapper.ts         # Mapea los datos de la API a modelos de la aplicación
├── models/
│   ├── Categoria.type.ts          # Tipo para las categorías
│   └── Productos.type.ts          # Tipo para los productos
├── services/
│   ├── Categorias.ts              # Consumo de la API de categorías
│   └── Productos.ts               # Consumo de la API de productos
├── index.html                     # Archivo principal HTML
├── main.ts                        # Punto de entrada de la aplicación
├── tsconfig.json                  # Configuración del compilador de TypeScript
