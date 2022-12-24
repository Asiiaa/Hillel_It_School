import ListItem from '../ListItem/ListItem'
import React from 'react'

export default function List({ todos, onDelete, onToggle }){
  return (
    <ul>
        {todos.map((item) => (
            <ListItem
                key={item.id}
                todo={item}
                onDelete={onDelete}
                onToggle={onToggle}
                />
        ))}
    </ul>
  )
}