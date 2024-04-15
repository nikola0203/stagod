import 'bootstrap/js/dist/modal'
import { useState } from 'react'
import FormsControl from "./formik/FormsControl"

function UserRegister() {
  const [showForm, setShowForm] = useState('')
  const updateFormName = (formName) => {
    setShowForm(formName)
  };

  return (
    <>
      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modal-user-register" onClick={() => setShowForm('login')}>Prijavi se</button>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-user-register" onClick={() => setShowForm('register')}>Napravi profil</button>

      <div className="modal fade" id="modal-user-register" tabIndex="-1" aria-labelledby="modal-label-user-register" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 p-xl-8">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <FormsControl formName={showForm} updateFormName={updateFormName} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister