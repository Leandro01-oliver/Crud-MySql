import axios from "axios";
import { ref,  getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase/connectingFirebase";

const handlerPostData = (firstName,lastName,img) =>{

    if(firstName != "" && lastName != ""){

        const storageRef = ref(storage, `images/${img.name}`);

        getDownloadURL(storageRef)
        .then((downloadURL) => {
             axios.post('api/post',
            {
                urlImg: downloadURL,
                firstName: firstName,
                lastName: lastName
            }).then((res)=>{ 
                    // setTimeout(() => {
                    // window.location.href = "/"
                    // }, 2000);
            }).catch((err)=>{
            console.log(err)
            });
            alert("Criado com sucesso")
        })

    }else if(firstName == "" && lastName != ""){
        alert("Preencha o campo de primeiro nome é obrigatório")
    }else if(lastName == "" && firstName != "" ){
        alert("Preencha o campo de último nome é obrigatório")
    }
    else{
        alert("Preencha todos os campos obrigatórios")
    }
}

export {handlerPostData}