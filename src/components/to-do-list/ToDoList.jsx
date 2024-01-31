import React, { useState } from 'react'
import './ToDoList.css'

const ToDoList = () => {
   const [newItem, setNewItem] = useState('')

   const [items, setItems] = useState([])

   const addItem = () => {
      if (!newItem) {
         alert('Press enter an item.')
         return
      }

      const item = {
         id: Math.floor(Math.random() * 1000),
         value: newItem,
      }
      setItems((oldList) => [...oldList, item])

      setNewItem('')
   }

   return (
      <div className="app">
         <h1>My Todo List </h1>
         <input
            type="text"
            placeholder="Add an item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
         />
         <button onClick={() => addItem()}>Add Task</button>

         <ul>
            {items.map((item) => {
               return (
                  <div>
                     <li>{item.value}</li>
                  </div>
               )
            })}
         </ul>
      </div>
   )
}

export default ToDoList