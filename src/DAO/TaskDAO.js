import TaskModel from "../models/TaskModel"
import DAO from "./DAO"

const TASK_TABLE = "task"

class TaskDAO extends DAO{
    static async createTask(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO USER (TITLE, DESCRIPTION, CREATED_AT, STATUS) VALUES (?, ?, ?, ?)
        `
        const result = await this.create(query, dataValues)
        return result
    }
    static async readAllTasks(){
        return await this.read(TASK_TABLE)
    }
    static readTaskId(id){
        return this.readId(TASK_TABLE, id)
    }
    static deleteTaskId(id){
        return this.deleteId(TASK_TABLE, id)
    }
    static updateTaskId(id, data){
        this.updateId(TASK_TABLE, id, data)
    }
}

export default TaskDAO;