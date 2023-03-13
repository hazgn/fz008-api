import express, { Request, Response } from "express";
const router = express.Router()

import response from '../helpers/response'

import userRouter from "./users";

router.get('/', router.get('/', (req:Request, res:Response, next:Function) => {
    response.success(res, 200, 'wellcome to api')
    next()
}))

router.use('/users', userRouter)

export default router