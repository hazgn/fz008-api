import response from "../helpers/response";
import userModel from '../models/users'

import { Request, Response } from "express";

const usersListAllcontroller = async (req:Request, res:Response) => {
    try {
        const result = await userModel.listAllUsers()

        return response.success(res, 200, result)
    } catch (error) {
        return response.error(res, 500, error)
    }
}

export default {
    usersListAllcontroller
}