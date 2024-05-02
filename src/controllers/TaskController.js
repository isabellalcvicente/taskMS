

class TaskController{

    static rotas(app){

        //buscar todas as tasks
        app.get("/task/title", (req, res)=>{
            res.status(200).json({"title":"comprar pao"})
        })

        // inserir uma nova task

        app.post("/task", (req, res)=>{
            const body = req.body
            console.log(body)
            res.status(200).json(body)
        })

        app.put("/task/id", (req,res)=>{
            
        })
    }
}

export default TaskController