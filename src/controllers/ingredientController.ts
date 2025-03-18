import { Request, Response } from "express";
import { getAllIngredients, getIngredientById, createIngredient, updateIngredient, deleteIngredient } from "../models/ingredientModel.js";

export const listIngredients = async (req: Request, res: Response) => {
    try {
        const dbData = await getAllIngredients();
        res.json(dbData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const getIngredient = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const dbData = await getIngredientById(Number(id));
        if (dbData) {
            res.json(dbData);
        } else {
            res.status(404).json({ message: "not_found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const addIngredient = async (req: Request, res: Response) => {
    try {
        const newData =  await createIngredient(req.body)
        res.status(202).json(newData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const editIngredient = async (req:Request, res:Response) =>{
    const { id } = req.params;
    try {
        const updateData = await updateIngredient(Number(id), req.body)
        res.json(updateData)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const removeIngredient = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const deleteData = await deleteIngredient(Number(id));
        res.json(deleteData)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}