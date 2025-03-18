import { Request, Response } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../models/productModel.js";


export const listProducts = async (req: Request, res: Response) => {
    try {
        const {showDeleted, category} = req.query
        const dbData = await getAllProducts(showDeleted as string, Number(category));
        res.json(dbData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const dbData = await getProductById(Number(id));
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

export const addProduct = async (req: Request, res: Response) => {
    try {
        const newData =  await createProduct(req.body)
        res.status(202).json(newData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const editProduct = async (req:Request, res:Response) =>{
    const { id } = req.params;
    try {
        const updateData = await updateProduct(Number(id), req.body)
        res.json(updateData)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}

export const removeProduct = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const deleteData = await deleteProduct(Number(id));
        res.json(deleteData)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bir hata oldu" })
    }
}