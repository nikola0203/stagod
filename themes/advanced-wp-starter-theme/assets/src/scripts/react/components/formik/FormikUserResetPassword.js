import axios from 'axios'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikUserResetPassword(props) {
  const { updateFormName } = props

  const [resetPasswordState, setResetPasswordState] = useState(false)

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

        console.log(response.data)

        if (response.data.args.email_sent) {
          setResetPasswordState(true)
          setSubmitting(false)
        } else {
          setSubmitting(false)
        }
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
            <FormikControl control='input' type='email' label='Email' name='email' />
            {(resetPasswordState) ?
              <div className="alert alert-success" role="alert">
                <p>Proverite svoj e-mail inbox (uključujući i spam/junk folder) kako biste pronašli e-mail od nas.</p>
                <p className='mb-0'>U e-mailu će se nalaziti link za potvrdu Vašeg naloga.</p>
              </div> : ''}
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
