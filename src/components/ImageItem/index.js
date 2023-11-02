import './index.css'

const ImageItem = props => {
  const {imgDetails, onTakeImg} = props
  const {id, thumbnailUrl} = imgDetails
  const onSelectImage = () => {
    onTakeImg(id)
  }
  return (
    <li>
      <button type="button" className="btn-img" onClick={onSelectImage}>
        <img className="thumb" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItem
