import response from "../helpers/response";
import userModel from '../models/users'

import { Request, Response } from "express";

const usersListAllController = async (req:Request, res:Response) => {
    try {
        const result = await userModel.listAllUsersModel()

        return response.success(res, 200, result)
    } catch (error) {
        return response.error(res, 500, error)
    }
}
const userByIdController = async (req:Request, res:Response) => {
    const { id  } = req.params

    if(!id.match(/^[0-9]+$/)) return response.error(res, 400, 'Id Invalid!')
  try {
    const result = await userModel.userByIdModel(Number(id))
    
    return response.success(res, 200, result)
  } catch (error) {
    return response.error(res, 500, error)
  }  
} 

const createUsersController = async (req:Request, res:Response) => {
    const { body } = req
    const {email, fullname} = body
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(!email || !fullname) return response.error(res, 400, 'Need Input Email & Fullname')

    if(!emailPattern.test(email)) return response.error(res, 400, 'Format Email is Invalid!')
 
    try {
        await userModel.createUserModel(body)

        return response.success(res, 200,{
            message:'Create users is successed!'
        })
    } catch (error) {
        return response.error(res, 500, error)
    }
}

const editUsersController = async (req:Request, res:Response) => {
    const {body, params} = req
    const {id} = params
    const {email, fullname} = body
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(!id.match(/^[0-9]+$/)) return response.error(res, 400, 'Id Invalid!')
    if(!email || !fullname) return response.error(res, 400, 'Need Input Email & Fullname')

    if(!emailPattern.test(email)) return response.error(res, 400, 'Format Email is Invalid!')

    try {
        const result:any = await userModel.editUsersModel(Number(id), body)

        if(result.affectedRows ===  0) return response.error(res, 400, 'User Not Found')

        return response.success(res, 200, {
            message:'Edit User is Successfull'
        })
    } catch (error) {
        return response.error(res, 500, error)
        
    }
}

const deleteUsersByIdController =async (req:Request, res:Response) => {
    const {params} = req
    const {id} = params

    if(!id.match(/^[0-9]+$/)) return response.error(res, 400, 'Id Invalid!')

    try {
        const result:any = await userModel.deleteuserModel(Number(id))

        if(result.affectedRows === 0) return response.error(res, 400, 'User Not Found!')
        
        return response.success(res, 200, {
            message:'Delete User is Successfull'
        })
    } catch (error) {
        return response.error(res, 500, error)
    }
}

export default {
    usersListAllController,
    userByIdController,
    createUsersController,
    editUsersController,
    deleteUsersByIdController
}