import { signOut } from "firebase/auth"
import { auth } from "../../../config/firebase/connectingFirebase"

const handlerDesconectGoogle = async() =>{
  await signOut(auth)
  .then(res =>{
    console.log("Sucesso na desconectividade do provider do google", res)
  })
  .catch(err =>{
    console.log("Não foi possível se desconectar ao provider do google : ",err)
  })
}

export { handlerDesconectGoogle }