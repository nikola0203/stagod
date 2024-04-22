import { createRoot } from 'react-dom/client'
import FormikUpdateUserData from './components/formik/FormikUpdateUserData'

const domNode = document.getElementById('form-update-personal-data')
const root = createRoot(domNode)
root.render(<FormikUpdateUserData />)