import React from 'react'

const Date = ({ created, modified }) => {
  return (
    <div>
      <p className='timestamp'>Created: {created}</p>
      <p className='timestamp'>Modified: {modified}</p>
    </div>
  )
}

export default Date