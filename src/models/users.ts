import db from '../config/config'

const listAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users`, (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

export default {
    listAllUsers
}