import React, { useState } from 'react';

const AddTodo = () => {

    const [title, setTitle] = useState('')

    const onTextFieldChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <form>
                <input type="text" style={textFieldStyle} 
                    placeholder="Add New Todo..."
                    value={title}
                    onChange={onTextFieldChange}/>
                <input type="submit" style={submitStyle}/>
            </form>
        </div>
    )
}


const textFieldStyle = {
    color: 'white',
    background: 'rgba(0, 0, 0, 0.25)',
    padding: '1.25em',
    border: 'none',
    fontSize: '0.75em'
}

const submitStyle = {
    color: 'white',
    padding: '1.2em',
    background: 'rgba(100, 148, 237, 0.64)',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.75em'
}

export default AddTodo
