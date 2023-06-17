import { welcome } from "../controllers/users";
import { Router } from "express";

const users_router =  Router()

users_router.get("/", welcome );


export { users_router };