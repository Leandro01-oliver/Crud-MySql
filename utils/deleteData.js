import axios from "axios"

const handlerDeleteData = (id) =>{
    axios.delete(`api/delete/${id}`).then((res)=>{
       console.log("Deletado com sucesso : ", res)
        alert("Deletado com sucesso")
      }).catch((err)=>{
       console.log(err)
    });
}

export {handlerDeleteData}