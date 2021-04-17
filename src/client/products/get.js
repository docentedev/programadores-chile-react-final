import { API_HOST, API_PRODUCTS } from '../index'

const client = async (id) => {
    try {
        const response = await fetch(`${API_HOST}/${API_PRODUCTS}/${id}`)
        const data = await response.json()
        return data
    } catch (e) {
        throw new Error('API_ERROR')
    }
}

export default client
