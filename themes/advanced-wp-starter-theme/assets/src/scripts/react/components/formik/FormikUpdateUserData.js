import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import listOfCities from '../../../cities.json'

function FormikUpdateUserData(props) {
  const { user_id, user_city } = props

  const formikRef = useRef();

  const initialValues = {
    first_name: '',
    last_name: '',
    city: user_city
  }
  const validationSchema = Yup.object({
    first_name: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Ime je obavezno'),
    last_name: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Prezime je obavezno'),
    city: Yup.string().required('Izaberi grad')
  })

  useEffect(() => {
    axios.get('http://stagod.local/wp-json/wp/v2/users/' + user_id)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        formikRef.current.setFieldValue("first_name", data.first_name)
        formikRef.current.setFieldValue("last_name", data.last_name)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [initialValues])

  const onSubmit = (values, formikBag) => {
    const { setSubmitting, setFieldError } = formikBag

    axios.post('http://stagod.local/wp-json/wp/v2/users/register/', values)
      .then((response) => {
        errorMessageHandler(setFieldError, response.data, 'first_name')
        errorMessageHandler(setFieldError, response.data, 'last_name')
        errorMessageHandler(setFieldError, response.data, 'city')

        if (response.data.args.user_registered) {
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
      <h2 className="h5">Izmena ličnih podataka</h2>
      <Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} enableReinitialize={true} onSubmit={onSubmit}>
        {
          (formik) => <Form>
            <div className='row'>
              <div className='col-xl-6'>
                <FormikControl control='input' type='text' label='Ime' name='first_name' />
              </div>
              <div className='col-xl-6'>
                <FormikControl control='input' type='text' label='Prezime' name='last_name' />
              </div>
            </div>
            <FormikControl name='city' control='select' label='Grad' placeholder="Izaberi grad" options={listOfCities} defaultValue={initialValues.city} />
            <div className='d-flex align-items-center'>
              <button type='submit' className='btn btn-primary me-4'>Registruj Se</button>
              {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
            </div>
          </Form>
        }
      </Formik>
    </>
  )
}

export default FormikUpdateUserData
