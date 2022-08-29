import { connection } from "../../../../config/mysql/configSql";

const handlerGelAll = async(req,res) => {
    if (req.method === 'GET') {
  
    await connection.query('select * from tb_teste',(err,result)=>{
          if(err){
            console.log("Select realizado com sucesso  : ",err)
          }
          res.status(200).json(result)
        })
    }
    

}

export default handlerGelAll;