import { Router, Request, Response } from "express";
import { validate } from "./middleware";
import { LoginSchema, loginSchema } from "../zodSchema/auth.schema";
import { UserCreate, userCreate } from  "../zodSchema/user.schema";
import { SignIn, SignUp } from "../services/auth.service";

export const authRouter = Router();

authRouter.post("/login", validate(loginSchema), SignIn);

authRouter.post("/register", validate(userCreate), SignUp);
