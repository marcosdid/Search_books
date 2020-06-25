import React from 'react'
import { FiX } from 'react-icons/fi'

import './style.css'

const Modal = ({id = 'modal' ,children, onClose = () => {}}) => {
  function handleOutsideClick(e) {
    if(e.target.id === id) onClose()
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <div className="content">
          <div className="imgTitleAuthors" >
            <img src={children.imageLinks} alt="book img"/>
            <div className="titleAuthors">
              <h1>{children.title}</h1>
              <p className="authors">{children.authors}</p>
            </div>
            <FiX id='iconX' onClick={onClose} />
          </div>
          <p className="Description">{children.description}</p>
        </div>
      </ div>
    </div>
    
  )
} 

export default Modal