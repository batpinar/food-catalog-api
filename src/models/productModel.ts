import db from '../config/database.js';
import { SHOW_DELETED_OPTIONS, POST_STATUS } from '../constants.js';


export const getAllProducts = (showDeleted?: string, category?: number) => {
    const query = db('products')

    if (category) {
        query.where('category_id', category)
    }

    if (showDeleted === SHOW_DELETED_OPTIONS.ONLY_DELETED) {
        query.whereNotNull('deleted_at') // Silinmiş kayıtları getir
    } else if (showDeleted !== SHOW_DELETED_OPTIONS.ALL) {
        query.whereNull('deleted_at') // Silinmemiş kayıtları getir
    }
    return query
}

export const getProductById = (id: number) => {
    return db('products').where({ id, deleted_at: null }).first();
}

export const createProduct = (data: object) => {
    return db('products').insert(data).returning('*');
}

export const updateProduct = (id: number, data: object) => {
    return db('products').where({ id }).update(data).returning('*');
}

export const deleteProduct = (id: number) => {
    return db('products').where({ id }).update({ deleted_at: new Date() }).returning('*');

}