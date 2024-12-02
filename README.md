# Market App

## Descripción del proyecto (Rama `feature/proyecto-integrador`)

Este proyecto es una aplicación creada con React + Typescript + Vite + Jest. La funcionalidad principal incluye:

- **Carga dinámica de productos** desde la API [DummyJSON](https://dummyjson.com/docs/products#products-all).
- **Búsqueda en tiempo real**: Filtra productos mientras el usuario escribe.
- **Filtro por categorías**: Muestra productos según la categoría seleccionada.
- **Carrito dinamico**: Incrementa el contador en el menú superior al agregar productos.
- **Diseño responsivo**: Adaptado a diferentes dispositivos (Mobil, Tablet y Pc).
- **Pagina resumen**: Se visualizara el detalle de tu carrito de compras.
- **Pruebas unitarias**: Se puede realizar el testeo de cada uno de los componentes, hooks y vistas.
- **Funcionalidad de autenticacion**: La web permite iniciar sesion, visualizar nombre y cerrar sesion.

La rama `feature/proyecto-integrador` contiene estas implementaciones.

## Instalación y ejecución local

1. **Clona el repositorio**:
   git clone <https://github.com/anagabriela22/BOOTCAMP-FRONTEND-REACT-NTT>

2. **Cambia a la rama correspondiente**:
git checkout feature/proyecto-integrador

3. **Instala las dependencias**:
npm install --force

4. **Inicia el servidor de desarrollo**:
npm run dev

5. **Ejecuta los tests (pruebas unitarias)**:
npm run test

## Arquitectura de carpetas

public
├── distritos.js/               # Datos de distritos para el formulario de envio
src/
├── assets/                     # Recursos estaticos (imagenes, íconos, etc.)
│   └── [imagenes...]
├── componentes/                # Componentes reutilizables de React
│   ├── Carrito/
        └── [componentes]
│   ├── Testing/
        └── [pruebas_unitarias]
│   ├── Banner.tsx
│   ├── BotonScroll.tsx
│   ├── Busqueda.tsx
│   ├── Carrito.tsx
│   ├── Categorias.tsx
│   ├── Footer.tsx
│   ├── Navegacion.tsx
│   ├── Paginacion.tsx
│   ├── Productos.tsx
│   ├── Servicios.tsx
│   ├── NavUser.tsx
│   └── TarjetaProducto.tsx
├── context/                    # Contextos para manejo de estados globales
│   └── Contexto.tsx
│   └── Reducer.tsx
├── enum/                       # Variables globales constantes
│   └── Rutas.tsx
│   └── Validaciones.tsx
├── hooks/                      # Hooks de la aplicacion
│   ├── Testing/
        └── [pruebas_unitarias]
│   └── useDistritos.tsx
├── mappers/                    # Transformaciones de datos
│   └── Producto.mapper.ts
├── models/                     # Tipos y modelos de datos
│   ├── Categoria.type.ts
│   └── Productos.type.ts
├── services/                   # Interacción con APIs externas
│   ├── Auth.ts
│   ├── Categorias.ts
│   └── Productos.ts
├── hoc/                   # Interacción con APIs externas
│   ├── withAuth.tsx
├── utils/                      # Utilidades generales
│   ├── CadenasTxt.ts
│   ├── DisenoResponsivo.ts
│   ├── FuncionalidadScroll.ts
│   └── Almacenamiento.ts
├── views/                      # Vistas de la aplicacion
│   ├── Testing/
        └── [pruebas_unitarias]
│   ├── CarritoView.ts
│   ├── PrincipalView.ts
│   ├── LoginView.ts
├── App.tsx                     # Componente raíz de la aplicación
├── Environment.tsx             # Variables globales de la aplicacion
├── main.tsx                    # Punto de entrada de React
├── rutas.tsx                   # Rutas de la aplicacion
jest.config.cjs                 # Configuracion de pruebas unitarias
setupTests.ts                   # Archivo inicial de pruebas unitarias
tsconfig.app.json               # Configuración de TypeScript
tsconfig.json                   # Configuración de TypeScript
vite.config.ts                  # Configuración de Vite
