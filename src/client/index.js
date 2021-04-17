import productsGetAll from './products/getAll'
import productsGet from './products/get'
import productsUpdate from './products/update'

export const API_HOST = 'http://localhost:4000'
export const API_PRODUCTS = 'products'

export const productsClient = {
    getAll: productsGetAll,
    get: productsGet,
    update: productsUpdate,
}