import { connection } from "../../../../config/configSql"

export default function handlerData(req,res){
    if (req.method === 'GET') {
      

        connection.query('select * from tb_user',(err,result)=>{
              if(err){
                console.log("Não foi possível se conectar ao mysql : ",err)
              }
              res.status(200).json(result)
        })
    }

}