import 'bootstrap/js/dist/modal'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
// import listOfCities from '../../../cities.json'

function FormikUpdateEmail(props) {
  console.log(props)
  const { user_id } = props

  const [userEmail, setUserEmail] = useState('')
  const [dataUpdated, setDataUpdated] = useState(false)


  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Neispravan email').required('Email je obavezan'),
    password: Yup.string()
      .min(8, 'Lozinka mora biti duža od 8 karaktera')
      .matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj')
      .matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo')
      .matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo')
      .required('Lozinka je obavezna'),
  })

  useEffect(() => {
    axios.get('http://stagod.local/wp-json/wp/v2/users/' + user_id)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        console.log(data)
        setUserEmail(data.user_email)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  const onSubmit = (values, formikBag) => {
    const { setSubmitting, setFieldError } = formikBag

    // console.log(values)
    const data = new FormData()

    data.append('action', 'change_current_user_email')
    data.append('nonce', edit_account_data.nonce_change_current_user_email)
    data.append('current_user_id', edit_account_data.current_user_id)
    data.append('password', values.password)
    data.append('email', values.email)

    axios.post(edit_account_data.ajax_url, data)
      .then((response) => response.data)
      .then((data) => {

        if (data.email_changed) {
          setUserEmail(data.new_email)
          setDataUpdated(true)
          setSubmitting(false)
        }
      }).catch((error) => {
        console.log(error.data)
      })
  }

  return (
    <>
      <div className="border p-4 p-xl-8 mb-6 rounded-4 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#modal-update-email">
        <div className='fw-bold'>Promena e-maila</div>
        <div className='text-gray-200 fw-bold'>{userEmail}</div>
      </div>

      <div className="modal fade" id="modal-update-email" tabIndex="-1" aria-labelledby="modal-label-update-email" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 p-xl-8">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h2 className="h3" id="modal-label-user-register">Promena e-maila</h2>
            <p className='fw-700 mb-0'>Trenutna e-mail adresa</p>
            <p className='text-gray-200 fw-bold'>{userEmail}</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {
                (formik) => <Form>
                  <FormikControl control='input' type='email' label='Nova email adresa' name='email' />
                  <FormikControl control='input' type='password' label='Važeća lozinka' name='password' autoComplete="on" />
                  <div className='d-flex align-items-center'>
                    <button type='submit' className='btn btn-primary me-4'>Promeni</button>
                    {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
                  </div>
                  {(dataUpdated) ? <div className='alert alert-success mt-6'>Vaše izmene su sačuvane.</div> : ''}
                </Form>
              }
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormikUpdateEmail
