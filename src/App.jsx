import { useState } from 'react'
import './App.css'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import DropZone from './DropZone'

function App() {
  const [listItems, setListItems] = useState([
    { id: 3, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ])
  const [list2Items, setList2Items] = useState([])

  const handleMoveItem = (itemId, originList, destinationList) => {
    const item = destinationList.find((item) => item.id === itemId)
    if (!item) return

    const newDestinationList = destinationList.filter(
      (item) => item.id !== itemId
    )
    const newOriginList = [...originList, item]

    if (originList === listItems) {
      setListItems(newOriginList)
      setList2Items(newDestinationList)
    } else {
      setListItems(newDestinationList)
      setList2Items(newOriginList)
    }
  }
  return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        <div className="drop-container">
          <DropZone
            title="list1"
            items={listItems}
            onMoveItem={(itemId) =>
              handleMoveItem(itemId, listItems, list2Items)
            }
          />
          <DropZone
            title="list2"
            items={list2Items}
            onMoveItem={(itemId) =>
              handleMoveItem(itemId, list2Items, listItems)
            }
          />
        </div>
      </DndProvider>
    </div>
  )
}

export default App
