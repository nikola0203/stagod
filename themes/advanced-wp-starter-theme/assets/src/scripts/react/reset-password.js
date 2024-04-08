import { createRoot } from 'react-dom/client'
import FormikUserSetNewPassword from './components/formik/FormikUserSetNewPassword'

const domNode = document.getElementById('section-reset-password')
const root = createRoot(domNode)
root.render(<FormikUserSetNewPassword userID={domNode.dataset.user_id} />)