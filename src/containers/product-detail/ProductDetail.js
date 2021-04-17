import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import { productsGetAction, productsUpdateAction, productsUpdateResetAction } from '../../store/products/actions'
import { useDispatch, useSelector } from 'react-redux'
import { productsGetSelector, productsUpdateSelector } from '../../store/products/selectors'

function Home() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const params = useParams()
    const productStore = useSelector(productsGetSelector)
    const updateStore = useSelector(productsUpdateSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch((productsGetAction(params.id)))
    }, [dispatch, params.id])

    useEffect(() => {
        if (!productStore.error && productStore.success && !productStore.loading) {
            setName(productStore.data.name)
            setPrice(productStore.data.price)
        }
    }, [productStore])

    useEffect(() => {
        if (!updateStore.error && updateStore.success && !updateStore.loading) {
            dispatch(productsUpdateResetAction())
        }
    }, [updateStore, dispatch])

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

    const getLoading = () => (
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
        </div>
    )
    return productStore.loading ? getLoading() : (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handlerSubmit} className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input className="form-control" value={name} onChange={handlerChangeName} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Price</label>
                                <input type="number" className="form-control" value={price} onChange={handlerChangePrice} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="btn-group">
                                <button disabled={updateStore.loading} type="submit" className="btn btn-primary">Save</button>
                                <Link className="btn btn-secondary" to={"/products"}>Back</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home

