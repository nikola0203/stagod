import axios from 'axios';
import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import FieldSelect from './FieldSelect';
import listOfCities from '../../../cities.json';
import FormChangePersonalData from '../skeleton/FormChangePersonalData';

function FormikUpdateUserData(props) {
  const { user_id } = props;
  const [userCity, setUserCity] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dataUpdated, setDataUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cityOptions = listOfCities.map((city) => ({
    label: city.city,
    value: city._id,
  }));

  const validationSchema = Yup.object({
    first_name: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Ime je obavezno'),
    last_name: Yup.string().min(2, 'Prekratko').max(50, 'Predugacko').required('Prezime je obavezno'),
    city: Yup.object()
      .shape({
        label: Yup.string().required('Izaberi grad'),
        value: Yup.number().required('Izaberi grad'),
      })
      .nullable()
      .required('Izaberi grad'),
  });

  useEffect(() => {
    axios
      .get(`${edit_account_data.home_url}/wp-json/wp/v2/users/${user_id}`, {
        headers: { 'X-WP-Nonce': edit_account_data.nonce },
      })
      .then((response) => {
        const data = response.data;
        setFirstName(data.first_name || '');
        setLastName(data.last_name || '');
        if (data && data.acf.city) {
          setUserCity({ label: data.acf.city, value: cityOptions.find((o) => o.label === data.acf.city)?.value });
        } else {
          setUserCity(null);
        }
      })
      .catch((error) => {
        console.error('Greška pri učitavanju podataka:', error);
      })
      .finally(() => {
        setIsLoading(false); // Ukloni preloader nakon učitavanja
      });
  }, [user_id]);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const cityName = values.city?.label;

    const data = new FormData();
    data.append('action', 'edit_personal_data');
    data.append('nonce', edit_account_data.nonce_edit_personal_data);
    data.append('current_user_id', edit_account_data.current_user_id);
    data.append('first_name', values.first_name);
    data.append('last_name', values.last_name);
    data.append('city', cityName);

    axios
      .post(edit_account_data.ajax_url, data)
      .then((response) => {
        if (response.data.success_status) {
          setFirstName(values.first_name);
          setLastName(values.last_name);
          setUserCity(values.city);

          setDataUpdated(true);

          resetForm({
            values: {
              first_name: values.first_name,
              last_name: values.last_name,
              city: values.city,
            },
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <FormChangePersonalData />
      ) : (
        <>
          <div className="border p-4 p-xl-8 mb-6 rounded-4 bg-white">
            <h2 className="h5">Izmena ličnih podataka</h2>
            <Formik
              initialValues={{
                first_name: firstName,
                last_name: lastName,
                city: userCity || { label: '', value: '' },
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {(formik) => (
                <Form>
                  <div className="row">
                    <div className="col-xl-6">
                      <FormikControl control="input" type="text" label="Ime" name="first_name" />
                    </div>
                    <div className="col-xl-6">
                      <FormikControl control="input" type="text" label="Prezime" name="last_name" />
                    </div>
                  </div>
                  <FieldSelect
                    name="city"
                    label="Mesto/Grad"
                    placeholder="Izaberi grad"
                    labelClass="fs-5"
                    options={cityOptions}
                  />
                  <div className="d-flex align-items-center">
                    <button
                      type="submit"
                      className="btn btn-primary me-4"
                      // disabled={!formik.isValid}
                      disabled={!formik.dirty || !formik.isValid}
                    >
                      Sačuvaj izmene
                    </button>
                    {formik.isSubmitting && <i className="icon-spinner"></i>}
                  </div>
                  {dataUpdated && <div className="alert alert-success mt-6">Vaše izmene su sačuvane.</div>}
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </>
  );
}

export default FormikUpdateUserData;
