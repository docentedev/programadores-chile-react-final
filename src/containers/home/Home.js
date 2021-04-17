import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { productsGetAllAction, productsRemoveAction } from '../../store/products/actions'
import { useDispatch, useSelector } from 'react-redux'
import { productsGetAllSelector, productsRemoveSelector } from '../../store/products/selectors'

import ModalDelete from '../../components/modal-delete/ModalDelete'
import ProductTable from '../../components/product-table/ProductTable'

function Home() {
  const [deleteEntity, setDeleteEntity] = useState({})
  const productsStore = useSelector(productsGetAllSelector)
  const productsRemoveStore = useSelector(productsRemoveSelector)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productsGetAllAction())
  }, [dispatch])

  const deleteConfirm = (entity) => {
    setDeleteEntity(entity)
  }

  const handlerDeleteCancel = () => {
    setDeleteEntity({})
  }

  const handlerDeleteCommit = () => {
    dispatch(productsRemoveAction(deleteEntity))
  }

  useEffect(() => {
    if (productsRemoveStore.success) {
      setDeleteEntity({})
      dispatch(productsGetAllAction())
    }
  }, [productsRemoveStore, dispatch])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={"/products/create"}>Create</Link>
          <ProductTable
            onDelete={deleteConfirm}
            data={productsStore.data}
            loading={productsStore.loading}
          />
        </div>
      </div>
      {deleteEntity.id && (
        <ModalDelete
          entity={deleteEntity}
          onCommit={handlerDeleteCommit}
          onCancel={handlerDeleteCancel}
          loading={productsRemoveStore.loading}
        />)}
    </div>
  );
}

export default Home

