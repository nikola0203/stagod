import { createRoot } from 'react-dom/client'
import FormikUpdateUserData from './components/formik/FormikUpdateUserData'

const domNode = document.getElementById('form-update-personal-data')
const user_id = domNode.getAttribute('data-user_id')
const user_city = domNode.getAttribute('data-user_city')
const root = createRoot(domNode)
root.render(<FormikUpdateUserData user_id={user_id} user_city={user_city} />) 