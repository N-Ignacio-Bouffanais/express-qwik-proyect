import { Router, Request, Response } from "express";
import { userUpdate } from "../zodSchema/user.schema"; 
import { authenticate, validate} from "./middleware";

export const userRouter = Router();

userRouter.put("/:userId", authenticate(), validate(userUpdate));


