import mysql from "mysql";



// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'sql-practise'
});

connection.connect((err) => {
    if (!err) {
        console.log("database is connected");
    } else {
        console.log("databse is not connected");
    }
});


export default connection;