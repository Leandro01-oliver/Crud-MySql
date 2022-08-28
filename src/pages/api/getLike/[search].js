import { connection} from "../../../../config/mysql/configSql";

 const handlerAllFilter =  async(req,res) => {

    if (req.method === 'GET') {
      
      const search = req.query;

      const convertSearch = `%${search.search}%`;
       
          connection.query('select * from tb_user WHERE first_name LIKE (?) OR last_name LIKE (?) ',
          [convertSearch,convertSearch],(err,result)=>{
                if(err){
                  console.log("Não foi possível se conectar ao mysql : ",err)
                }
                res.status(200).json(result)
          })
    }

}

export default handlerAllFilter;