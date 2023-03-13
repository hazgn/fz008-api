import { Response } from "express"

export const error = (res:Response, status:number, data:any) => {
    const dataError = new Error(data)
    res.status(status).json({err:{message:dataError.message}})
}

export default{
    success :(res:Response, status:number, data: any) => {
        res.status(status).json({result:data})
    },
    error : (res:Response, status:number, data:any) => {
        const dataError = new Error(data)
        res.status(status).json({err:{message:dataError.message}})
    }
}

