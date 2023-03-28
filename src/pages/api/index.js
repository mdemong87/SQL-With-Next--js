// get the client
const mysql = require('mysql2');

export default async function handler(req, res) {


// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'practise'
});

 try{

  const query="SELECT * FROM `practise table`";
  const value=[];
  const results=await connection.execute(query);
  connection.end();


  res.status(200).json(results)
 }catch(err){
  res.status(500).json(err)
 }
}
