import React from 'react'
import PropTypes from 'prop-types'

function TodoItem (props) {

  const getStyle = () => {
    return {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      padding: '0.12em',
      borderBottom: '1px #ccc dashed',
      textDecoration: props.todo.completed ? 'line-through' : 'none',
      textAlign: 'left'
    }
  }

  // extract properties
  const { _id, title } = props.todo 

  return (
    <div style={getStyle()}>
      <p> 
        <input type="checkbox" name={'checkBox' + _id} onChange={props.markComplete.bind(this, _id)} />
        { '\t' }
        {title}
        <button style={delBtnStyle} onClick={props.deleteTodo.bind(this, _id)}>✖</button>
      </p>
    </div>
  )
}

// prop types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// delete button style
const delBtnStyle = {
  background: 'red',
  opacity: 0.64,
  border: 'none',
  padding: '0.6em 0.8em',
  marginLeft: '1.25em',
  marginRight: '1em',
  float: 'right',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer'
}

export default TodoItem
