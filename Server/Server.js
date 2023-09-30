import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

//database connection
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student"
})

//fetch the record from the database
app.get('/', (req, res)=>{
    const sql = "SELECT * FROM crud";
    database.query(sql, (err, result)=>{
        if(err) {
            return res.json({Message: "Error Inside Server"});
        }
        else{
            return res.json(result);
        }
    })
})

//inserting the record into the database
app.post('/crud',(req, res)=>{
    const sql = "INSERT INTO crud (`name`,`emai`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email
    ]
    database.query(sql, [values], (err, result)=>{
        if(err) {
            return res.json({Message: "Error Inside Server"});
        }
        else{
            return res.json(result);
        }
    })
})

//Reading the Records
app.get('/Read/:id', (req, res)=>{
    const sql = "SELECT * FROM crud WHERE id = ?";
    const id = req.params.id;
    database.query(sql,[id], (err, result)=>{
        if(err) {
            return res.json({Message: "Error Inside Server"});
        }
        else{
            return res.json(result);
        }
    })
})

//Updating the Records
app.put('/Edit/:id', (req, res) => {
    const sql = "UPDATE crud SET `name`=?, `emai`=? WHERE id=?";
    const id = req.params.id;
    database.query(sql, [req.body.name, req.body.email, id], (err, result)=>{
        if(err) {
            return res.json({Message: "Error Inside Server"});
        }
        else{
            return res.json(result);
        }
    })
})

//deleting the records
app.delete('/Delete/:id', (req, res) => {
    const sql = "DELETE FROM crud WHERE id =?"
    const id = req.params.id;
    database.query(sql, [id], (err, result)=>{
        if(err) {
            return res.json({Message: "Error Inside Server"});
        }
        else{
            return res.json(result);
        }
    })
})

app.listen(8080, ()=>{
    console.log("Listening");
})