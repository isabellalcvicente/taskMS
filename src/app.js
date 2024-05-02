import express from "express";
import UserController from "./controllers/UserController.js"
import TaskController from "./controllers/TaskController.js"
import TodoController from "./controllers/TodoController.js"
import cors from "cors";

const app = express()

const port = process.env.PORT || 3000

//Levante do servidor da API.
app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}`)
})

/**
 * Middleware para reconhecimento do formato JSON para a aplicação
*/
app.use(express.json())

app.use(cors("*"))

app.delete('/task/:id', (req, resp)=> {
    resp.send(`Id passado: ${req.params.id}`);
});

app.delete('/user/:id',(req,resp)=>{
    resp.send(`Id passado: ${req.params.id}`);
});

/** 
 * Chamada das rotas do controller
*/
UserController.rotas(app)
TaskController.rotas(app)
TodoController.rotas(app)


