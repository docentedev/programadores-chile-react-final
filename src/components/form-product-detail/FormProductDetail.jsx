import { Link } from "react-router-dom"

const FormProductDetail = ({ data, loading, onSubmit, onChange }) => (
    <form onSubmit={onSubmit} className="card">
        <div className="card-body">
            <div className="mb-3">
                <label htmlFor="input-name" className="form-label">Name</label>
                <input name="name" id="input-name" className="form-control" value={data.name} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="input-price" className="form-label">Price</label>
                <input id="input-price" name="price" type="number" className="form-control" value={data.price} onChange={onChange} />
            </div>
        </div>
        <div className="card-footer">
            <div className="btn-group">
                <button disabled={loading} type="submit" className="btn btn-primary">Save</button>
                <Link className="btn btn-secondary" to={"/products"}>Back</Link>
            </div>
        </div>
    </form>
)

export default FormProductDetail
