import { createRoot } from 'react-dom/client'
import FormikUpdateUserData from './components/formik/FormikUpdateUserData'
import FormikUpdateEmail from './components/formik/FormikUpdateEmail'
import FormikUpdatePassword from './components/formik/FormikUpdatePassword'
import FormikDeleteAccount from './components/formik/FormikDeleteAccount'
import FormikUpdateProfileImage from './components/formik/FormikUpdateProfileImage'

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

const el_delete_account = document.getElementById('form-delete-account')
const delete_account_root = createRoot(el_delete_account)
delete_account_root.render(<FormikDeleteAccount user_id={user_id} />)

const el_update_image = document.getElementById('form-update-image')
const profile_image = (el_update_image.getAttribute('data-profile_image')) ? el_update_image.getAttribute('data-profile_image') : edit_account_data.theme_uri + '/assets/dist/img/placeholder-profile.svg'

const update_image_root = createRoot(el_update_image)
update_image_root.render(<FormikUpdateProfileImage user_id={user_id} profile_image={profile_image} />)
