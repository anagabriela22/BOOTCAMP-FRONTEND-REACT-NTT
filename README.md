# Market App

## Descripción del proyecto (Rama `feature/react-fundamentos`)

Este proyecto es una aplicación creada con React + Typescript + Vite. La funcionalidad principal incluye:

- **Carga dinámica de productos** desde la API [DummyJSON](https://dummyjson.com/docs/products#products-all).
- **Búsqueda en tiempo real**: Filtra productos mientras el usuario escribe.
- **Filtro por categorías**: Muestra productos según la categoría seleccionada.
- **Carrito dinamico**: Incrementa el contador en el menú superior al agregar productos.
- **Diseño responsivo**: Adaptado a diferentes dispositivos (Mobil, Tablet y Pc).

La rama `feature/react-fundamentos` contiene estas implementaciones.

## Instalación y ejecución local

1. **Clona el repositorio**:
   git clone <https://github.com/anagabriela22/BOOTCAMP-FRONTEND-REACT-NTT>

2. **Cambia a la rama correspondiente**:
git checkout feature/react-fundamentos

3. **Instala las dependencias**:
npm install

4. **Inicia el servidor de desarrollo**:
npm run dev

## Arquitectura de carpetas

src/
├── assets/                     # Recursos estaticos (imagenes, íconos, etc.)
│   └── [imagenes...]
├── componentes/                # Componentes reutilizables de React
│   ├── Banner.tsx
│   ├── BotonScroll.tsx
│   ├── Carrito.tsx
│   ├── Categorias.tsx
│   ├── Footer.tsx
│   ├── Navegacion.tsx
│   ├── Paginacion.tsx
│   ├── Productos.tsx
│   ├── Servicios.tsx
│   └── TarjetaProducto.tsx
├── context/                    # Contextos para manejo de estados globales
│   └── Contexto.tsx
├── utils/                      # Utilidades generales
│   ├── DisenoResponsivo.ts
│   ├── FuncionalidadScroll.ts
│   └── MostrarMensajeCoincidencia.ts
├── services/                   # Interacción con APIs externas
│   ├── Categorias.ts
│   └── Productos.ts
├── mappers/                    # Transformaciones de datos
│   └── Producto.mapper.ts
├── models/                     # Tipos y modelos de datos
│   ├── Categoria.type.ts
│   └── Productos.type.ts
├── estilos.css                 # Archivo de estilos (CSS)
├── index.html                  # Archivo principal HTML
├── main.tsx                    # Punto de entrada de React
├── App.tsx                     # Componente raíz de la aplicación
├── tsconfig.json               # Configuración de TypeScript
├── vite.config.ts              # Configuración de Vite
