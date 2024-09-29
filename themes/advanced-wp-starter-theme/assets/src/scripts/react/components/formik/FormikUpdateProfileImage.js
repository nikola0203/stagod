import 'bootstrap/js/dist/modal'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDropzone } from 'react-dropzone'

function FormikUpdateProfileImage(props) {
  const { profile_image } = props
  const [dataUpdated, setDataUpdated] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [image, setImage] = useState(null)
  const [imageDeleted, setImageDeleted] = useState(null)
  const [deletingImage, setDeletingImage] = useState(null)
  const [profileImage, setProfileImage] = useState(profile_image)

  const initialValues = {
    image: null
  }
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
  const MAX_FILE_SIZE = 1000000; // 1MB

  const validationSchema = Yup.object().shape({
    image: Yup.mixed()
      .required('Slika je obavezna')
      .test(
        'fileSize',
        'Slika je prevelika',
        value => value && value.size <= MAX_FILE_SIZE
      )
      .test(
        'fileFormat',
        'Nepodržani format (slika mora biti u jpg ili png formatu)',
        value => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  useEffect(() => {
    return () => {
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage.preview);
      }
    };
  }, [uploadedImage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataUpdated(false)
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [dataUpdated]);

  const onSubmit = (values, formikBag) => {
    const { setSubmitting, setFieldError } = formikBag
    const data = new FormData()

    data.append('action', 'upload_profile_image')
    data.append('nonce', edit_account_data.nonce_upload_profile_image)
    data.append('current_user_id', edit_account_data.current_user_id)
    data.append('image', image)

    axios.post(edit_account_data.ajax_url, data)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        setDataUpdated(true)
        setSubmitting(false)
        setProfileImage(data.url)
      }).catch((error) => {
        console.log(error.data)
      })
  }

  const deleteProfileImage = () => {
    setDeletingImage(true)

    const data = new FormData()

    data.append('action', 'delete_profile_image')
    data.append('nonce', edit_account_data.nonce_delete_profile_image)
    data.append('current_user_id', edit_account_data.current_user_id)

    axios.post(edit_account_data.ajax_url, data)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        if (data.image_id) {
          setImageDeleted(true)
          setDeletingImage(false)
          setProfileImage(edit_account_data.theme_uri + '/assets/dist/img/placeholder-profile.svg')
        }
      }).catch((error) => {
        console.log(error.data)
      })
  }

  return (
    <>
      <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-start'>
        <div className="img-wrapper-profile">
          <img
            src={profileImage}
            className='lazyload lazy-fade rounded-circle object-fit-cover'
          />
        </div>
        <div className='d-flex flex-column ms-lg-6'>
          <button className='btn btn-update-profile-image' type="button" data-bs-toggle="modal" data-bs-target="#modal-update-profile-image">Promeni sliku</button>
          <button className='btn bg-transparent py-4 mt-4' type="button" data-bs-toggle="modal" data-bs-target="#modal-delete-profile-image">Ukloni sliku</button>
        </div>
      </div>
      <div className="modal modal-lg fade" id="modal-update-profile-image" tabIndex="-1" aria-labelledby="modal-label-update-profile-image" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 p-xl-14 bg-light">
            <button type="button" className="btn-close border rounded-circle p-5 absolute" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-header border-0 p-0">
              <h2 className="h3 mb-8" id="modal-label-user-update-profile-image">Promeni sliku:</h2>
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {
                (formik) => {
                  const removeAll = () => {
                    formik.setFieldValue('image', false);
                    formik.setFieldTouched('image', false)
                    setUploadedImage(false)
                    setImage(false)
                  }

                  const onDrop = (acceptedFiles) => {
                    if (acceptedFiles.length > 0) {
                      // Dodaj preview za sliku
                      Object.assign(acceptedFiles[0], {
                        preview: URL.createObjectURL(acceptedFiles[0]),
                      });
                      setImage(acceptedFiles[0]);
                      setUploadedImage(acceptedFiles[0]);
                      // Init validation
                      formik.setFieldTouched('image', true)
                      // Set field value to formik
                      formik.setFieldValue('image', acceptedFiles[0]);
                    }
                  };

                  const { getRootProps, getInputProps, isDragActive } = useDropzone({
                    onDrop,
                    accept: {
                      'image/jpg': [],
                      'image/jpeg': [],
                      'image/png': [],
                    },
                    multiple: false,
                    maxFiles: 1,
                  });

                  const onClickUpload = (e) => {
                    const file = e.target.files[0];
                    console.log(file)
                    if (file) {
                      Object.assign(file, {
                        preview: URL.createObjectURL(file)
                      })
                      // Init validation
                      formik.setFieldTouched('image', true)
                      // Set field value to formik
                      formik.setFieldValue('image', file);
                      setUploadedImage(file);
                      setImage(file);
                    }
                  }

                  const current_profile_image =
                    <div className='current-profile-image relative w-100 p-6 border rounded'>
                      <img
                        src={profileImage}
                        className='object-fit-cover w-100 h-100 rounded lazyload lazy-fade'
                      />
                    </div>

                  const uploaded_image = (uploadedImage) ?
                    <div key={uploadedImage.name} className='relative w-100 p-6 border rounded image-uploaded'>
                      <button type='button' className='btn-remove-image bg-transparent absolute' aria-label="Remove Uploaded Image" onClick={removeAll}></button>
                      <img
                        className='object-fit-cover w-100 h-100 rounded'
                        src={uploadedImage.preview}
                        // Revoke data uri after image is loaded
                        onLoad={() => { URL.revokeObjectURL(uploadedImage.preview) }}
                      />
                    </div>
                    : false

                  return (
                    <Form>
                      <div className='row mb-6 mb-xl-12'>
                        <div className='col-lg-4'>
                          {(uploaded_image == false) ? current_profile_image : uploaded_image}
                        </div>
                        <div className='col-lg-8'>
                          <div className='modal-upload-image-box d-flex align-items-center justify-content-center p-10 bg-white border border-primary rounded' {...getRootProps()}>
                            <input name='image' {...getInputProps()} onChange={onClickUpload} />
                            {
                              isDragActive ?
                                <div className='d-flex flex-column justify-content-center align-items-center text-big text-primary fw-bold'>
                                  <div className='icon-upload-image bg-cover mb-6'></div>
                                  Privuci sliku ovde...
                                </div> :
                                <div className='d-flex flex-column justify-content-center align-items-center text-big text-primary fw-bold'>
                                  <div className='icon-upload-image bg-cover mb-6'></div>
                                  Dodaj ili privuci sliku...
                                </div>
                            }
                          </div>
                          <ErrorMessage name="image" component="div" className="fs-6 text-danger fw-bold" />
                        </div>
                      </div>
                      <div className='d-flex align-items-center justify-content-lg-end'>
                        <button type='button' className='me-4 btn bg-transparent' data-bs-dismiss="modal" aria-label="Close" onClick={removeAll}>Otkaži</button>
                        <button type='submit' className='btn btn-primary' disabled={!formik.isValid}>Sačuvaj</button>
                        {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
                      </div>
                      {(dataUpdated) ? <div className='alert alert-success mt-6 mb-0 lazy-fade text-center fw-600'>Vaša profilna slika je sačuvana.</div> : ''}
                    </Form>
                  )
                }
              }
            </Formik>
          </div>
        </div>
      </div>

      <div className="modal modal-lg fade" id="modal-delete-profile-image" tabIndex="-1" aria-labelledby="modal-label-delete-profile-image" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 p-xl-14 bg-light">
            <button type="button" className="btn-close border rounded-circle p-5 absolute" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='modal-content'>
                  <div className='current-profile-image relative w-100 p-6 border rounded'>
                    <img
                      src={profileImage}
                      className='object-fit-cover w-100 h-100 rounded lazyload lazy-fade'
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-8 pt-lg-6'>
                <div className='h-100 d-flex flex-column justify-content-between'>
                  <h2 className="h3 mb-8" id="modal-label-user-delete-profile-image">Da li ste sigurni da želite da obiršete profilnu sliku?</h2>
                  <div className='d-flex align-items-center justify-content-lg-end'>
                    <button type='button' className='me-4 btn bg-transparent' data-bs-dismiss="modal" aria-label="Close">Otkaži</button>
                    <button type='submit' className='btn btn-primary' onClick={deleteProfileImage}>Da, siguran sam</button>
                    {(deletingImage) ? <i className='icon-spinner'></i> : ''}
                  </div>
                </div>
              </div>
            </div>
            {(imageDeleted) ? <div className='alert alert-success mt-6 mb-0 lazy-fade text-center fw-600'>Uspešno ste obrisali profilnu sliku</div> : ''}
          </div>
        </div>
      </div >
    </>
  )
}
export default FormikUpdateProfileImage