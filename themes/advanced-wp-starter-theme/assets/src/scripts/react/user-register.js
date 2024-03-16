import { createRoot } from 'react-dom/client'
import UserRegister from './components/UserRegister'

const domNode = document.getElementById('user-register')
const root = createRoot(domNode)
root.render(<UserRegister />)