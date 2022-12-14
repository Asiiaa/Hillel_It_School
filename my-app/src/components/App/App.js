import './App.css';

import React, { Component } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

class App extends Component {
  state = {
    list: [
        { id: 1, title: 'Item 1', isDone: true },
        { id: 2, title: 'Item 2', isDone: false },
        { id: 3, title: 'Item 3', isDone: false },
    ],
};
  
toggleTodo = (id) => {
  this.setState({
      list: this.state.list.map((item) =>
          item.id !== id
              ? item
              : {
                    ...item,
                    isDone: !item.isDone,
                }
      ),
  });
};

deleteTodo = (id) => {
  this.setState({
      list: this.state.list.filter((item) => item.id !== id),
  });
};

// метод который добавляем задачу в список
addTodo = (newTodo) => {
  this.setState({
      list: [
        ...this.state.list,
        {
          id: Date.now(),
          title: newTodo,
          isDone: false
        }
      ]         
  })
}

render() {
  return (
      <>
          <List
              list={this.state.list}
              onToggle={this.toggleTodo}
              onDelete={this.deleteTodo}
              
          />
          
          {/* создаем todo */}
          <Form onSave={this.addTodo}/> 
      </>
  );
}
}

export default App;