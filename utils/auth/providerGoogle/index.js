import { auth } from '../../../config/firebase/connectingFirebase'
import { GoogleAuthProvider } from 'firebase/auth'

const providerGoogle = new GoogleAuthProvider();

export { providerGoogle }