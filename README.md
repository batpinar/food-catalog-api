# Food Catalog API

This project is a REST API application for a food catalog. It provides CRUD operations for categories, products, and ingredients.

## Features

- Category management
- Product management
- Ingredient management
- PostgreSQL database integration
- Express.js based REST API

## Technologies

- Node.js
- Express.js
- PostgreSQL
- Knex.js (SQL Query Builder)

## Installation

1. Clone the project:
```bash
git clone [repository-url]
cd food-catalog-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `env.exp` file as `.env`
- Fill in the following variables with your database information:
  ```
  DB_NAME=
  DB_PORT=
  DB_USER=
  DB_PASSWORD=
  PORT=
  ```

4. Create database and run migrations:
```bash
npx knex migrate:latest
```

## Running the Application

To start the application in development mode:
```bash
npm start
```

The application will run on port 3000 by default.

## API Endpoints

### Categories
- GET /api/categories - List all categories
- POST /api/categories - Add new category
- GET /api/categories/:id - Get specific category
- PUT /api/categories/:id - Update category
- DELETE /api/categories/:id - Delete category

### Products
- GET /api/products - List all products
- POST /api/products - Add new product
- GET /api/products/:id - Get specific product
- PUT /api/products/:id - Update product
- DELETE /api/products/:id - Delete product

### Ingredients
- GET /api/ingredients - List all ingredients
- POST /api/ingredients - Add new ingredient
- GET /api/ingredients/:id - Get specific ingredient
- PUT /api/ingredients/:id - Update ingredient
- DELETE /api/ingredients/:id - Delete ingredient

## License

ISC
