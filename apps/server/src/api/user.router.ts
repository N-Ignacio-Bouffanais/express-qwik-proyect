import { Router } from "express";
import { userUpdate } from "../zodSchema/user.schema"; 
import { authenticate, validate} from "./middleware";
import { updateUser, deleteUser, getUser } from "../services/users.service";

export const userRouter = Router();

userRouter.put("/:userId", authenticate(), validate(userUpdate), updateUser);
userRouter.delete("/:userId", deleteUser);
userRouter.get("/:userId", authenticate(), getUser);
//userRouter.get("/users", getUsers)


