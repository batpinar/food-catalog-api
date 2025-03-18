import db from '../config/database.js';

export const getAllIngredients = () => {
    const query = db('ingredients')
    return query;
}

export const getIngredientById = (id: number) => {
    return db('ingredients').where({ id }).first();
}

export const createIngredient = (data: object) => {
    return db('ingredients').insert(data).returning('*');
}

export const updateIngredient = (id: number, data: object) => {
    return db('ingredients').where({ id }).update(data).returning('*');
}

export const deleteIngredient = (id: number) => {
    return db('ingredients').where({ id }).update({ deleted_at: new Date() }).returning('*');

}