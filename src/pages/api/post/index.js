import { connection } from "../../../../config/configSql";

 const handlerPost = (req,res) =>{
    if (req.method === 'POST') {

        const firstName = req.body.firstName;
        
        const lastName  = req.body.lastName;

        connection.query('INSERT INTO tb_user (first_name,last_name) VALUES (?,?)',
        [firstName,lastName],
        (err,result)=>{
            if (err) {
                console.log("Nao foi possível dar o insert : ",err)
            }
            console.log("Sucesso no insert : ",result);
            res.status(201).json(result);
        })
    }
}

export default handlerPost;