import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { productsGetAction, productsUpdateAction } from '../../store/products/actions'
import { useDispatch, useSelector } from 'react-redux'
import { productsGetSelector } from '../../store/products/selectors'

function Home() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const params = useParams()
    const productStore = useSelector(productsGetSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsGetAction(params.id))
    }, [dispatch, params.id])

    useEffect(() => {
        if (!productStore.error && productStore.success && !productStore.loading) {
            setName(productStore.data.name)
            setPrice(productStore.data.price)
        }
    }, [productStore])

    const handlerChangeName = ({ target }) => setName(target.value)
    const handlerChangePrice = ({ target }) => setPrice(target.value)
    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(productsUpdateAction({
            ...productStore.data,
            name,
            price: Number.parseFloat(price),
        }))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handlerSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input className="form-control" value={name} onChange={handlerChangeName} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Price</label>
                            <input type="number" className="form-control" value={price} onChange={handlerChangePrice} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home

