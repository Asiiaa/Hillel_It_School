import './App.css';

import {addTodo, deleteTodo, getTodoList, updateTodo} from '../../services/todoService';
import { useEffect, useState } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

function App() {
  const [todos, setTodos] = useState([]);
  
useEffect(() => {
  getTodoList().then(setTodos);
}, []);

function addTodos(newTodo) {
  if(newTodo.title === ''){
    alert('Please fill in the field')
    return
  }
  addTodo(newTodo).then((data) => {
    console.log(data.title)
    setTodos([...todos, data]);
  })
}

function deleteEl(id) {
  deleteTodo(id).then(
    setTodos(todos.filter((item) => item.id !== id))
    );
}

function toggleTodo(id) {
  const todo = todos.find((item) => item.id === id);

  updateTodo({ ...todo, isDone: !todo.isDone }).then((data) => {
      setTodos(todos.map((item) => (item.id === id ? data : item)));
  });
}

return (
  <div className='container'>
    <List todos={todos} onDelete={deleteEl} onToggle={toggleTodo}/>
    <Form onAdd={addTodos} />
  </div>
  );
}

export default App;