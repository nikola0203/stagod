import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Checkbox(props) {
  const { label, name, errors, ...rest } = props
  return (
    <div className="form-check mb-6">
      <div className='d-flex'>
        <Field id={name} name={name} className="form-check-input me-4 cursor-pointer" {...rest} />
        <label htmlFor={name} className='form-check-label text-black fw-bold mb-1'>{label}</label>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Checkbox