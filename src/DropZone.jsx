import { useDrop } from 'react-dnd'
import DraggableItem from './DraggableItem'

const DropZone = ({ title, items, onMoveItem }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: (draggedItem) => onMoveItem(draggedItem.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div ref={drop} className={`drop-zone ${isOver ? 'onDrag' : ''}`}>
      <h4>{title}</h4>
      {items.map((item) => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default DropZone
