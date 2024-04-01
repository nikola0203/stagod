import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikUserResetPassword(props) {
  const { updateFormName } = props

  const initialValues = {
    email: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Neispravan email').required('Email je obavezan'),
  })

  const errorMessageHandler = (setFieldError, response, field_name) => {
    if (response.field === field_name) {
      setFieldError(field_name, response.message)
    }
  }

  const onSubmit = (values, formikBag) => {
    const { setSubmitting, setFieldError } = formikBag

    axios.post('http://stagod.local/wp-json/wp/v2/users/reset-password/', values)
      .then((response) => {
        errorMessageHandler(setFieldError, response.data, 'email')

        // console.log(response.data)

        // if (response.data.args.user_logged_in) {
        //   window.location.href = response.data.args.redirect_url
        // } else {
        //   setSubmitting(false)
        // }
      }).catch((error) => {
        console.log(error.data)
      })
  }

  return (
    <>
      <h2 className="h3" id="modal-label-user-register">Resetuj lozinku</h2>
      <p>Nazad na <button onClick={() => updateFormName('login')}>login.</button></p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          (formik) => <Form>
            <FormikControl control='input' type='email' label='Email' name='username' />
            <div className='d-flex align-items-center'>
              <button type='submit' className='btn btn-primary me-4'>Pošalji instrukcije</button>
              {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
            </div>
          </Form>
        }
      </Formik>
    </>
  )
}

export default FormikUserResetPassword
