import { Router } from "express";
import { addIngredient, editIngredient, getIngredient, listIngredients, removeIngredient } from "../controllers/ingredientController.js";
const router = Router();

router.get('/', listIngredients);
router.get('/:id', getIngredient);
router.post('/', addIngredient);
router.put('/:id', editIngredient);
router.delete('/:id', removeIngredient)

export default router;
