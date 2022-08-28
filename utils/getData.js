import axios from "axios";

const handlerGetData = (setDado) =>{

     axios.get("/api/get/")
    .then((res)=>{
      setDado(res.data)
    }).catch((err)=>{
       console.log(err)
    });

}


export {handlerGetData}