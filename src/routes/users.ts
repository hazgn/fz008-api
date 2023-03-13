import express from "express";

const userRouter = express.Router()

import userControllers from '../controllers/users'

userRouter.get('/', userControllers.usersListAllcontroller)

export default userRouter