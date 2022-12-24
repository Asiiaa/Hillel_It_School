import './ListItem.css'

import React from 'react'

export default function ListItem({ todo, onDelete, onToggle}) {
    function deleteBtnClick(e) {
        onDelete(todo.id);

        console.log('todo id', todo.id);
      }
    function toggleBtnClick(e) {
        onToggle(todo.id);

        console.log('toggle todo', todo.id);
    }

    return (
        <div className='list-item'>
            <li className={'item' + (todo.isDone ? ' done' : '')} onClick={toggleBtnClick}>
                {todo.title}
            </li>
            <button onClick={deleteBtnClick}>Delete</button>
        </div>
    )
}

