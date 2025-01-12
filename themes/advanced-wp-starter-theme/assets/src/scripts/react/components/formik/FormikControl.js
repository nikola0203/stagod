import Input from "./Input"
import Textarea from "./Textarea"
import FieldSelect from './FieldSelect'
import Checkbox from './Checkbox'

function FormikControl(props) {
  // console.log(props)
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <FieldSelect {...rest} />
    case 'radio':
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'date':
    case 'file-upload':
    default:
      return null
  }
}

export default FormikControl