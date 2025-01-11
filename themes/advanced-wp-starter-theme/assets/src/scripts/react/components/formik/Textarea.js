import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea(props) {
  const { label, name, labelClass, errors, ...rest } = props
  return (
    <div className='form-control mb-6'>
      <label htmlFor={name} className={`text-black fw-bold mb-1 ${labelClass || ''}`}>{label}</label>
      <Field id={name} name={name} as="textarea" rows="15" cols="40" {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea