import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import Label from './Label'

function Checkbox(props) {
  const { label, name, errors, ...rest } = props
  return (
    // <div className='form-control mb-6'>
    //   <label htmlFor={name} className='text-black fw-bold mb-1'>{label}</label>
    //   <Field id={name} name={name} {...rest} />
    //   <ErrorMessage name={name} component={TextError} />
    // </div>
    <div className="form-check mb-6">
      {/* <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> */}
      {/* <label class="form-check-label" for="flexCheckDefault">
        Default checkbox
      </label> */}
      <Field id={name} name={name} className="form-check-input" {...rest} />
      <label htmlFor={name} className='form-check-label text-black fw-bold mb-1'>{label}</label>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Checkbox