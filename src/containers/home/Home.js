import { useEffect } from 'react'
import { generatePath, Link } from "react-router-dom"
import { productsGetAllAction } from '../../store/products/actions'
import { useDispatch, useSelector } from 'react-redux'
import { productsGetAllSelector } from '../../store/products/selectors'

const excerpt = (text) => {
  const length = 30;
  return text.substring(0, length);
}

function Home() {
  const productsStore = useSelector(productsGetAllSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productsGetAllAction())
  }, [dispatch])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productsStore.data.map(item => (
                  <tr key={item.id}>
                    <td>#</td>
                    <td>{item.name}</td>
                    <td>{excerpt(item.imgUrl)}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <Link to={generatePath("/products/:id", { id: item.id })}>Detail</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home

