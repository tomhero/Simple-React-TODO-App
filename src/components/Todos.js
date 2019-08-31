import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem'

function Todos(props) {

  // Map todos prop to an HTML elements
  const todoList = props.todos.map(todo => {
    return <TodoItem key={todo._id} todo={todo} 
      markComplete={props.markComplete}
      deleteTodo={props.deleteTodo} />
  });
  
  return (
    <div id="todos-warp">
        <h4>
            All Todos Items
        </h4>
        {/* TODO : Adding some state */}
        {todoList}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
