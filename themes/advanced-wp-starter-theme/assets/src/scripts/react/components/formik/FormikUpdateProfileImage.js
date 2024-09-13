import 'bootstrap/js/dist/modal'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function FormikUpdateProfileImage(props) {
  const [image, setImage] = useState([]);
  // const onDrop = useCallback(acceptedFiles => {
  //   // Do something with the files
  //   console.log(acceptedFiles)
  // }, [])
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const initialValues = {
    image: ''
  }
  const validationSchema = Yup.object({
    image: Yup.mixed().required()
  })
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    multiple: false,
    maxFiles: 1,
    onDrop: acceptedFiles => {
      console.log(acceptedFiles)
      setImage(acceptedFiles.map(image => Object.assign(image, {
        preview: URL.createObjectURL(image)
      })));
    }
  });

  const removeAll = () => {
    setImage([])
  }

  const thumbs = image.map(image => (
    <div key={image.name} className='relative image-uploaded'>
      <button type='button' className='btn-remove-image bg-transparent absolute' aria-label="Remove Uploaded Image" onClick={removeAll}></button>
      <img
        className='object-fit-cover w-100 h-100 rounded'
        src={image.preview}
        // Revoke data uri after image is loaded
        onLoad={() => { URL.revokeObjectURL(image.preview) }}
      />
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => image.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  const onSubmit = (values, formikBag) => {
    const data = new FormData()

    data.append('action', 'upload_profile_image')
    data.append('nonce', edit_account_data.nonce_upload_profile_image)
    data.append('current_user_id', edit_account_data.current_user_id)
    data.append('image', image[0])

    axios.post(edit_account_data.ajax_url, data)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        // if (data.success_status) {
        // }
      }).catch((error) => {
        console.log(error.data)
      })
  }

  return (
    <>
      <button className='btn' type="button" data-bs-toggle="modal" data-bs-target="#modal-update-profile-image">Promeni sliku</button>
      <button className='btn' type="button" data-bs-toggle="modal" data-bs-target="#modal-delete-profile-image">Ukloni sliku</button>
      <div className="modal modal-lg fade" id="modal-update-profile-image" tabIndex="-1" aria-labelledby="modal-label-update-profile-image" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 p-xl-14 bg-light">
            <button type="button" className="btn-close border rounded-circle p-5 absolute" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-header border-0 p-0">
              <h2 className="h3 mb-8" id="modal-label-user-update-profile-image">Promeni sliku:</h2>
            </div>
            <Formik initialValues={initialValues} enableReinitialize={true} onSubmit={onSubmit}>
              {
                (formik) => <Form>
                  <div className='modal-upload-image-box d-flex align-items-center justify-content-center p-10 bg-white mb-6 mb-xl-12 border border-primary rounded' {...getRootProps()}>
                    <input id='image' name='image' {...getInputProps()} />
                    {
                      isDragActive ?
                        <div className='d-flex flex-column justify-content-center align-items-center text-big text-primary fw-bold'>
                          <div className='icon-upload-image bg-cover mb-6'></div>
                          Privuci sliku ovde ...
                        </div> :
                        <div className='d-flex flex-column justify-content-center align-items-center text-big text-primary fw-bold'>
                          <div className='icon-upload-image bg-cover mb-6'></div>
                          Dodaj ili privuci sliku...
                        </div>
                    }
                    {thumbs}
                  </div>
                  <div className='d-flex align-items-center justify-content-lg-end'>
                    <button type='button' className='me-4 btn bg-transparent' data-bs-dismiss="modal" aria-label="Close" onClick={removeAll}>Otkaži</button>
                    <button type='submit' className='btn btn-primary' disabled={!formik.isValid}>Sačuvaj</button>
                    {(formik.isSubmitting) ? <i className='icon-spinner'></i> : ''}
                  </div>
                  {/* {(dataUpdated) ? <div className='alert alert-success mt-6'>Vaša profilna slika je sačuvana.</div> : ''} */}
                </Form>
              }
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
export default FormikUpdateProfileImage
