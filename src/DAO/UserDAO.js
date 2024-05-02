import DAO from "./DAO"

const USER_TABLE = "user"

class UserDAO extends DAO{
    static async createUser(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO USER (USERNAME) VALUES (?)
        `
        const result = await this.create(query, dataValues)
        return result
    }
    static async readAllUsers(){
        return await this.read(USER_TABLE)
    }
    static readUserId(id){
        return this.readId(USER_TABLE, id)
    }
    static deleteUserId(id){
        return this.deleteId(USER_TABLE, id)
    }
    static updateUserId(id, data){
        this.updateId(USER_TABLE, id, data)
    }
}

export default UserDAO;