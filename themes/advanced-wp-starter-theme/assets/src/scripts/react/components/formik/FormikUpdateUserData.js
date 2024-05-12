import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import listOfCities from '../../../cities.json'

function FormikUpdateUserData(props) {
  const { user_id, user_city } = props

  const [dataUpdated, setDataUpdated] = useState(false)

  const formikRef = useRef();

  const initialValues = {
    first_name: '',
    last_name: '',
    city: user_city
  }
  const validationSchema = Yup.object({
    first_name: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Ime je obavezno'),
    last_name: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Prezime je obavezno'),
    validationCity
  })
  const validationCity = Yup.object().shape({
    city: Yup.object().shape({
      label: Yup.string().required("Izaberi grad"),
      value: Yup.string().required("Izaberi grad")
    })
  })

  useEffect(() => {
    axios.get('http://stagod.local/wp-json/wp/v2/users/' + user_id)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        formikRef.current.setFieldValue("first_name", data.first_name)
        formikRef.current.setFieldValue("last_name", data.last_name)
        formikRef.current.setFieldValue("city", data.acf.city)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [initialValues])

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    const timer = setTimeout(() => {
      setDataUpdated(false);
    }, 3000);

    // To clear or cancel a timer, you call the clearTimeout(); method, 
    // passing in the timer object that you created into clearTimeout().
    return () => clearTimeout(timer);
  }, [dataUpdated]);

  const onSubmit = (values, formikBag) => {
    const { setSubmitting } = formikBag

    let city = ''
    if (formikRef.current.values.city.city) {
      city = formikRef.current.values.city.city
    } else {
      city = formikRef.current.values.city
    }

    const data = new FormData()

    data.append('action', 'edit_personal_data')
    data.append('nonce', edit_account_data.nonce_edit_personal_data)
    data.append('current_user_id', edit_account_data.current_user_id)
    data.append('first_name', values.first_name)
    data.append('last_name', values.last_name)
    data.append('city', city)

    axios.post(edit_account_data.ajax_url, data)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)

        if (data.success_status) {
          setDataUpdated(true)
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
              <button type='submit' className='btn btn-primary me-4' disabled={!formik.isValid}>Sačuvaj izmene</button>
              {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
            </div>
            {(dataUpdated) ? <div className='alert alert-success mt-6'>Vaše izmene su sačuvane.</div> : ''}
          </Form>
        }
      </Formik>
    </>
  )
}

export default FormikUpdateUserData
