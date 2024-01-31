import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button style={{marginRight: props.marginRight}} onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button