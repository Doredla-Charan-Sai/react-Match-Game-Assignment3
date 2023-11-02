import './index.css'

const TabItem = props => {
  const {tabDetails, onTabClick, isActiveTab} = props
  const tabBtnClass =
    isActiveTab === true ? 'color-change' : 'const-style-tab-btn'
  const onTab = () => {
    onTabClick(tabDetails.tabId)
  }

  return (
    <li>
      <button type="button" className={`${tabBtnClass}`} onClick={onTab}>
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem
