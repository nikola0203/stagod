// import React from 'react'
import Input from "./Input"
import FieldSelect from './FieldSelect'
import Checkbox from './Checkbox'

function FormikControl(props) {
  // console.log(props)
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
    case 'select':
      return <FieldSelect {...rest} />
    case 'radio':
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'date':
    default:
      return null
  }
}

export default FormikControl