import express from 'express';
import dotenv from  'dotenv';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import ingredientRoutes from './routes/ingredientRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/ingredients', ingredientRoutes);

const PORT = process.env.PORT
app.listen(PORT || 3000, () =>{
    console.log(`Sunucu ${PORT} portunda ayakta !!!`);
})
