import express from "express";

const userRouter = express.Router()

import userControllers from '../controllers/users'
import validate from "../middlewares/validate";

userRouter.get('/', userControllers.usersListAllController)
userRouter.get('/find/:id', userControllers.userByIdController)
userRouter.post('/', validate, userControllers.createUsersController)
userRouter.patch('/:id', validate, userControllers.editUsersController)
userRouter.delete('/:id', userControllers.deleteUsersByIdController)

export default userRouter