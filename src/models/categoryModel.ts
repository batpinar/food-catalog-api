import db from '../config/database.js';
import { SHOW_DELETED_OPTIONS } from '../constants.js';

export const getAllCategories = (showDeleted:string) => {
    const query = db('categories')
    if (showDeleted === SHOW_DELETED_OPTIONS.ONLY_DELETED) {
        query.whereNotNull('deleted_at') // Silinmiş kayıtları getir
    } else if (showDeleted !== SHOW_DELETED_OPTIONS.ALL) {
        query.whereNull('deleted_at') // Silinmemiş kayıtları getir
    }
    return query // default 
}

export const getCategoryById = (id: number) => {
    return db('categories').where({ id, deleted_at: null }).first();
}

export const createCategory = (data: object) => {
    return db('categories').insert(data).returning('*');
}

export const updateCategory = (id: number, data: object) => {
    return db('categories').where({ id }).update(data).returning('*');
}

export const deleteCategory = (id: number) => {
    return db('categories').where({ id }).update({ deleted_at: new Date() }).returning('*');

}