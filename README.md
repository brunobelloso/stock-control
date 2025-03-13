# Stock Control Project

Este proyecto es una aplicación de control de inventarios que consta de un backend en Node.js y un frontend en React.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/brunobelloso/stock-control.git
    cd stock-control
    ```

2. Crea un archivo `docker-compose.yml` en la carpeta principal con el siguiente contenido:
    ```yaml
    version: '3.8'
    services:
      backend:
        build: ./backend
        ports:
          - "3000:3000"
        environment:
          - MONGODB_URI=mongodb://mongo:27017/stock-control
        depends_on:
          - mongo

      frontend:
        build: ./frontend
        ports:
          - "5173:5173"
        environment:
          - VITE_API_URL=http://backend:3000
        depends_on:
          - backend

      mongo:
        image: mongo:latest
        ports:
          - "27017:27017"
    ```

3. Crea los archivos Dockerfile para backend y frontend.

    ````dockerfile
    // BACKEND
    FROM node:18
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD ["node", "index.js"]
    
    // FRONTEND
    FROM node:18
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 5173
    CMD ["npm", "run", "dev", "--", "--host"]
    ````

## Uso

1. Construye y levanta los contenedores con Docker Compose:
    ```sh
    docker-compose up --build
    ```

2. La aplicación backend estará disponible en `http://localhost:3000` y la aplicación frontend en `http://localhost:5173`.

## Endpoints de la API

- `GET /api/products`: Obtiene todos los productos.
- `GET /api/products/:id`: Obtiene un producto por su ID.
- `POST /api/products`: Crea un nuevo producto.
- `PUT /api/products/:id`: Actualiza un producto por su ID.
- `DELETE /api/products/:id`: Elimina un producto por su ID.

## Estructura del Proyecto

- `backend/`: Contiene el código del servidor Express y la configuración de MongoDB.
- `frontend/`: Contiene el código del cliente React.
- `docker-compose.yml`: Configuración de Docker Compose para levantar los servicios.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
