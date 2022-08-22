import axios from "axios";

const handlerPutData = (id,firstName,lastName) =>{
    axios.put(`api/put/${id}`,
    {
        firstName: firstName,
        lastName: lastName
    }).then((res)=>{
       console.log("Atualizado com sucesso : ", res)
    }).catch((err)=>{
       console.log(err)
    });
}

export default handlerPutData;