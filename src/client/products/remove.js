import { API_HOST, API_PRODUCTS } from '../index'

const client = async (entity) => {
    try {
        await fetch(`${API_HOST}/${API_PRODUCTS}/${entity.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (e) {
        throw new Error('API_ERROR')
    }
}

export default client
