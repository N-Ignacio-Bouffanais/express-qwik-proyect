import { User } from "@prisma/client";
import * as argon2 from "argon2";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { AuthorizedRequest } from "api/middleware";
const prisma = new PrismaClient();

const updateUser = async (req: Request, res: Response) => {
  try {
    const { LastName, FirstName, email, hash } = req.body as User;
    const hashedPassword = await argon2.hash(hash);
    const user = (req as AuthorizedRequest).user;
    const result = await prisma.user.update({
      where: { id: user.id },
      data: {
        email,
        FirstName,
        hash: hashedPassword,
        LastName,
      }
    });
    return res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Error de servidor !",
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body as User;
    
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Error de servidor !",
    });
  }
};

const getUsers = async () => {};

const getUser = async () => {};

export { getUsers, getUser, updateUser, deleteUser };
