import axios from 'axios'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikUserResetPassword(props) {
  const { userID } = props

  const [newPasswordState, setNewPasswordState] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')

  const initialValues = {
    user_id: userID,
    password: '',
    confirm_password: '',
  }
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, 'Lozinka mora biti duža od 8 karaktera')
      .matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj')
      .matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo')
      .matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo')
      .required('Lozinka je obavezna'),
    confirm_password: Yup.string().required("Potvrdite lozinku").oneOf([Yup.ref("password")], "Lozinka mora da se poklapa"),
  })

  const errorMessageHandler = (setFieldError, response, field_name) => {
    if (response.field === field_name) {
      setFieldError(field_name, response.message)
    }
  }

  const onSubmit = (values, formikBag) => {
    const { setSubmitting, setFieldError } = formikBag

    axios.post('http://stagod.local/wp-json/wp/v2/users/set-new-password/' + userID, values)
      .then((response) => {
        errorMessageHandler(setFieldError, response.data, 'password')

        console.log(response.data)

        if (response.data.status == 200) {
          setRedirectUrl(response.data.args.redirect_url)
          setNewPasswordState('true')
          setSubmitting(false)
        } else {
          setNewPasswordState('false')
          setSubmitting(false)
        }
      }).catch((error) => {
        console.log(error.data)
      })
  }

  return (
    <>
      <h2 className="h3" id="modal-label-user-register">Promena lozinke</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          (formik) => <Form>
            <FormikControl control='input' type='password' label='Lozinka' name='password' autoComplete="on" />
            <FormikControl control='input' type='password' label='Potvrdi Lozinku' name='confirm_password' autoComplete="on" />

            {(newPasswordState == 'true') ? <div className="alert alert-success" role="alert">Uspešno ste resetovali lozinku! <a href={redirectUrl}>Login Forma</a></div> : ''}

            {(newPasswordState == 'false') ? <div className="alert alert-danger" role="alert">Lozinka je već promenjena</div> : ''}

            <div className='d-flex align-items-center'>
              <button type='submit' className='btn btn-primary me-4'>Promeni lozinku</button>
              {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
            </div>
          </Form>
        }
      </Formik>
    </>
  )
}

export default FormikUserResetPassword
