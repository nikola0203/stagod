import { createRoot } from 'react-dom/client'
import FormikUpdateUserData from './components/formik/FormikUpdateUserData'
import FormikUpdateEmail from './components/formik/FormikUpdateEmail'
import FormikUpdatePassword from './components/formik/FormikUpdatePassword'

const el_account_settings = document.getElementById('account-settings')
const user_id = el_account_settings.getAttribute('data-user_id')

const el_update_personal_data = document.getElementById('form-update-personal-data')
const user_city = el_update_personal_data.getAttribute('data-user_city')
const update_personal_data_root = createRoot(el_update_personal_data)
update_personal_data_root.render(<FormikUpdateUserData user_id={user_id} user_city={user_city} />)

const el_update_email = document.getElementById('form-update-email')
const update_email_root = createRoot(el_update_email)
update_email_root.render(<FormikUpdateEmail user_id={user_id} />)

const el_update_password = document.getElementById('form-update-password')
const update_password_root = createRoot(el_update_password)
update_password_root.render(<FormikUpdatePassword user_id={user_id} />)