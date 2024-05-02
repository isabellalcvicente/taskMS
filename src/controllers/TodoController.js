//nao sei se serve mt essa tabela 

class TodoController{

    static rotas(app){

        //buscar todas as tasks
        app.get("/todo/id_user/id_task", (req, res)=>{
            res.status(200).json({"title":"comprar pao"})
        })

        // inserir uma nova task

        app.post("/todo/id_user/id_task", (req, res)=>{
            const body = req.body
            console.log(body)
            res.status(200).json(body)
        })

        app.put("/todo/id_user/id_task", (req,res)=>{
            
        })
    }
}

export default TodoController