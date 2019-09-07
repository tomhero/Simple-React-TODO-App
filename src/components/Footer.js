import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section className="App-footer">
        <p>
          <Link to="/">Home</Link> <span>&emsp; | &emsp;</span>
          <Link to="/about">About</Link>
        </p>
      </section>
    </div>
  )
}

export default Footer
