import React from 'react'

const Button = ({ text, onclick, action = {}}) => {
  return (
    <button onClick={onclick}>{text}</button>
  )
}

export default Button
