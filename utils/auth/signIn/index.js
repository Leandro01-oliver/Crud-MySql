import { signInWithPopup } from "firebase/auth"
import { auth } from "../../../config/firebase/connectingFirebase"
import { providerGoogle } from "../providerGoogle"

const handlerConnectGoogle = async() =>{
  await signInWithPopup(auth,providerGoogle)
  .then(res =>{
    console.log("Sucesso na conexão do provider do google", res)
  })
  .catch(err =>{
    console.log("Não foi possível se conectar ao provider do google : ",err)
  })
}

export { handlerConnectGoogle }