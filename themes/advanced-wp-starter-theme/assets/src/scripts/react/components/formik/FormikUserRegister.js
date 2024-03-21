import React from 'react'
import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import Link from '../Link'
import Label from './Label'
import listOfCities from '../../../cities.json'

function FormikUserRegister(props) {

  const { ToggleForm } = props

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    city: '',
    terms_conditions: '',
    newsletter: true,
  }
  const validationSchema = Yup.object({
    username: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Korisničko ime je obavezno'),
    first_name: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Ime je obavezno'),
    last_name: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Prezime je obavezno'),
    city: Yup.object().required('Izaberi grad'),
    email: Yup.string().email('Neispravan email').required('Email je obavezan'),
    password: Yup.string()
      .min(8, 'Lozinka mora biti duža od 8 karaktera')
      .matches(/[0-9]/, 'Lozinka mora da sadrži bar jedan broj')
      .matches(/[a-z]/, 'Lozinka mora da sadrži bar jedno malo slovo')
      .matches(/[A-Z]/, 'Lozinka mora da sadrži bar jedno veliko slovo')
      .required('Lozinka je obavezna'),
    confirm_password: Yup.string().required("Potvrdite lozinku").oneOf([Yup.ref("password")], "Lozinka mora da se poklapa"),
    terms_conditions: Yup.string().required('Uslovi korišćenja moraju da budu prihvaćeni')
  })

  const errorMessageHandler = (setFieldError, response, field_name) => {
    if (response.field === field_name) {
      setFieldError(field_name, response.message)
    }
  }

  const onSubmit = (values, formikBag) => {
    const { setSubmitting, setFieldError } = formikBag

    axios.post('http://stagod.local/wp-json/wp/v2/users/register/', values)
      .then((response) => {
        errorMessageHandler(setFieldError, response.data, 'username')
        errorMessageHandler(setFieldError, response.data, 'first_name')
        errorMessageHandler(setFieldError, response.data, 'last_name')
        errorMessageHandler(setFieldError, response.data, 'email')
        errorMessageHandler(setFieldError, response.data, 'password')
        errorMessageHandler(setFieldError, response.data, 'terms_conditions')

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
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        (formik) => <Form>
          <FormikControl control='input' type='text' label='Korisničko ime' name='username' />
          <FormikControl control='input' type='email' label='Email' name='email' />
          <FormikControl control='input' type='password' label='Lozinka' name='password' autoComplete="on" />
          <FormikControl control='input' type='password' label='Potvrdi Lozinku' name='confirm_password' autoComplete="on" />
          <div className='row'>
            <div className='col-xl-6'>
              <FormikControl control='input' type='text' label='Ime' name='first_name' />
            </div>
            <div className='col-xl-6'>
              <FormikControl control='input' type='text' label='Prezime' name='last_name' />
            </div>
          </div>
          <FormikControl name='city' control='select' label='Grad' placeholder="Izaberi grad" options={listOfCities} />
          <FormikControl control='checkbox' type='checkbox' label={<Label htmlFor='terms_conditions' className='form-check-label text-black fw-bold mb-1'>Slažem se sa <Link href='#' name='uslovima korišćenja' /> i <Link href='#' name='politikom privatnosti' />, i prihvatam da ŠtaGod sačuva moje lične podatke.</Label>} name='terms_conditions' />
          <FormikControl control='checkbox' type='checkbox' label='Želim da primam obaveštenja o najnovijim proizvodima, popustima i promocijama.' name='newsletter' />
          <div className='d-flex align-items-center'>
            <button type='submit' className='btn btn-primary me-4'>Registruj Se</button>
            {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
          </div>
        </Form>
      }
    </Formik>
  )
}

export default FormikUserRegister
