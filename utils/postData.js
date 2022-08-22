import axios from "axios";

const handlerPostData = (firstName,lastName) =>{
    if(firstName != "" && lastName != ""){
         axios.post("api/post/",
        {
          firstName: firstName,
          lastName: lastName
        }).then(() => {
           console.log("Sucesso no envio de inoformação")
        }).catch((err) => {
         console.log("Não foi possível enviar :"+err)
        });
    }else{
        alert("Não mande informações vázias")
    }
}

export {handlerPostData}