import { createRoot } from 'react-dom/client'
import FormikUpdateUserData from './components/formik/FormikUpdateUserData'
import FormikUpdateEmail from './components/formik/FormikUpdateEmail'

const el_update_personal_data = document.getElementById('form-update-personal-data')
const user_id = el_update_personal_data.getAttribute('data-user_id')
const user_city = el_update_personal_data.getAttribute('data-user_city')
const update_personal_data_root = createRoot(el_update_personal_data)
update_personal_data_root.render(<FormikUpdateUserData user_id={user_id} user_city={user_city} />)

const el_update_email = document.getElementById('form-update-email')
const update_email_root = createRoot(el_update_email)
update_email_root.render(<FormikUpdateEmail user_id={user_id} />)
