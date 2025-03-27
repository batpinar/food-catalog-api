import express from "express";
import { getAllIngredients, getIngredientById, createIngredient, updateIngredient, deleteIngredient } from "../models/ingredientModel.js";

export const listIngredients = async (req, res) => {
    try {
        const dbData = await getAllIngredients();
        res.json(dbData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const getIngredient = async (req, res) => {
    const { id } = req.params;
    try {
        const dbData = await getIngredientById(id);
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

export const addIngredient = async (req, res) => {
    try {
        const newData =  await createIngredient(req.body)
        res.status(202).json(newData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const editIngredient = async (req, res) =>{
    const { id } = req.params;
    try {
        const updateData = await updateIngredient(id, req.body)
        res.json(updateData)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const removeIngredient = async (req, res) => {
    const {id} = req.params
    try {
        const deleteData = await deleteIngredient(id);
        res.json(deleteData)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}