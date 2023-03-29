import connection from "../../../databse/connectionDb";

export default async function handler(req, res) {

    const method = req.method;

    switch (method) {
        case "GET":
            forget(req, res);
            break;
        case "PUT":
            forput(req, res);
            break;
        case "DELETE":
            fordelete(req, res);
            break;
        default: res.status(501).json({ success: false, error: "methid not allow" });
            break;
    }

}


//handle get method
const forget = (req, res) => {

    const { id } = req.query;

    //sql commend
    var sql = `SELECT * FROM stuents WHERE id = ${id}`;

    connection.query(sql, (err, result) => {
        if (!err) {
            res.status(200).json({
                success: true,
                messege: "Students get successfully",
                data: result
            });
        } else {
            res.status(500).json({
                success: false,
                messege: "There was a server side problesms",
                error: err

            });
        }

    });

}




//hanlde put method
const forput = (req, res) => {


    const { id } = req.query;
    const { uname, uage, uaddress } = req.body;



    const sql = `UPDATE stuents SET name=?,age=?,address=? WHERE id = ${id}`;

    connection.query(sql, [uname, uage, uaddress], (err, result) => {
        if (!err) {
            res.status(200).json({
                success: true,
                messege: "Student Update Successfully",
                data: result
            });
        } else {
            res.status(500).json({
                success: false,
                messege: "There was a server side problems",
                error: err
            });
        }

    });

}



//hanlde delete method
const fordelete = (req, res) => {

    const { id } = req.query;

    //sql commend
    var sql = `DELETE FROM stuents WHERE id = ${id}`;

    connection.query(sql, (err) => {
        if (!err) {
            res.status(200).json({
                success: true,
                messege: "Studnet Delete Successfully",
            });
        } else {
            res.status(500).json({
                success: false,
                messege: "There was a server side problem",
                error: err
            });
        }

    });

}




