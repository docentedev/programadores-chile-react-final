import { API_HOST, API_PRODUCTS } from '../index'

const client = async (entity) => {
    try {
        const response = await fetch(`${API_HOST}/${API_PRODUCTS}/${entity.id}`, {
            method: 'PUT',
            body: JSON.stringify(entity),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        return data
    } catch (e) {
        throw new Error('API_ERROR')
    }
}

export default client
