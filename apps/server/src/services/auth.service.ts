import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "@prisma/client";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const SignIn = async (req: Request, res:Response) => {
  try {
    const { email, hash } = req.body as User;
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    // check if user exists
    if (!user) {
      return res.status(400).json({
        message: "Usuario invalido!",
      });
    }
    // check if passwords match
    const isValidPasword = await argon2.verify(user.hash, hash);

    if (!isValidPasword) {
      return res.status(400).json({
        message: "Contraseña incorrecta!",
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.email },
      process.env.jwtSecret as string
    );
    return res.status(201).json({
      message: `Bienvenido de vuelta ${user.email}`,
      token,
    });


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error de servidor !",
    });
  }
};

export const SignUp = async (req: Request, res: Response) => {
    try {
        const { email, hash, FirstName, LastName } = req.body as User;

        const user = await prisma.user.findUnique({
          where: { email: email },
        });

        if(user) {
            return res.status(500).json({message: "Ya existe un usuario con este correo"})
        }

        const hashedPassword = await argon2.hash(hash);

        const newUser = await prisma.user.create({
            data: {
                email,
                hash: hashedPassword,
                FirstName,
                LastName,
            }
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json({
          mrssage: "Error de servidor !",
        });
    }
};



