import express from "express";
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../models/categoryModel.js";

export const listCategories = async (req, res) => {
    try {
        const { showDeleted } = req.query;
        const dbData = await getAllCategories(showDeleted);
        res.json(dbData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const getCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const dbData = await getCategoryById(id);
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

export const addCategory = async (req, res) => {
    try {
        const newData =  await createCategory(req.body)
        res.status(202).json(newData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const editCategory = async (req, res) =>{
    const { id } = req.params;
    try {
        const updateData = await updateCategory(id, req.body)
        res.json(updateData)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const removeCategory = async (req, res) => {
    const {id} = req.params
    try {
        const deleteData = await deleteCategory(id);
        res.json(deleteData)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}