import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { productsCreateAction, productsCreateResetAction } from "../../store/products/actions"
import { productsCreateSelector } from "../../store/products/selectors"
import useInput from '../../hooks/useInput'

const ProductCreate = () => {
    const inputData = useInput({
        price: 0,
        name: '',
        description: '',
        imgUrl: '',
    })
    const createStore = useSelector(productsCreateSelector)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        if (createStore.data.id) {
            dispatch(productsCreateResetAction())
            history.push('/products')
        }
    }, [createStore, history, dispatch])

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(productsCreateAction(inputData.data));
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label>Name</label>
                <input name="name" value={inputData.data.name} onChange={inputData.handlerChange} /><br />
                <label>Price</label>
                <input type="number" name="price" value={inputData.data.price} onChange={inputData.handlerChange} /><br />
                <label>Description</label>
                <textarea name="description" value={inputData.data.description} onChange={inputData.handlerChange} /><br />
                <label>imgUrl</label>
                <input name="imgUrl" value={inputData.data.imgUrl} onChange={inputData.handlerChange} /><br />
                <button>Save</button>
            </form>
        </div>
    )
}

export default ProductCreate
