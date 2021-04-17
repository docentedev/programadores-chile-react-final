import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { productsGetAction, productsUpdateAction, productsUpdateResetAction } from '../../store/products/actions'
import { useDispatch, useSelector } from 'react-redux'
import { productsGetSelector, productsUpdateSelector } from '../../store/products/selectors'

import useInput from '../../hooks/useInput'
import FormProductDetail from '../../components/form-product-detail/FormProductDetail'

function Home() {
    const inputData = useInput({
        price: 0,
        name: '',
        description: '',
        imgUrl: '',
    })

    const params = useParams()
    const productStore = useSelector(productsGetSelector)
    const updateStore = useSelector(productsUpdateSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch((productsGetAction(params.id)))
    }, [dispatch, params.id])

    useEffect(() => {
        if (!productStore.error && productStore.success && !productStore.loading && !inputData.data.id) {
            inputData.setData(productStore.data)
        }
    }, [productStore, inputData])

    useEffect(() => {
        if (!updateStore.error && updateStore.success && !updateStore.loading) {
            dispatch(productsUpdateResetAction())
        }
    }, [updateStore, dispatch])

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(productsUpdateAction({
            ...productStore.data,
            name: inputData.data.name,
            price: Number.parseFloat(inputData.data.price),
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
                    <FormProductDetail
                        data={inputData.data}
                        loading={updateStore.loading}
                        onSubmit={handlerSubmit}
                        onChange={inputData.handlerChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home

