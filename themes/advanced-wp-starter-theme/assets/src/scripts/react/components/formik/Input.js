// import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
  const { label, name, errors, ...rest } = props
  return (
    <div className='form-control mb-6'>
      <label htmlFor={name} className='text-black fw-bold mb-1'>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input