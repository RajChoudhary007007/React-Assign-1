import './index.css'

const HistoryItem = props => {
  const {eachHistory, itemDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDeleteItem = () => {
    itemDelete(id)
  }

  return (
    <li className="history-container">
      <div className="history-home-container">
        <div className="history-item">
          <p className="history-heading">{timeAccessed}</p>
          <img className="history-logo" src={logoUrl} alt="domain logo" />
          <p className="description">{title}</p>
          <p className="description">{domainUrl}</p>
        </div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={onDeleteItem}
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
