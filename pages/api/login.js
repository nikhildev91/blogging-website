import { AUTHORS_TABLE } from "./constants"
import execute from "./db"

export default function handler(req, res){
    req.body = JSON.parse(req.body)

    const { usertype, username, password} = req.body

   if(usertype === "author"){
    const query = `SELECT * FROM ${AUTHORS_TABLE} WHERE "password" = $1 AND "username" = $2;`
    execute(query, [password, username]).then(result => {
        if(result.result.rowCount == 0){
            res.status(400).json({ status : false, message : "Invalid Username or Password."})
        }else{
            res.status(201).json({result : result.result.rows[0], status : true})
        }
    }).catch(error => console.log(error))
   }
}