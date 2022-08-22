import { connection } from "../../../../config/configSql"

export default function handlerAllData(req,res){
    if (req.method === 'GET') {
      
      const id = req.query;

      const tratamento = id.id
  
      let conversaoId = parseInt(tratamento)

        connection.query('select * from tb_user WHERE id = ?',[conversaoId],(err,result)=>{
              if(err){
                console.log("Não foi possível se conectar ao mysql : ",err)
              }
              res.status(200).json(result)
        })
    }

}