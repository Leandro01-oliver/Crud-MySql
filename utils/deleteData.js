import axios from "axios"

const handlerDeleteData = (id) =>{
    axios.delete(`api/delete/${id}`).then((res)=>{
       console.log("Deletado com sucesso : ", res)
    }).catch((err)=>{
       console.log(err)
    });
}

export {handlerDeleteData}