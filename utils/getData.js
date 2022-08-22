import axios from "axios";

const handlerGetData = async () =>{

    await axios.get("/api/get/")
    .then((res)=>{
    
    }).catch((err)=>{
       console.log(err)
    });

}


export {handlerGetData}