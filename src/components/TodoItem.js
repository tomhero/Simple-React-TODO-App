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
      </p>
    </div>
  )
}

// prop types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
