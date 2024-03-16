import React from 'react'

function TextError(props) {
  return (
    <div className='text-danger fw-bold'>
      {props.children}
    </div>
  )
}

export default TextError