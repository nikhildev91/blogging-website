import { AUTHORS_TABLE } from "./constants";
import execute from "./db";

export default function handler (req, res){
    req.body = JSON.parse(req.body)
    const { usertype, firstName, lastName, username, email, password} = req.body
    if(usertype === 'author'){
        const text = `
        CREATE TABLE IF NOT EXISTS "authors" (
            "id" SERIAL,
            "name" VARCHAR(100) NOT NULL,
            "username" VARCHAR(15) NOT NULL,
          "password" VARCHAR(15) NOT NULL,
          "email" VARCHAR(40) NOT NULL,
          "postcount" INT,
            PRIMARY KEY ("id")
        );`;

        execute(text).then(result => {
            const query = `INSERT INTO "${AUTHORS_TABLE}" (name, username, password, email, postcount) VALUES($1, $2, $3, $4, $5)`

        execute(query, [firstName + " " + lastName, username, password, email, 0]).then(result => {console.log("successfully inserted")
      res.status(200).json({ message : "Successfullty SignUp"})}).catch(err => console.log("Failed"))

        }).catch(err => console.log("Failed"))
    
    }else if(usertype === 'admin'){



    }
}