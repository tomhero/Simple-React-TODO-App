import React, { useState } from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      _id: 1,
      title: 'Take a bath',
      completed: false
    },
    {
      _id: 2,
      title: 'Go to bed',
      completed: false
    },
    {
      _id: 3,
      title: 'Get up at 6 o\'clock',
      completed: false
    }
  ])

  const changeMarked = _id => {
    const newTodo = todos.map(todo => {
      if (todo._id === _id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodo)
  }

  return (
    <div className="App">
      <section className="App-body">
        <h1>Simple TODO</h1>
        <Todos todos={todos} markComplete={changeMarked} />
      </section>
    </div>
  );
}

export default App;
