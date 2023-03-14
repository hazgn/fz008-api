import  express from "express";
import morganMiddleware from "./src/middlewares/morganMiddlewares";
import cors from 'cors'

import './src/config/config'

import router from "./src/routes";
import env from './src/helpers/env'

const server = express()

const port = env.PORT || 8000

server.listen(port, ()=> {
    console.log('Server is Connected',port);
})

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(morganMiddleware)
server.use(router)