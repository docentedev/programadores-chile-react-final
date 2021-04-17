const ModalDelete = ({ onCancel, onCommit, loading, entity }) => (
  <div className="modal fade show" tabIndex="-1" style={{ display: 'block', backgroundColor: '#000000bd' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title"># {entity.id} {entity.name}</h5>
          <button onClick={onCancel} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
        </div>
        <div className="modal-body">
          <p>{entity.price}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onCancel} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button onClick={onCommit} disabled={loading} type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
)

export default ModalDelete