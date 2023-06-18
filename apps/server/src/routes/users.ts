import { deleteItem, getItem, getItems, postItem, putItem } from "controllers/users";
import { Router } from "express";
import { schemaValition } from "middlewares/schema.validator";

const users_router =  Router()

users_router.post("/", postItem);
users_router.get('/users', getItems);
users_router.get('/users/:id', getItem);
users_router.put('/users/:id', putItem);
users_router.delete('/users/:id', deleteItem);


export { users_router };