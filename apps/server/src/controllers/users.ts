import { Response, Request } from "express";
import { createUser, getUser, getUsers, deleteUser, updateUser } from "services/users";


const welcome = async (req: Request, res: Response) => {
    res.json("Welcome to my API")
}

export { welcome}