import db from '../config/database.js';

export const getAllIngredients = () => {
    const query = db('ingredients')
    return query;
}

export const getIngredientById = (id) => {
    return db('ingredients').where({ id }).first();
}

export const createIngredient = (data) => {
    return db('ingredients').insert(data).returning('*');
}

export const updateIngredient = (id, data) => {
    return db('ingredients').where({ id }).update({ ...data, updated_at: new Date() }).returning('*');
}

export const deleteIngredient = (id) => {
    return db('ingredients').where({ id }).update({ deleted_at: new Date() }).returning('*');

}