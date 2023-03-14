import response from "../helpers/response";
import { Request, Response } from "express";

const validate = (req:Request, res:Response, next:Function) => {
    const { body } = req
    const userBody = ['email', 'fullname']

    const bodyProperty = Object.keys(body)

    const isBodyInvalid = userBody.filter((property) => !bodyProperty.includes(property)).length === 0 ? true : false

    if(!isBodyInvalid) return response.error(res, 400, 'Invalid Body')
    next()
}

export default validate