import React from 'react'

export default function Form({ onAdd }) {
    function onForm(e) {
        e.preventDefault();
        onAdd({
            title: e.target.title.value,
            isDone: false
        })
        
        e.target.reset();
      }

      return (
        <form onSubmit={onForm}>
            <input type="text" name="title"/>
            <button>Add</button>
        </form>
      )
}

