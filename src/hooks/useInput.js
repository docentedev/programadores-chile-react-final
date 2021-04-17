import { useState } from "react"

const priceValidate = (value) => {
    return value < 0 ? 0 : value
}

const useInput = (initialState) => {
    const [data, setData] = useState(initialState)

    const handlerChange = (event) => {
        const target = event.target
        let value = target.value
        const name = target.name
        if (name === 'price') {
            value = priceValidate(value)
        }

        setData({
            ...data,
            [name]: value,
        })
    }

    return {
        data,
        handlerChange,
        setData,
    }
}

export default useInput