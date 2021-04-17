import { generatePath, Link } from "react-router-dom"

const excerpt = (text) => {
    const length = 30;
    return text.substring(0, length);
}

const ProductTable = ({ loading, data, onDelete }) => loading ? (
    <div className="alert alert-primary" role="alert">
        Cargando...
    </div>
) : (<div className="table-responsive">
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
            {data.map(item => (
                <tr key={item.id}>
                    <td>#</td>
                    <td>{item.name}</td>
                    <td>{excerpt(item.imgUrl)}</td>
                    <td>{item.price}</td>
                    <td>
                        <div className="btn-group">
                            <Link className="btn btn-info btn-sm" to={generatePath("/products/detail/:id", { id: item.id })}>Detail</Link>
                            <button onClick={() => onDelete(item)} className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>)

export default ProductTable
