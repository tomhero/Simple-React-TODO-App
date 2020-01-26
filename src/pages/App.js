import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uuidv4 from 'uuid/v4';
import Footer from '../components/Footer'
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo'
import About from './About'
import { getTodos } from '../services/todo'
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      _id: uuidv4(),
      title: 'Take a bath',
      completed: true
    },
    {
      _id: uuidv4(),
      title: 'Go to bed',
      completed: false
    },
    {
      _id: uuidv4(),
      title: 'Get up at 6 o\'clock',
      completed: false
    }
  ])

  // useEffect Accepts a function that contains imperative, possibly effectful code.
  useEffect(() => {
    getTodos().then(todoOnServer => {
      console.log(todoOnServer)
      setTodos(todos.concat(todoOnServer.slice(0, 4).map(newTodo => {
        return {
          _id: uuidv4(),
          title: newTodo.title,
           completed: newTodo.completed
        }
      })))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeMarked = _id => {
    const newTodo = todos.map(todo => {
      if (todo._id === _id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodo)
  }

  const delTodo = _id => {
    setTodos(todos.filter(todo => todo._id !== _id))
  }

  const addNewTodo = newTodoTitle => {
    const newTodoObject = {
      _id: uuidv4(),
      title: newTodoTitle.toUpperCase(),
      completed: false
    }
    setTodos([...todos, newTodoObject])
  }

  return (
    <Router>
      <div className="App">
        <section className="App-body">
          <h1>Simple React ⚛ TODO</h1>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div>
                <AddTodo addTodo={addNewTodo}/>
                <Todos todos={todos} markComplete={changeMarked} deleteTodo={delTodo} />
              </div>
            </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
        </section>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
