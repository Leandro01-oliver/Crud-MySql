import { connection} from "../../../../config/mysql/configSql";

const  handlerPut = async(req,res) =>{
    if (req.method === 'PUT') {

        const id = req.query;

        const tratamento = id.id
    
        let conversaoId = parseInt(tratamento)
        
        const urlImg = req.body.urlImg;

        const firstName = req.body.firstName;
        
        const lastName  = req.body.lastName;

       await connection.query('UPDATE tb_teste SET first_name = ?, last_name = ?, img_user = ? WHERE id = ?',
        [firstName,lastName,urlImg,conversaoId],
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