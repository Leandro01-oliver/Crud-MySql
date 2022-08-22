import { connection} from "../../../../config/configSql";

 const handlerDelete = (req,res)=>{
  if (req.method == "DELETE") {

    const id = req.query;

    const tratamento = id.id

    let conversaoId = parseInt(tratamento)

      connection.query('DELETE FROM tb_user WHERE id = ?',[conversaoId],(err,result)=>{
        if (err) {
            console.log("Não foi possível deletar : ",err)
        }
        console.log("Sucesso na deleção : ",result);
        res.status(204).json(result);
      })
  }
 }

 export default handlerDelete;