class UserController{ 


    static rotas(app){
        //busca os users
        app.get("/user",(req,res)=>{
            res.status(200).json({"user":"maria silva"})
        })
        //
        app.post("/user", (req, res)=>{
            const body=req.body
            console.log(body)
            res.status(200).json(body)
        })

        app.put("/user/id", (req,res)=>{
            
        })
}
}

export default UserController