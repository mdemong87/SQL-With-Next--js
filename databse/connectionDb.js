import mysql from "mysql";



// create the connection to database
const connection = mysql.createConnection({
    host: process.env.NEXT_PUBLIC_DaTABSE_HOSTNAME,
    user: process.env.NEXT_PUBLIC_USER_NAME,
    password: process.env.NEXT_PUBLIC_DaTABSE_PASSWORD,
    database: process.env.NEXT_PUBLIC_DaTABSE_NAME
});

connection.connect((err) => {
    if (!err) {
        console.log("database is connected");
    } else {
        console.log("databse is not connected");
    }
});


export default connection;