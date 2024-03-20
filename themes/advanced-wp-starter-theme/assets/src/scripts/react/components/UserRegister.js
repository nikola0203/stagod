import { useState } from 'react'

import FormikUserRegister from "./formik/FormikUserRegister"
import FormikUserLogin from "./formik/FormikUserLogin"

function UserRegister() {
  const [showLogin, setShowLogin] = useState(false)

  function ToggleForm(e) {
    e.preventDefault();

    console.log(showLogin)
    return (showLogin === false) ? setShowLogin(true) : setShowLogin(false)
  }

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-user-register">Napravi profil</button>

      <div className="modal fade" id="modal-user-register" tabIndex="-1" aria-labelledby="modal-label-user-register" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 p-xl-8">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {showLogin === false
              ? <>
                <h2 className="h3" id="modal-label-user-register">Registruj se</h2>
                <p>Već imaš nalog <a href="/" onClick={ToggleForm}>Registruj se.</a></p>
              </>
              : <>
                <h2 className="h3" id="modal-label-user-register">Prijavi se</h2>
                <p>Nemaš nalog <a href="/" onClick={ToggleForm}>Prijavi se.</a></p>
              </>
            }
            {showLogin === false ? <FormikUserRegister toggleForm={ToggleForm} /> : <FormikUserLogin />}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister