import axios from "axios";

const handlerGetSearchData = async (search,setDadoFilter) =>{

    await axios.get(`/api/getLike/${search}`)
    .then((res)=>{
       setDadoFilter(res.data)
    }).catch((err)=>{
       console.log(err)
    });

}


export {handlerGetSearchData}