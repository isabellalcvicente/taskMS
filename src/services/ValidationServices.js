import TaskDAO from "../DAO/TaskDAO.js"
import ValidationTodo from "../services/ValidationTodo.js"

class ValidationServices{
    static validateExistence(id){
        const task = TaskDAO.readTaskId(id)
        if(task){
            return true
        }else{
            return false
        }
    }
    static validateTitle(title){
        return typeof title == "string" && title.length > 2
    }
    static validateDescription(description){
        return typeof description == "string" && description.length > 2
    }
    static validateCreated_at(created_at){
        const dateCreated_at = new Date(created_at)
        if (validExclusion(dateCreated_at)) {
            return true
        }else{
            return false
        }
    }   
    static validateStatus(status){
        if (status== enumStatus.pending){
        return true
    }else{
        return false
    }
}  
    static validateFieldsTask(title, description, created_at, status){
        const isValid = this.validateTitle(title) &&
                        this.validateDescription(description) &&
                        this.validateCreated_at(created_at) &&
                        this.validateStatus(status)
        return isValid
    }
}