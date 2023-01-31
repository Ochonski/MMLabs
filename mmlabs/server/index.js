const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "12345",
   database: "mmlabs"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { nome } = req.body;
  const { email } = req.body;
  const { telefone } = req.body;

  let SQL = "INSERT INTO mmlabs.pessoa (nome, email, telefone) values (?,?,?)";

  db.query(SQL, [nome, email, telefone], (err, result) => {
   if(err) console.log(err)
   else res.send(result); 
  })
});

app.get("/getCards", (req, res) => {
   let SQL = "SELECT * FROM mmlabs.pessoa p ORDER BY p.nome ASC";
   db.query(SQL, (err, result)=> {
      if(err) console.log(err)
      else res.send(result);
   })
});

app.put("/edit", (req, res) => {
  const {id} = req.body;
  const {nome} = req.body;
  const {email} = req.body;
  const {telefone} = req.body;

  let SQL = "UPDATE mmlabs.pessoa SET nome = ?, email = ?, telefone = ? where pessoa_id = ?";

  db.query(SQL, [nome, email, telefone, id], (err, result) => {
   if(err) console.log(err)
   else res.send(result);
  });
})

app.delete("/delete/:id", (req, res) => {
   const {id} = req.params;
   let SQL = "DELETE FROM mmlabs.pessoa where pessoa_id = ?";

   db.query(SQL, [id], (err, result) => {
      if(err) console.log(err);
      else res.send(result);
   });
})


app.listen(3001, () => {console.log("rodando server")});