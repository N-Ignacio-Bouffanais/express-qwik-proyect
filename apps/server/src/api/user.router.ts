import { Router, Request, Response } from "express";
import { userUpdate } from "../zodSchema/user.schema"; 
import { authenticate, validate} from "./middleware";
import { updateUser, deleteUser, getUser, getUsers } from "../services/users.service";

export const userRouter = Router();

userRouter.put("/:userId", authenticate(), validate(userUpdate), updateUser);
userRouter.delete("/:userId", deleteUser);
userRouter.get("/:userId", getUser);
userRouter.get("/users", getUsers)


