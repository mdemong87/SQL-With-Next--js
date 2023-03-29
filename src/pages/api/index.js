import connection from "..//../../databse/connectionDb";

export default async function handler(req, res) {


  const method = req.method;

  switch (method) {
    case "GET":
      forget(req, res);
      break;
    case "POST":
      forpost(req, res);
      break;
    default: res.status(501).json({ success: false, error: "methid not allow" });
      break;
  }

}


//handle get method
const forget = (req, res) => {

  //sql commend
  const sql = "SELECT * FROM stuents"

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

// hanlde post method
const forpost = (req, res) => {

  //distructer body data
  const { name, age, address } = req.body;

  // sql commend
  const sql = "INSERT INTO stuents(name,age,address) VALUES('" + name + "','" + age + "','" + address + "')";

  connection.query(sql, (err, result) => {
    if (!err) {
      res.status(200).json({
        success: true,
        messege: "Student create successfully",
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


//hanlde put method
const forput = (req, res) => {
  res.status(200).json({
    success: true,
    messege: req.method
  });
}



//hanlde delete method
const fordelete = (req, res) => {
  res.status(200).json({
    success: true,
    messege: req.method
  });
}




