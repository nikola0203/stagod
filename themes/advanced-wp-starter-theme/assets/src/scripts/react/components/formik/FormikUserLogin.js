import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikUserLogin(props) {
  const { updateFormName } = props

  const initialValues = {
    username: '',
    password: ''
  }
  const validationSchema = Yup.object({
    username: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Korisničko ime je obavezno'),
    password: Yup.string()
      // .min(8, 'Lozinka mora biti duža od 8 karaktera')
      // .matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj')
      // .matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo')
      // .matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo')
      .required('Lozinka je obavezna'),
  })

  const errorMessageHandler = (setFieldError, response, field_name) => {
    if (response.field === field_name) {
      setFieldError(field_name, response.message)
    }
  }

  const onSubmit = (values, formikBag) => {
    const { setSubmitting, setFieldError } = formikBag

    axios.post('http://stagod.local/wp-json/wp/v2/users/login/', values)
      .then((response) => {
        errorMessageHandler(setFieldError, response.data, 'username')
        errorMessageHandler(setFieldError, response.data, 'password')

        console.log(response.data)

        if (response.data.args.user_logged_in) {
          window.location.href = response.data.args.redirect_url
        } else {
          setSubmitting(false)
        }
      }).catch((error) => {
        console.log(error.data)
      })
  }

  return (
    <>
      <h2 className="h3" id="modal-label-user-login">Prijavi se</h2>
      <p>Nemaš nalog <button onClick={() => updateFormName('register')}>registruj se.</button></p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          (formik) => <Form>
            <FormikControl control='input' type='text' label='Korisničko ime ili email' name='username' />
            <FormikControl control='input' type='password' label='Lozinka' name='password' autoComplete="on" />
            <div className='text-end'>
              <button id="btn-reset-password" type='button' onClick={() => updateFormName('reset')} data-form="reset">Zaboravili ste lozinku?</button>
            </div>
            <div className='d-flex align-items-center'>
              <button type='submit' className='btn btn-primary me-4'>Prijavi Se</button>
              {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
            </div>
          </Form>
        }
      </Formik>
    </>
  )
}

export default FormikUserLogin
