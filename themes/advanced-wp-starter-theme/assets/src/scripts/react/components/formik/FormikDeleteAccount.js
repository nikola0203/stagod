import 'bootstrap/js/dist/modal'
import axios from 'axios'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikDeleteAccount(props) {
  const [dataUpdated, setDataUpdated] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const initialValues = {
    password_delete_account: '',
  }
  const validationSchema = Yup.object({
    password_delete_account: Yup.string()
      .min(8, 'Lozinka mora biti duža od 8 karaktera')
      .matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj')
      .matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo')
      .matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo')
      .required('Lozinka je obavezna'),
  })

  const onSubmit = (values, formikBag) => {
    const { setSubmitting } = formikBag

    // console.log(values)
    const data = new FormData()

    data.append('action', 'delete_account')
    data.append('nonce', edit_account_data.nonce_delete_account)
    data.append('current_user_id', edit_account_data.current_user_id)
    data.append('password', values.password_delete_account)

    axios.post(edit_account_data.ajax_url, data)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        if (!data.success) {
          setDataUpdated(false)
          setErrorMessage(true)
          setSubmitting(false)
        }
        if (data.account_deleted) {
          setErrorMessage(false)
          setDataUpdated(true)
          setSubmitting(false)
          // sessionStorage.setItem("account_deleted", "true")
          // window.location.replace(edit_account_data.home_url)
        }
      }).catch((error) => {
        console.log(error.data)
      })
  }

  return (
    <>
      <div className="border p-4 p-xl-8 mb-6 rounded-4 bg-white d-flex align-items-center justify-content-between" type="button" data-bs-toggle="modal" data-bs-target="#modal-delete-account">
        <div>
          <div className='h5 mb-0 fw-bold'>Želim da izbrišem svoj nalog</div>
        </div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#EA4900" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.2929,5.292875 C12.6834,4.902375 13.3166,4.902375 13.7071,5.292875 C14.0976,5.683375 14.0976,6.316555 13.7071,6.707085 L8.70711,11.707085 C8.31658,12.097605 7.68342,12.097605 7.29289,11.707085 L2.29289,6.707085 C1.90237,6.316555 1.90237,5.683375 2.29289,5.292875 C2.68342,4.902375 3.31658,4.902375 3.70711,5.292875 L8,9.585765 L12.2929,5.292875 Z"></path></svg>
        </div>
      </div>
      <div className="modal fade" id="modal-delete-account" tabIndex="-1" aria-labelledby="modal-label-delete-account" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 p-xl-8">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h2 className="h3" id="modal-label-user-delete-account">Želite da obrišete nalog?</h2>
            <p className="mb-0 text-danger">Brisanjem naloga će se obrisati svi vaši podaci iz baze.</p>
            <p className="text-danger">Ova radnja se ne može poništiti.</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {
                (formik) => <Form>
                  <FormikControl control='input' type='password' label='Važeća lozinka' name='password_delete_account' autoComplete="on" />
                  <div className='d-flex align-items-center'>
                    <button type='submit' className='btn btn-primary me-4'>Obriši</button>
                    {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
                  </div>
                  {(dataUpdated) ? <div className='alert alert-success mt-6'>Vaš nalog je obrisan.</div> : ''}
                  {(errorMessage) ? <div className='alert alert-warning mt-6'>Važeća lozinka nije ispravna.</div> : ''}
                </Form>
              }
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormikDeleteAccount
