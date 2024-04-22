import Select from 'react-select'
import { ErrorMessage, useField } from 'formik'
import TextError from './TextError'

function FieldSelect(props) {
  const { label, name, placeholder, options, defaultValue, ...rest } = props
  const [field, meta, { setValue }] = useField(props)

  const onChange = (selectedOptions) => {
    setValue(selectedOptions)
    console.log(selectedOptions)
  }

  return (
    <div className='form-control mb-6'>
      <label htmlFor={name} className='text-black fw-bold mb-1'>{label}</label>
      <Select
        id={name}
        name={name}
        // isMulti={true}
        defaultChecked={true}
        defaultValue={{ city: defaultValue }}
        placeholder={placeholder}
        onChange={onChange}
        options={options}
        getOptionLabel={(option) => option.city}
        getOptionValue={(option) => option.city}
        noOptionsMessage={({ inputValue }) => `Nema rezultata za "${inputValue}"`}
        // onBlur={field.value.onBlur}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default FieldSelect

