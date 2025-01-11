import 'bootstrap/js/dist/modal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function FormikEditLongDesc(props) {
  const { user_id } = props;
  const [userLongDesc, setUserLongDesc] = useState('');
  const [dataUpdated, setDataUpdated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${edit_profile_data.home_url}/wp-json/wp/v2/users/${user_id}`, {
        headers: { 'X-WP-Nonce': edit_profile_data.nonce },
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data.acf)
        setUserLongDesc(data.acf.long_description);
      })
      .catch((error) => {
        console.error('Greška pri učitavanju podataka:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user_id]);

  const initialValues = {
    long_desc: userLongDesc || '',
  };

  const validationSchema = Yup.object({
    long_desc: Yup.string()
      .min(4, 'Prekratko')
      // .max(50, 'Predugačko')
      .required('Kratak opis je obavezan'),
  });

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
    const { setSubmitting } = formikBag;

    const data = new FormData();
    data.append('action', 'edit_long_desc');
    data.append('nonce', edit_profile_data.nonce_edit_long_desc);
    data.append('current_user_id', edit_profile_data.current_user_id);
    data.append('long_desc', values.long_desc);

    axios.post(edit_profile_data.ajax_url, data)
      .then((response) => response.data)
      .then((data) => {
        if (!data.success) {
          setDataUpdated(false);
          setErrorMessage(true);
        } else {
          setDataUpdated(true);
          setErrorMessage(false);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height={244} className="rounded-4 mb-6" />
      ) : (
        <>
          <div
            className="border p-4 p-xl-8 mb-6 rounded-4 bg-white"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modal-edit-long-desc"
          >
            <h2 className='h3'>O Meni</h2>
            <div className='d-flex'>
              <div className="mb-0 me-6 fw-bold" style={{ whiteSpace: 'pre-wrap' }}>{userLongDesc}</div>
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
          </div>
          <div
            className="modal modal-lg fade"
            id="modal-edit-long-desc"
            tabIndex="-1"
            aria-labelledby="modal-label-edit-long-desc"
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
                <h2 className="h3" id="modal-label-user-edit-long-desc">
                  O meni
                </h2>
                <p className="text-gray-200 fw-bold">
                  Opiši detaljnije uslugu koju nudiš
                </p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                  enableReinitialize
                >
                  {(formik) => (
                    <Form>
                      <FormikControl
                        control="textarea"
                        type="textarea"
                        label="Tvoj opis"
                        name="long_desc"
                        className="text-small"
                        labelClass="fs-5"
                        onChange={formik.handleChange}
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
                        {formik.isSubmitting ? (
                          <i className="icon-spinner"></i>
                        ) : (
                          ''
                        )}
                      </div>
                      {dataUpdated ? (
                        <div className="alert alert-success mt-6">
                          Vaše izmene su sačuvane.
                        </div>
                      ) : (
                        ''
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FormikEditLongDesc;
