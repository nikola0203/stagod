import FormikUserRegister from "./FormikUserRegister"
import FormikUserLogin from "./FormikUserLogin"
import FormikUserResetPassword from './FormikUserResetPassword'

function FormsControl(props) {
  const { formName, ...rest } = props
  switch (formName) {
    case 'register':
      return <FormikUserRegister {...rest} />
    case 'login':
      return <FormikUserLogin {...rest} />
    case 'reset':
      return <FormikUserResetPassword {...rest} />
    default:
      return <FormikUserRegister {...rest} />
  }
}

export default FormsControl
