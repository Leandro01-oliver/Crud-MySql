import axios from "axios";

const handlerGetSearchData =  (search,setDadoFilter) =>{
      axios.get(`/api/getLike/${search}`)
      .then((res)=>{
         setDadoFilter(res.data)
      }).catch((err)=>{
         console.log(err)
      });
    
}


export {handlerGetSearchData}