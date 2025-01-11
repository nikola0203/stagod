import { createRoot } from 'react-dom/client'
import FormikEditShortDesc from './components/formik/FormikEditShortDesc'
import FormikEditLongDesc from './components/formik/FormikEditLongDesc'
import FormikEditCity from './components/formik/FormikEditCity'

const el_account_settings = document.getElementById('settings-edit-profile')
const user_id = el_account_settings.getAttribute('data-user_id')

// const user_city = el_edit_short_desc.getAttribute('data-user_city')

const el_edit_short_desc = document.getElementById('form-edit-short-desc')
const edit_short_desc_root = createRoot(el_edit_short_desc)
edit_short_desc_root.render(<FormikEditShortDesc user_id={user_id} />)

const el_edit_city = document.getElementById('form-edit-city')
const edit_city = createRoot(el_edit_city)
edit_city.render(<FormikEditCity user_id={user_id} />)

const el_edit_long_desc = document.getElementById('form-edit-long-desc')
const edit_long_desc_root = createRoot(el_edit_long_desc)
edit_long_desc_root.render(<FormikEditLongDesc user_id={user_id} />)