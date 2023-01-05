import { ADMIN_TABLE, AUTHORS_TABLE } from "./constants";
import execute from "./db"

export default function handler(req, res) {
  const text = `
  CREATE TABLE IF NOT EXISTS "${ADMIN_TABLE}" (
    "id" SERIAL,
    "name" VARCHAR(100) NOT NULL,
    "username" VARCHAR(15) NOT NULL,
    "password" VARCHAR(15) NOT NULL,
    PRIMARY KEY ("id")
  );`;
  execute(text).then((result)=> {
    res.status(201).json(result)}).catch(error => console.log(error))
}
