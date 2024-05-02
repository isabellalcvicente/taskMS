import  Database from "./DAO/DAO.js"

const TASK_TABLE  = `
    "ID" integer PRIMARY KEY NOT NULL,
    "TITLE" varchar(255),
    "DESCRIPTION" varchar(255),
    "CREATED_AT" timestamp,
    "STATUS" enum ('pending','completed' ,'in process')
);
`

const USER_TABLE = `
CREATE TABLE IF NOT EXISTS "USER" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "USERNAME" varchar(255)
);
`
const ADD_USER_DATA = `
INSERT INTO USER (USERNAME)
VALUES 
    ('user1'), 
    ('user2')
`

function criaTabelaTask() {
    Database.run(USUARIO_TABLE, (error)=> {
       if (error) {
            console.log("Erro ao criar tabela de Task")
        } else {
            console.log("Tabela Task criada com sucesso!")
        }
    });
}

function criaTabelaUser() {
    Database.run(USUARIO_TABLE, (error)=> {
       if (error) {
            console.log("Erro ao criar tabela de User")
        } else {
            console.log("Tabela User criada com sucesso!")
        }
    });
}



function populaTabelaTask() {
    Database.run(ADD_USER_DATA, (error)=> {
       if (error) {
        console.log("Erro ao popular tabela task")
        }
        else {
            console.log("Tabela Task populada com sucesso!")
        }
    });
}


function populaTabelaUser() {
    Database.run(ADD_USER_DATA, (error)=> {
       if (error) {
        console.log("Erro ao popular tabela de Usuários")
        }
        else {
            console.log("Tabela Usuários populada com sucesso!")
        }
    });
}

Database.serialize(()=>{
    criaTabelaTask();
    populaTabelaTask();
})

Database.serialize(()=>{
    criaTabelaUser();
    populaTabelaUser();
})