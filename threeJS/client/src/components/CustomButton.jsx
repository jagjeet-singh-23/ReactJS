import state from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateColor = (type) => {
    if (type === 'filled') {
      return {
        background: snap.color,
        color: '#fff'
      }
    }
  }
  return (
    <button className={`px-2 py-1.5 rounded-md flex-1 ${customStyles}`}
      style={generateColor(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton