import FormikContainer from "./formik/FormikContainer"

function UserRegister() {

  const registerUser = (e) => {
    e.preventDefault();

    console.log('submit')
  }

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2 className="modal-title fs-5" id="exampleModalLabel">Registruj se</h2>
              <p>Već imaš nalog <a href="#">Prijavi se.</a></p>
              <FormikContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister