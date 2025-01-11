import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldSelect from './FieldSelect';
import listOfCities from '../../../cities.json';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function FormikEditCity({ user_id }) {
  const [userCity, setUserCity] = useState(null);
  const [dataUpdated, setDataUpdated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cityOptions = listOfCities.map((city) => ({
    label: city.city,
    value: city._id,
  }));

  const validationSchema = Yup.object({
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
      .get(`${edit_profile_data.home_url}/wp-json/wp/v2/users/${user_id}`, {
        headers: { 'X-WP-Nonce': edit_profile_data.nonce },
      })
      .then((response) => {
        const data = response.data.acf;
        if (data && data.city) {
          setUserCity({ label: data.city, value: data.city });
        } else {
          setUserCity(null);
        }
      })
      .catch((error) => {
        console.error('Greška pri učitavanju podataka:', error);
        setUserCity(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user_id]);

  const onSubmit = (values, { setSubmitting }) => {
    const cityName = values.city?.label;

    const data = new FormData();
    data.append('action', 'edit_city');
    data.append('nonce', edit_profile_data.nonce_edit_city);
    data.append('current_user_id', edit_profile_data.current_user_id);
    data.append('city', cityName);

    axios
      .post(edit_profile_data.ajax_url, data)
      .then((response) => {
        // console.log(response.data)
        if (!response.data.success) {
          setDataUpdated(false);
          setErrorMessage(true);
        } else {
          console.log(response.data.city)
          setDataUpdated(true);
          setErrorMessage(false);
          setUserCity({ label: response.data.city, value: response.data.city });
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(true);
        setSubmitting(false);
      });
  };

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    const timer = setTimeout(() => {
      setDataUpdated(false);
    }, 3000);

    // To clear or cancel a timer, you call the clearTimeout(); method, 
    // passing in the timer object that you created into clearTimeout().
    return () => clearTimeout(timer);
  }, [dataUpdated]);

  return (
    <>
      {isLoading ? (
        <Skeleton width="33%" height={74} className="rounded-4 mb-6" />
      ) : (
        <>
          <div className='row'>
            <div className='col-xl-4'>
              <div
                className="border p-4 p-xl-7 mb-6 rounded-4 bg-white d-flex align-items-center justify-content-between"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-edit-city"
              >
                <div className="d-flex align-items-center mb-0 txt-black fw-bold">
                  <div className='me-2 mb-1'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 2.26659C6.66424 2.26659 5.38319 2.7806 4.43866 3.69555C3.49413 4.6105 2.9635 5.85144 2.9635 7.14537C2.9635 9.03659 4.23021 10.8531 5.59061 12.2441C6.26095 12.9296 6.93293 13.4903 7.43787 13.8797C7.66507 14.055 7.85765 14.195 8 14.2954C8.14234 14.195 8.33493 14.055 8.56213 13.8797C9.06707 13.4903 9.73905 12.9296 10.4094 12.2441C11.7698 10.8531 13.0365 9.03659 13.0365 7.14537C13.0365 5.85144 12.5059 4.6105 11.5613 3.69555C10.6168 2.7806 9.33576 2.26659 8 2.26659ZM8 14.8666C7.73277 15.2549 7.73265 15.2548 7.7325 15.2547L7.7321 15.2544L7.73092 15.2537L7.72707 15.2512L7.71349 15.2423C7.70187 15.2346 7.68517 15.2236 7.66373 15.2092C7.62085 15.1804 7.55898 15.1383 7.48083 15.0837C7.32456 14.9743 7.10293 14.8145 6.83768 14.6099C6.30794 14.2013 5.60036 13.6112 4.89115 12.886C3.49242 11.4558 2 9.41173 2 7.14537C2 5.6039 2.63214 4.12557 3.75736 3.03558C4.88258 1.9456 6.4087 1.33325 8 1.33325C9.5913 1.33325 11.1174 1.9456 12.2426 3.03558C13.3679 4.12557 14 5.6039 14 7.14537C14 9.41173 12.5076 11.4558 11.1089 12.886C10.3996 13.6112 9.69206 14.2013 9.16232 14.6099C8.89707 14.8145 8.67544 14.9743 8.51917 15.0837C8.44102 15.1383 8.37915 15.1804 8.33627 15.2092C8.31483 15.2236 8.29813 15.2346 8.28651 15.2423L8.27293 15.2512L8.26908 15.2537L8.2679 15.2544L8.2675 15.2547C8.26735 15.2548 8.26723 15.2549 8 14.8666ZM8 14.8666L8.26723 15.2549C8.10541 15.3594 7.89459 15.3594 7.73277 15.2549L8 14.8666Z" fill="#000000" /><path fillRule="evenodd" clipRule="evenodd" d="M7.99992 5.77367C7.13849 5.77367 6.44017 6.47199 6.44017 7.33341C6.44017 8.19484 7.13849 8.89316 7.99992 8.89316C8.86134 8.89316 9.55967 8.19484 9.55967 7.33341C9.55967 6.47199 8.86134 5.77367 7.99992 5.77367ZM5.33325 7.33341C5.33325 5.86066 6.52716 4.66675 7.99992 4.66675C9.47268 4.66675 10.6666 5.86066 10.6666 7.33341C10.6666 8.80617 9.47268 10.0001 7.99992 10.0001C6.52716 10.0001 5.33325 8.80617 5.33325 7.33341Z" fill="#000000" /></svg>
                  </div>
                  {userCity?.label || 'Niste izabrali grad'}
                </div>
                <div>
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="1" y="1" width="30" height="30" rx="15" fill="#fff" />
                    <rect
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      stroke="#EA4900"
                      strokeWidth="2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.737 9.92a2 2 0 0 1 2.829 0l.78.78a2 2 0 0 1 0 2.829l-7.438 7.438a2 2 0 0 1-1.022.547l-1.956.391a1.333 1.333 0 0 1-1.57-1.569l.392-1.956a2 2 0 0 1 .547-1.022l7.438-7.439zm1.886.942a.667.667 0 0 0-.943 0L11.242 18.3a.666.666 0 0 0-.183.341l-.39 1.957 1.956-.392a.666.666 0 0 0 .34-.182l7.439-7.438a.667.667 0 0 0 0-.943l-.781-.781zM17.152 21.448c0-.368.298-.667.666-.667h3.334a.667.667 0 0 1 0 1.333h-3.334a.667.667 0 0 1-.666-.666z"
                      fill="#EA4900"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="modal modal-lg fade"
                id="modal-edit-city"
                tabIndex="-1"
                aria-labelledby="modal-label-edit-city"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-4 p-xl-8">
                    <div className="modal-header border-0">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <h2 className="h3" id="modal-label-user-edit-city">
                      Izaberite mesto u kome nudite uslugu
                    </h2>
                    <Formik
                      initialValues={{ city: userCity || { label: '', value: '' } }}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                      enableReinitialize
                    >
                      {(formik) => (
                        <Form>
                          <FieldSelect
                            name="city"
                            label="Mesto/Grad"
                            placeholder="Izaberi grad"
                            labelClass="fs-5"
                            options={cityOptions}
                          />
                          <div className="d-flex align-items-center justify-content-lg-end">
                            <button
                              type="button"
                              className="me-4 btn bg-transparent"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              Otkaži
                            </button>
                            <button type="submit" className="btn btn-primary">
                              Sačuvaj
                            </button>
                          </div>
                          {dataUpdated && (
                            <div className="alert alert-success mt-6">
                              Vaše izmene su sačuvane.
                            </div>
                          )}
                          {errorMessage && (
                            <div className="alert alert-danger mt-6">
                              Došlo je do greške. Pokušajte ponovo.
                            </div>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FormikEditCity;
