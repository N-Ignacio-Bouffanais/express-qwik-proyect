import { Response, Request } from "express";


const welcome = async (req: Request, res: Response) => {
    res.json("Welcome to my API")
}

export { welcome}