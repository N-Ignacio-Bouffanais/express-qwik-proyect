import { User } from "@prisma/client";
import * as argon2 from "argon2";
import { prisma } from "../db/client";
import { Request, Response } from "express";
import { AuthorizedRequest } from "api/middleware";


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

const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    // check if user exists
    if (!user) {
      return res.status(400).json({
        message: "Ese Usuario no existe!",
      });
    }
    return res.status(200).json({ message: `Usuario ${user?.FirstName}` });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Error de servidor !",
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    // check if user exists
    if (!user) {
      return res.status(400).json({
        message: "Usuario invalido!",
      });
    }
    await prisma.user.delete({
      where: { id: userId },
    })

    return res.status(200).json({message: `Usuario eliminado con exito!`})
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Error de servidor !",
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    // Only select the `id`
    const userWithIdOnly = await prisma.user.findMany({ select: { id: true } });
    return userWithIdOnly
  } catch (e) {
    return res.status(500).json({
      message: "Error de servidor !",
    });
  }
};


export { getUsers, getUser, updateUser, deleteUser };
