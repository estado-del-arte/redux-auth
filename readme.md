# Counter App

Una aplicación de contador desarrollada con React y Redux.

## Tecnologías Utilizadas

- **React**: interfaces de usuario
- **React Router**: Navegación entre páginas
- **Redux Toolkit**: Manejo del estado global
- **Bootstrap 5**: Framework CSS
- **Bootstrap Icons**: Iconografía

## Estructura del Proyecto

```
src/
├── components/          
│   ├── Navbar.jsx      
│   └── ProtectedRoute.jsx 
├── pages/              
│   ├── Home.jsx        
│   └── Counter.jsx     
├── features/           
│   ├── auth/           
│   │   └── authSlice.js    
│   └── counter/        
│       └── counterSlice.js 
├── app/
│   └── store.js        
├── App.jsx             
└── main.jsx           
```

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 16+)
- npm o yarn

### Pasos
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Ejecutar: `npm run dev`
4. Abrir: `http://localhost:5173`

## Funcionalidades

### Autenticación
- Login/Logout simple
- Modal de advertencia para rutas protegidas

### Contador
- Incrementar/Decrementar valores
- Reset a cero
- Indicador visual del estado
- Barra de progreso

## Configuración de Redux

### Auth Slice
- Estado: `isAuthenticated`
- Acciones: `login()`, `logout()`

### Counter Slice
- Estado: `value`
- Acciones: `increment()`, `decrement()`, `reset()`

## Rutas

- `/` - Página de inicio (pública)
- `/counter` - Contador (requiere autenticación)