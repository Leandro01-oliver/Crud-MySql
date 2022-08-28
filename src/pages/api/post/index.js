import { connection} from "../../../../config/mysql/configSql";

 const handlerPost = async(req,res) =>{
    if (req.method === 'POST') {

        const urlImg = req.body.urlImg;
        
        const firstName = req.body.firstName;
        
        const lastName  = req.body.lastName;

       await connection.query('INSERT INTO tb_user (first_name,last_name,img_user) VALUES (?,?,?)',
        [firstName,lastName,urlImg],
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