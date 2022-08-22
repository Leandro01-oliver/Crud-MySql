import { connection } from "../../../../config/configSql";

const  handlerPut = (req,res) =>{
    if (req.method === 'PUT') {

        const id = req.query;

        const tratamento = id.id
    
        let conversaoId = parseInt(tratamento)
        
        const firstName = req.body.firstName;
        
        const lastName  = req.body.lastName;

        connection.query('UPDATE tb_user SET first_name = ? AND last_name = ? WHERE id = ?',
        [firstName,lastName,conversaoId],
        (err,result)=>{
            if (err) {
                console.log("Nao foi possível dar o insert : ",err)
            }
            console.log("Sucesso no insert : ",result);
            res.status(201).json(result);
        })
    }
}
export default handlerPut;