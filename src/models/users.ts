import db from '../config/config'
import { userCreateInterface } from '../interfaces/users'

const listAllUsersModel = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users`, (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

const userByIdModel = (id:number) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE id = ?`, id, (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

const createUserModel = (body: userCreateInterface) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO users SET ?`, [body], (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

const editUsersModel = (id:number, body:userCreateInterface) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE users SET ? WHERE id = ?`, [body, id], (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

const deleteuserModel = (id:number) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM users WHERE id = ?`, [id], (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

export default {
    listAllUsersModel,
    userByIdModel,
    createUserModel,
    editUsersModel,
    deleteuserModel
}