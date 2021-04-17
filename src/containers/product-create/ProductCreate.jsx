import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { productsCreateAction, productsCreateResetAction } from "../../store/products/actions"
import { productsCreateSelector } from "../../store/products/selectors"

const priceValidate = (value) => {
    return value < 0 ? 0 : value
}

const ProductCreate = () => {
    const createStore = useSelector(productsCreateSelector)
    const history = useHistory()
    const dispatch = useDispatch()
    const [data, setData] = useState({
        price: 0,
        name: '',
        description: '',
        imgUrl: '',
    })

    useEffect(() => {
        if (createStore.data.id) {
            dispatch(productsCreateResetAction())
            history.push('/products')
        }
    }, [createStore, history, dispatch])

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

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(productsCreateAction(data));
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label>Name</label>
                <input name="name" value={data.name} onChange={handlerChange} /><br />
                <label>Price</label>
                <input type="number" name="price" value={data.price} onChange={handlerChange} /><br />
                <label>Description</label>
                <textarea name="description" value={data.description} onChange={handlerChange} /><br />
                <label>imgUrl</label>
                <input name="imgUrl" value={data.imgUrl} onChange={handlerChange} /><br />
                <button>Save</button>
            </form>
        </div>
    )
}

export default ProductCreate
